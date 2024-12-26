export type Suit = '♠' | '♥' | '♦' | '♣';
export type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

export interface Card {
  suit: Suit;
  rank: Rank;
}

export interface GameState {
  deck: Card[];
  playerHand: Card[];
  dealerHand: Card[];
  gameStatus: 'betting' | 'playing' | 'playerBust' | 'dealerBust' | 'playerWin' | 'dealerWin' | 'push';
}

