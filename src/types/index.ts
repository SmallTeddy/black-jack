export type Suit = '♠' | '♥' | '♦' | '♣'
export type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K'

export interface Card {
  suit: Suit
  rank: Rank
}

export type GameType = 'blackjack' | 'poker' | 'menu'

// 21点游戏状态
export interface BlackjackState {
  deck: Card[]
  playerHand: Card[]
  dealerHand: Card[]
  gameStatus: 'betting' | 'playing' | 'playerBust' | 'dealerBust' | 'playerWin' | 'dealerWin' | 'push'
}

// 德州扑克游戏状态
export interface PokerState {
  deck: Card[]
  playerHand: Card[]
  communityCards: Card[]
  gameStatus: 'betting' | 'preFlop' | 'flop' | 'turn' | 'river' | 'showdown'
  chips: number
  currentBet: number
}

export interface Player {
  id: string
  name: string
  chips: number
  cards: Card[]
  bet: number
  folded: boolean
  isComputer: boolean
}

export interface GameState {
  pot: number
  currentBet: number
  round: 'preflop' | 'flop' | 'turn' | 'river' | 'showdown'
  currentPlayer: string
  lastAction?: 'bet' | 'call' | 'raise' | 'fold' | 'check'
  minBet: number
  result?: string
}

export interface HandResult {
  rank: number
  name: string
  cards: Card[]
} 
