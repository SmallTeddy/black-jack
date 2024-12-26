<script setup lang="ts">
import type { Card } from '@/types'

defineProps<{
  card?: Card
  hidden?: boolean
}>()

const suitColor = (suit: string) => {
  return suit === '♥' || suit === '♦' ? 'text-red-600' : 'text-gray-800'
}
</script>

<template>
  <div class="card-wrapper">
    <div v-if="!hidden && card" class="card" :class="suitColor(card.suit)">
      <div class="card-corner top-left">
        <div class="rank">{{ card.rank }}</div>
        <div class="suit">{{ card.suit }}</div>
      </div>
      
      <div class="card-center">
        <div class="icon">{{ card.suit }}</div>
      </div>

      <div class="card-corner bottom-right">
        <div class="rank">{{ card.rank }}</div>
        <div class="suit">{{ card.suit }}</div>
      </div>
    </div>
    <div v-else class="card card-back">
      <div class="pattern"></div>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  perspective: 1000px;
  margin: 0.25rem;
}

.card {
  width: 3.2rem;
  height: 4.8rem;
  background: white;
  border-radius: 0.4rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;
}

.card:hover {
  transform: translateY(-4px) rotateY(5deg);
  box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.2);
}

.card-corner {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.15rem;
  font-size: 0.7rem;
  line-height: 1;
}

.top-left {
  top: 0;
  left: 0;
}

.bottom-right {
  bottom: 0;
  right: 0;
  transform: rotate(180deg);
}

.card-center {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  font-size: 2.5rem;
  opacity: 0.12;
  transform: rotate(25deg);
  user-select: none;
}

.card-back {
  background: linear-gradient(135deg, 
    #1a4731 25%, 
    #2a603f 25%, 
    #2a603f 50%, 
    #1a4731 50%, 
    #1a4731 75%, 
    #2a603f 75%
  );
  background-size: 16px 16px;
  border: 2px solid #306339;
}

.pattern {
  position: absolute;
  inset: 4px;
  border: 2px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.3rem;
  background: linear-gradient(45deg,
    transparent 48%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 52%
  );
  background-size: 8px 8px;
}

.rank {
  font-weight: bold;
  font-size: 0.8rem;
}

.suit {
  font-size: 0.8rem;
}
</style> 
