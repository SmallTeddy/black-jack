<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Button } from "ant-design-vue";
import type { Card, PokerState } from "@/types";
import { createDeck } from "@/utils/game";
import CardComponent from "@/components/common/Card.vue";

const emit = defineEmits<{
  (e: "backToMenu"): void;
}>();

const gameState = ref<PokerState>({
  deck: [],
  playerHand: [],
  communityCards: [],
  gameStatus: "betting",
  chips: 1000,
  currentBet: 0,
});

const startNewGame = () => {
  gameState.value = {
    deck: createDeck(),
    playerHand: [],
    communityCards: [],
    gameStatus: "preFlop",
    chips: 1000,
    currentBet: 0,
  };

  // 发两张底牌
  dealPlayerCards();
};

const dealPlayerCards = () => {
  gameState.value.playerHand = [gameState.value.deck.pop()!, gameState.value.deck.pop()!];
};

const dealCommunityCards = () => {
  switch (gameState.value.gameStatus) {
    case "preFlop":
      // 发三张公共牌
      gameState.value.communityCards = [
        gameState.value.deck.pop()!,
        gameState.value.deck.pop()!,
        gameState.value.deck.pop()!,
      ];
      gameState.value.gameStatus = "flop";
      break;
    case "flop":
      // 发转牌
      gameState.value.communityCards.push(gameState.value.deck.pop()!);
      gameState.value.gameStatus = "turn";
      break;
    case "turn":
      // 发河牌
      gameState.value.communityCards.push(gameState.value.deck.pop()!);
      gameState.value.gameStatus = "river";
      break;
  }
};

const fold = () => {
  startNewGame();
};

onMounted(() => {
  startNewGame();
});
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
          <CardComponent
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
          <CardComponent
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
