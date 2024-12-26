# 扑克游戏合集

一个使用 Vue 3 + TypeScript 开发的扑克游戏合集，包含21点和德州扑克。采用现代化的技术栈和精美的苹果风格界面设计。

## 预览

![游戏预览](./preview.png)

## 特性

- 🎮 多种扑克游戏
  - 21点（Blackjack）
  - 德州扑克（Texas Hold'em）
- 🎨 精美的苹果风格界面设计
- 🎴 流畅的卡牌动画效果
- 📱 响应式设计，支持移动端
- 🛠️ 使用现代化技术栈

## 技术栈

- Vue 3 - 渐进式 JavaScript 框架
- TypeScript - 带类型定义的 JavaScript
- Vite - 下一代前端构建工具
- UnoCSS - 原子化 CSS 引擎
- Ant Design Vue - 企业级 UI 组件库

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 游戏规则

### 21点

1. 游戏开始时，玩家和庄家各获得两张牌，庄家的第二张牌是暗牌
2. 玩家可以选择"要牌"或"停牌"
3. 玩家爆牌（超过21点）则立即输掉游戏
4. 玩家停牌后，庄家开始要牌，直到点数达到17或以上
5. 最终比较双方点数，点数较大者获胜（不超过21点）

### 德州扑克

1. 每位玩家获得两张底牌
2. 经过下注后，发出三张公共牌（翻牌）
3. 再次下注后，发出第四张公共牌（转牌）
4. 最后一轮下注后，发出第五张公共牌（河牌）
5. 使用手上的两张牌和五张公共牌中的任意牌组成最佳的五张牌组合

## 项目结构

```
src/
├── components/
│   ├── common/        # 通用组件
│   ├── blackjack/     # 21点游戏组件
│   ├── poker/         # 德州扑克组件
│   └── Menu.vue       # 主菜单组件
├── types/             # TypeScript 类型定义
├── utils/             # 工具函数
├── App.vue           # 根组件
└── main.ts           # 入口文件
```

## 开发计划

- [x] 基础游戏框架
- [x] 21点游戏实现
- [x] 德州扑克基础实现
- [ ] 德州扑克下注系统
- [ ] 多人游戏支持
- [ ] 游戏记录与统计
- [ ] 保存游戏进度
- [ ] 更多游戏玩法

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 开源协议

本项目基于 MIT 协议开源，详见 [LICENSE](./LICENSE) 文件。

## 作者

SmallTeddy

## 致谢

- [Vue.js](https://vuejs.org/)
- [Ant Design Vue](https://antdv.com/)
- [UnoCSS](https://github.com/unocss/unocss)

