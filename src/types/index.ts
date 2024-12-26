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
