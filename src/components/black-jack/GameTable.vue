<script setup lang="ts">
const { gameState, startNewGame, hit, stand } = useBlackjack()

const emit = defineEmits<{
  (e: 'backToMenu'): void
}>()

onMounted(() => {
  startNewGame()
})
</script>

<template>
  <div class="game-container flex flex-col justify-between">
    <!-- 添加返回按钮 -->
    <div class="flex justify-end mb-6">
      <Button
        class="apple-button bg-gray-500 text-white border-0"
        @click="emit('backToMenu')"
      >
        返回菜单
      </Button>
    </div>

    <!-- 游戏主区域 -->
    <div class="flex-1">
      <!-- 庄家区域 -->
      <div class="mb-12">
        <div class="flex items-center mb-4">
          <h2 class="text-xl text-gray-800 font-medium">庄家的牌</h2>
          <div class="flex gap-4 ml-8">
            <Card
              v-for="(card, index) in gameState.dealerHand"
              :key="index"
              :card="card"
              :hidden="index === 1 && gameState.gameStatus === 'playing'"
            />
          </div>
        </div>
      </div>

      <!-- 玩家区域 -->
      <div class="mb-12">
        <div class="flex items-center mb-4">
          <h2 class="text-xl text-gray-800 font-medium">玩家的牌</h2>
          <div class="flex gap-4 ml-8">
            <Card
              v-for="(card, index) in gameState.playerHand"
              :key="index"
              :card="card"
            />
          </div>
        </div>
      </div>

      <!-- 游戏结果 -->
      <div
        v-if="gameState.gameStatus !== 'playing'"
        class="text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm"
      >
        <span class="text-xl font-medium text-gray-800">
          游戏结果:
          {{
            {
              playerBust: "玩家爆牌",
              dealerBust: "庄家爆牌",
              playerWin: "玩家胜",
              dealerWin: "庄家胜",
              push: "平局",
            }[gameState.gameStatus]
          }}
        </span>
      </div>
    </div>

    <!-- 底部按钮区域 -->
    <div class="flex gap-4 justify-center pt-6 border-t border-gray-200">
      <Button
        class="apple-button bg-blue-500 text-white border-0"
        @click="hit"
        :disabled="gameState.gameStatus !== 'playing'"
      >
        要牌
      </Button>
      <Button
        class="apple-button bg-gray-500 text-white border-0"
        @click="stand"
        :disabled="gameState.gameStatus !== 'playing'"
      >
        停牌
      </Button>
      <Button
        class="apple-button bg-green-600 text-white border-0"
        @click="startNewGame"
        :disabled="gameState.gameStatus === 'playing'"
      >
        新游戏
      </Button>
    </div>
  </div>
</template>
