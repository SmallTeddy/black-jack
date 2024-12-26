import type { Card, Rank, Suit } from '../types'

export function createDeck(): Card[] {
  const suits: Suit[] = ['♠', '♥', '♦', '♣']
  const ranks: Rank[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
  const deck: Card[] = []

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ suit, rank })
    }
  }

  return shuffleDeck(deck)
}

export function shuffleDeck(deck: Card[]): Card[] {
  const shuffled = [...deck]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function calculateHandValue(hand: Card[]): number {
  let value = 0
  let aces = 0

  for (const card of hand) {
    if (card.rank === 'A') {
      aces += 1
    } else if (['K', 'Q', 'J'].includes(card.rank)) {
      value += 10
    } else {
      value += parseInt(card.rank)
    }
  }

  for (let i = 0; i < aces; i++) {
    if (value + 11 <= 21) {
      value += 11
    } else {
      value += 1
    }
  }

  return value
} 
