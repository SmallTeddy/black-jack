import type { Card, HandResult } from '@/types'

// 牌型等级
const HAND_RANKS = {
  ROYAL_FLUSH: 10,
  STRAIGHT_FLUSH: 9,
  FOUR_OF_A_KIND: 8,
  FULL_HOUSE: 7,
  FLUSH: 6,
  STRAIGHT: 5,
  THREE_OF_A_KIND: 4,
  TWO_PAIR: 3,
  ONE_PAIR: 2,
  HIGH_CARD: 1
}

// 牌型名称
const HAND_NAMES = {
  10: '皇家同花顺',
  9: '同花顺',
  8: '四条',
  7: '葫芦',
  6: '同花',
  5: '顺子',
  4: '三条',
  3: '两对',
  2: '一对',
  1: '高牌'
}

// 计算最佳手牌组合
export function evaluateHand(cards: Card[]): HandResult {
  const allCombinations = getCombinations(cards, 5)
  let bestHand: HandResult = { rank: 0, name: '', cards: [] }

  for (const combo of allCombinations) {
    const result = evaluateSingleHand(combo)
    if (result.rank > bestHand.rank) {
      bestHand = result
    }
  }

  return bestHand
}

// 评估单个五张牌组合
function evaluateSingleHand(cards: Card[]): HandResult {
  if (isRoyalFlush(cards)) {
    return { rank: HAND_RANKS.ROYAL_FLUSH, name: HAND_NAMES[10], cards }
  }
  if (isStraightFlush(cards)) {
    return { rank: HAND_RANKS.STRAIGHT_FLUSH, name: HAND_NAMES[9], cards }
  }
  if (isFourOfAKind(cards)) {
    return { rank: HAND_RANKS.FOUR_OF_A_KIND, name: HAND_NAMES[8], cards }
  }
  if (isFullHouse(cards)) {
    return { rank: HAND_RANKS.FULL_HOUSE, name: HAND_NAMES[7], cards }
  }
  if (isFlush(cards)) {
    return { rank: HAND_RANKS.FLUSH, name: HAND_NAMES[6], cards }
  }
  if (isStraight(cards)) {
    return { rank: HAND_RANKS.STRAIGHT, name: HAND_NAMES[5], cards }
  }
  if (isThreeOfAKind(cards)) {
    return { rank: HAND_RANKS.THREE_OF_A_KIND, name: HAND_NAMES[4], cards }
  }
  if (isTwoPair(cards)) {
    return { rank: HAND_RANKS.TWO_PAIR, name: HAND_NAMES[3], cards }
  }
  if (isOnePair(cards)) {
    return { rank: HAND_RANKS.ONE_PAIR, name: HAND_NAMES[2], cards }
  }
  return { rank: HAND_RANKS.HIGH_CARD, name: HAND_NAMES[1], cards }
}

// 获取所有可能的五张牌组合
function getCombinations(cards: Card[], r: number): Card[][] {
  const result: Card[][] = []
  const n = cards.length

  function combine(start: number, combo: Card[]) {
    if (combo.length === r) {
      result.push([...combo])
      return
    }
    for (let i = start; i < n; i++) {
      combo.push(cards[i])
      combine(i + 1, combo)
      combo.pop()
    }
  }

  combine(0, [])
  return result
}

// 各种牌型判断函数
function isRoyalFlush(cards: Card[]): boolean {
  return isStraightFlush(cards) && cards.some(card => card.rank === 'A')
}

function isStraightFlush(cards: Card[]): boolean {
  return isFlush(cards) && isStraight(cards)
}

function isFourOfAKind(cards: Card[]): boolean {
  const ranks = cards.map(card => card.rank)
  return new Set(ranks).size === 2 && ranks.some(rank => ranks.filter(r => r === rank).length === 4)
}

function isFullHouse(cards: Card[]): boolean {
  const ranks = cards.map(card => card.rank)
  return new Set(ranks).size === 2 && ranks.some(rank => ranks.filter(r => r === rank).length === 3)
}

function isFlush(cards: Card[]): boolean {
  return new Set(cards.map(card => card.suit)).size === 1
}

function isStraight(cards: Card[]): boolean {
  const values = cards.map(card => getCardValue(card.rank)).sort((a, b) => a - b)
  return values.every((val, i) => i === 0 || val === values[i - 1] + 1)
}

function isThreeOfAKind(cards: Card[]): boolean {
  const ranks = cards.map(card => card.rank)
  return new Set(ranks).size === 3 && ranks.some(rank => ranks.filter(r => r === rank).length === 3)
}

function isTwoPair(cards: Card[]): boolean {
  const ranks = cards.map(card => card.rank)
  const pairs = [...new Set(ranks)].filter(rank => ranks.filter(r => r === rank).length === 2)
  return pairs.length === 2
}

function isOnePair(cards: Card[]): boolean {
  const ranks = cards.map(card => card.rank)
  return new Set(ranks).size === 4
}

function getCardValue(rank: string): number {
  const values: { [key: string]: number } = {
    'A': 14, 'K': 13, 'Q': 12, 'J': 11,
    '10': 10, '9': 9, '8': 8, '7': 7,
    '6': 6, '5': 5, '4': 4, '3': 3, '2': 2
  }
  return values[rank]
} 
