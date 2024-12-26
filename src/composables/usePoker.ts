import type { Card, Player, GameState, HandResult } from '@/types'
import { createDeck, shuffleDeck } from '@/utils/game'
import { evaluateHand } from '@/utils/poker'

export function usePoker() {
  const deck = ref<Card[]>([])
  const communityCards = ref<Card[]>([])
  const currentHands = ref<{ [key: string]: HandResult }>({})
  const players = ref<Player[]>([
    {
      id: 'player',
      name: '玩家',
      cards: [],
      folded: false,
      isComputer: false
    },
    {
      id: 'computer',
      name: '电脑',
      cards: [],
      folded: false,
      isComputer: true
    }
  ])

  const gameState = ref<GameState>({
    round: 'preflop',
    currentPlayer: 'player'
  })

  const initGame = () => {
    deck.value = shuffleDeck(createDeck())
    players.value.forEach((player: Player) => {
      player.cards = [deck.value.pop()!, deck.value.pop()!]
      player.folded = false
    })
    communityCards.value = [
      deck.value.pop()!,
      deck.value.pop()!,
      deck.value.pop()!
    ]
    gameState.value = {
      round: 'flop',
      currentPlayer: 'player'
    }
  }

  const continueGame = () => {
    if (communityCards.value.length === 5) {
      endRound()
    } else {
      const newCard = deck.value.pop()!
      communityCards.value = [...communityCards.value, newCard]
      gameState.value.round = communityCards.value.length === 4 ? 'turn' : 'river'
    }
  }

  const fold = () => {
    const player = players.value.find((p: Player) => p.id === gameState.value.currentPlayer)!
    player.folded = true
    endRound()
  }

  const endRound = () => {
    const foldedPlayer = players.value.find((p: Player) => p.folded)
    if (foldedPlayer) {
      const winner = players.value.find((p: Player) => !p.folded)!
      showResult('弃牌', winner.id === 'player')
      return
    }
    
    const playerHand = evaluateHand([...players.value[0].cards, ...communityCards.value])
    const computerHand = evaluateHand([...players.value[1].cards, ...communityCards.value])
    
    currentHands.value = {
      player: playerHand,
      computer: computerHand
    }
    
    let result = ''
    if (playerHand.rank > computerHand.rank) {
      result = `玩家获胜 - ${playerHand.name}`
    } else if (computerHand.rank > playerHand.rank) {
      result = `电脑获胜 - ${computerHand.name}`
    } else {
      result = '平局'
    }
    
    gameState.value.round = 'showdown'
    showResult(result)
  }

  const showResult = (result: string, autoRestart = true) => {
    gameState.value = {
      ...gameState.value,
      round: 'showdown',
      result
    }
    
    if (autoRestart) {
      setTimeout(() => {
        initGame()
      }, 10000)
    }
  }

  return {
    players,
    communityCards,
    gameState,
    currentHands,
    initGame,
    continueGame,
    fold,
    showResult
  }
} 
