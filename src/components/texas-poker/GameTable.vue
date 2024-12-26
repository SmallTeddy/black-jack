<script setup lang="ts">
const { gameState, startNewGame, dealCommunityCards, fold } = usePoker()

const emit = defineEmits<{
  (e: 'backToMenu'): void
}>()

onMounted(() => {
  startNewGame()
})
</script>

<template>
  <div class="game-container flex flex-col">
    <div class="flex justify-between mb-6">
      <span class="text-lg font-medium">筹码: {{ gameState.chips }}</span>
      <Button
        class="apple-button bg-gray-500 text-white border-0"
        @click="emit('backToMenu')"
      >
        返回菜单
      </Button>
    </div>

    <div class="flex-1">
      <!-- 公共牌区域 -->
      <div class="mb-8">
        <h2 class="text-xl text-gray-800 font-medium mb-4">公共牌</h2>
        <div class="flex gap-4 justify-center">
          <Card
            v-for="(card, index) in gameState.communityCards"
            :key="index"
            :card="card"
          />
        </div>
      </div>

      <!-- 玩家手牌区域 -->
      <div class="mb-8">
        <h2 class="text-xl text-gray-800 font-medium mb-4">你的手牌</h2>
        <div class="flex gap-4 justify-center">
          <Card
            v-for="(card, index) in gameState.playerHand"
            :key="index"
            :card="card"
          />
        </div>
      </div>
    </div>

    <!-- 操作按钮 -->
    <div class="flex gap-4 justify-center pt-6 border-t border-gray-200">
      <Button
        class="apple-button bg-blue-500 text-white border-0"
        @click="dealCommunityCards"
        :disabled="gameState.gameStatus === 'betting' || gameState.gameStatus === 'river'"
      >
        {{ gameState.gameStatus === "preFlop" ? "发公共牌" : "发下一张" }}
      </Button>
      <Button class="apple-button bg-red-500 text-white border-0" @click="fold">
        弃牌
      </Button>
      <Button class="apple-button bg-green-600 text-white border-0" @click="startNewGame">
        新游戏
      </Button>
    </div>
  </div>
</template>
