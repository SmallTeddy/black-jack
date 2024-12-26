<script setup lang="ts">
import { usePoker } from "@/composables/usePoker";
import Card from "../common/Card.vue";

const emit = defineEmits<{
  (e: "backToMenu"): void;
}>();

const { players, communityCards, gameState, initGame, fold, continueGame } = usePoker();

// 初始化游戏
initGame();
</script>

<template>
  <div class="game-container">
    <!-- 顶部控制栏 -->
    <div class="top-bar">
      <div class="game-status">
        <template v-if="gameState.round === 'showdown'">
          {{ gameState.result }}
        </template>
        <template v-else>
          ({{
            {
              preflop: "前翻牌",
              flop: "翻牌",
              turn: "转牌",
              river: "河牌",
            }[gameState.round]
          }})
        </template>
      </div>
      <div class="controls">
        <button class="control-button" @click="initGame">新游戏</button>
        <button class="control-button" @click="emit('backToMenu')">返回菜单</button>
      </div>
    </div>

    <!-- 电脑区域 -->
    <div class="player-area computer">
      <div class="player-info">
        <h3>{{ players[1].name }}</h3>
      </div>
      <div class="cards">
        <Card
          v-for="card in players[1].cards"
          :key="card.suit + card.rank"
          :card="card"
          :hidden="gameState.round !== 'showdown'"
        />
      </div>
    </div>

    <!-- 公共牌区域 -->
    <div class="community-area">
      <div class="community-cards-wrapper">
        <h3 class="area-title">公共牌</h3>
        <div class="community-cards">
          <Card
            v-for="card in communityCards"
            :key="card.suit + card.rank"
            :card="card"
          />
          <div
            v-for="i in 5 - communityCards.length"
            :key="i"
            class="card-placeholder"
          ></div>
        </div>
      </div>
    </div>

    <!-- 玩家区域 -->
    <div class="player-area">
      <div class="cards">
        <Card
          v-for="card in players[0].cards"
          :key="card.suit + card.rank"
          :card="card"
        />
      </div>
      <div class="player-info">
        <h3>{{ players[0].name }}</h3>
      </div>
      <div class="actions">
        <button @click="fold">弃牌</button>
        <button @click="continueGame">
          {{ communityCards.length === 5 ? "开牌" : "继续" }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background: #306339;
  border-radius: 1rem;
  min-height: 80vh;
}

.player-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.computer {
  flex-direction: column-reverse;
}

.cards {
  display: flex;
  gap: 0.5rem;
}

.community-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.community-cards-wrapper {
  background: rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-radius: 1rem;
  min-width: 400px;
}

.area-title {
  color: white;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.card-placeholder {
  margin: 0.25rem;
  width: 3.2rem;
  height: 4.8rem;
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 0.3rem;
}

.community-cards {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.player-info {
  color: white;
  text-align: center;
}

.actions {
  display: flex;
  gap: 1rem;
}

button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.deal-button {
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background: #4a9e5c;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.deal-button:hover {
  background: #3d8a4e;
  transform: translateY(-2px);
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.game-status {
  color: white;
  font-size: 1.1rem;
  min-width: 200px;
}

.controls {
  display: flex;
  gap: 1rem;
}

.control-button {
  padding: 0.5rem 1rem;
  background: #4a4a4a;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.control-button:hover {
  background: #3d3d3d;
  transform: translateY(-2px);
}
</style>
