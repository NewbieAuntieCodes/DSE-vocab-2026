
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# DSE Speaking Vocabulary App (2026版)

这是一个为 DSE 口语考试设计的词汇练习应用，包含核心话题词汇、Essential Skills 单元练习以及互动记忆游戏。

## 核心功能

- **话题词汇表**：按主题（学习、环保、旅游、社会等）分类，包含音标、释义、例句及 Emoji。
- **Essential Skills 单元**：同步教材的 8 个单元词汇练习。
- **筛选模式**：支持按难度（基础/进阶）筛选，或自由选择单词生成练习。
- **互动学习**：包含翻卡学习、英译中、听音辨词、句子填空等多种训练模式。
- **我的单词本**：全局取词工具，双击任意单词即可收藏。

---

## 开发者指南：词汇库扩展规范 🛠️

为了防止随着 8 个单元的加入导致代码冗余或变成“屎山”，本项目采用 **“原子化单词导出 (Atomic Word Export)”** 模式。

### 1. 原子化定义 (唯一事实来源)
**不要**直接在 `WordList` 的 `words` 数组里写死单词对象。
请在对应的“主题文件”（如 `src/data/society.ts`）中，将每个单词定义为独立的常量并导出。

```typescript
// src/data/society.ts (主题文件：作为“仓库”)
export const word_discrimination = {
  word: 'discrimination',
  emoji: '🚫',
  phonetic: '/dɪˌskrɪmɪˈneɪʃn/',
  definition: '歧视',
  example: 'Discrimination based on age is illegal...',
  category: 'basic'
};
```

### 2. 跨文件引用 (精选集模式)
单元文件（如 `unit1.ts`）不存储数据，只负责“点菜”。通过 `import` 引用仓库里的单词。

```typescript
// src/data/skills/unit1.ts (单元文件：作为“货架”)
import { word_discrimination } from '../society'; // 从社会类仓库借一个词
import { word_pollution } from '../environmental'; // 从环保类仓库借一个词

export const skillsUnit1 = {
  id: 'skills-unit-1',
  title: 'Unit 1: 表达与总结',
  words: [ 
    word_discrimination, 
    word_pollution,
    // 如果是本单元独有的新词，可以临时定义在这里
  ]
};
```

### 3. 添加新单词的逻辑
- **属于某个话题**：先在 `society.ts` 或 `environmental.ts` 等主题文件中补齐 `export const`。
- **属于逻辑连接词**：如果是一些通用的连接词（如 *Moreover*, *However*），请放入 `src/data/skills/shared_connectors.ts`。
- **处理重复**：如果 Unit 1 和 Unit 4 都用到同一个词，只需两次 `import` 同一个常量。**严禁复制粘贴对象内容**。

### 4. 维护规范
如果你发现某个单词的音标或解释错了，**只需要在定义它的那个主题文件中改一次**，所有引用该单词的话题表和 Unit 单元都会自动更新。

---

## 本地开发

1. 安装依赖：
   `npm install`
2. 启动项目：
   `npm run dev`

## 技术栈

- **框架**: React 18
- **样式**: Styled-components (CSS-in-JS)
- **状态管理**: React Hooks (useState, useEffect, useVocabulary)
- **部署**: 通过 GitHub Actions 自动部署至 GitHub Pages。
