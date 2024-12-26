import type { PokerState } from '@/types'
import { createDeck } from '@/utils/game'

export function usePoker() {
  const gameState = ref<PokerState>({
    deck: [],
    playerHand: [],
    communityCards: [],
    gameStatus: 'betting',
    chips: 1000,
    currentBet: 0,
  })

  const startNewGame = () => {
    gameState.value = {
      deck: createDeck(),
      playerHand: [],
      communityCards: [],
      gameStatus: 'preFlop',
      chips: 1000,
      currentBet: 0,
    }

    dealPlayerCards()
  }

  const dealPlayerCards = () => {
    gameState.value.playerHand = [
      gameState.value.deck.pop()!,
      gameState.value.deck.pop()!,
    ]
  }

  const dealCommunityCards = () => {
    switch (gameState.value.gameStatus) {
      case 'preFlop':
        gameState.value.communityCards = [
          gameState.value.deck.pop()!,
          gameState.value.deck.pop()!,
          gameState.value.deck.pop()!,
        ]
        gameState.value.gameStatus = 'flop'
        break
      case 'flop':
        gameState.value.communityCards.push(gameState.value.deck.pop()!)
        gameState.value.gameStatus = 'turn'
        break
      case 'turn':
        gameState.value.communityCards.push(gameState.value.deck.pop()!)
        gameState.value.gameStatus = 'river'
        break
    }
  }

  const fold = () => {
    startNewGame()
  }

  return {
    gameState,
    startNewGame,
    dealCommunityCards,
    fold,
  }
} 
