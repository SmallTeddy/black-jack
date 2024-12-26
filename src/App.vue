<script setup lang="ts">
import { ref } from 'vue'
import type { GameType } from '@/types'
import Menu from '@/components/common/Menu.vue'
import BlackjackTable from '@/components/black-jack/GameTable.vue'
import PokerTable from '@/components/texas-poker/GameTable.vue'

const currentGame = ref<GameType>('menu')

const selectGame = (game: 'blackjack' | 'poker') => {
  currentGame.value = game
}

const backToMenu = () => {
  currentGame.value = 'menu'
}
</script>

<template>
  <div class="min-h-screen bg-[#306339] p-4">
    <h1 class="text-3xl font-bold mb-8 text-center text-white tracking-wide">
      {{ currentGame === 'menu' ? '扑克游戏' : currentGame === 'blackjack' ? '21点' : '德州扑克' }}
    </h1>
    
    <component
      :is="currentGame === 'menu' ? Menu : currentGame === 'blackjack' ? BlackjackTable : PokerTable"
      @select-game="selectGame"
      @back-to-menu="backToMenu"
    />
  </div>
</template>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style> 
