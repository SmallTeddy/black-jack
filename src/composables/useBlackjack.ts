import type { BlackjackState } from '@/types'
import { createDeck, calculateHandValue } from '@/utils/game'

export function useBlackjack() {
  const gameState = ref<BlackjackState>({
    deck: [],
    playerHand: [],
    dealerHand: [],
    gameStatus: 'betting',
  })

  const startNewGame = () => {
    gameState.value = {
      deck: createDeck(),
      playerHand: [],
      dealerHand: [],
      gameStatus: 'playing',
    }

    dealCard('player')
    dealCard('dealer')
    dealCard('player')
    dealCard('dealer')
  }

  const dealCard = (target: 'player' | 'dealer') => {
    const card = gameState.value.deck.pop()
    if (card) {
      if (target === 'player') {
        gameState.value.playerHand.push(card)
      } else {
        gameState.value.dealerHand.push(card)
      }
    }
  }

  const hit = () => {
    dealCard('player')
    const playerValue = calculateHandValue(gameState.value.playerHand)
    if (playerValue > 21) {
      gameState.value.gameStatus = 'playerBust'
    }
  }

  const stand = () => {
    while (calculateHandValue(gameState.value.dealerHand) < 17) {
      dealCard('dealer')
    }

    const playerValue = calculateHandValue(gameState.value.playerHand)
    const dealerValue = calculateHandValue(gameState.value.dealerHand)

    if (dealerValue > 21) {
      gameState.value.gameStatus = 'dealerBust'
    } else if (dealerValue > playerValue) {
      gameState.value.gameStatus = 'dealerWin'
    } else if (playerValue > dealerValue) {
      gameState.value.gameStatus = 'playerWin'
    } else {
      gameState.value.gameStatus = 'push'
    }
  }

  return {
    gameState,
    startNewGame,
    hit,
    stand,
  }
} 
