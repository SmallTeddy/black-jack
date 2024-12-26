<script setup lang="ts">
import GameTable from './components/GameTable.vue'
</script>

<template>
  <div class="min-h-screen bg-[#306339] p-4">
    <h1 class="text-3xl font-bold mb-8 text-center text-white tracking-wide">21点游戏</h1>
    <GameTable />
  </div>
</template>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style> 
