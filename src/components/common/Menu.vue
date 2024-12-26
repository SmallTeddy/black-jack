<script setup lang="ts">
import { Button } from 'ant-design-vue'

const emit = defineEmits<{
  (e: 'selectGame', game: 'blackjack' | 'poker'): void
}>()
</script>

<template>
  <div class="game-container flex flex-col items-center justify-center gap-8">
    <h2 class="text-2xl font-bold text-gray-800">选择游戏</h2>
    <div class="flex flex-col gap-4 w-48">
      <Button
        class="apple-button bg-blue-500 text-white border-0 h-12 text-lg"
        @click="emit('selectGame', 'blackjack')"
      >
        21点
      </Button>
      <Button
        class="apple-button bg-green-500 text-white border-0 h-12 text-lg"
        @click="emit('selectGame', 'poker')"
      >
        德州扑克
      </Button>
    </div>
  </div>
</template> 
