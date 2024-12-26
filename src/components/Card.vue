<script setup lang="ts">
import type { Card } from '../types'

defineProps<{
  card: Card
  hidden?: boolean
}>()
</script>

<template>
  <div 
    class="card transform transition-all duration-200 hover:scale-105" 
    :class="{ 
      'bg-gray-300': hidden, 
      'bg-white': !hidden,
      'shadow-lg': !hidden,
      'shadow-md': hidden
    }"
  >
    <template v-if="!hidden">
      <div :class="[
        'text-2xl font-bold',
        card.suit === '♥' || card.suit === '♦' ? 'text-red-500' : 'text-gray-800'
      ]">
        {{ card.rank }}
        <span class="text-3xl">{{ card.suit }}</span>
      </div>
    </template>
  </div>
</template> 
