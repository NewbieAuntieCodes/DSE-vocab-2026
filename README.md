
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

## 核心开发准则 (Core Principles) 📌

为了确保应用的高质量体验与代码的可维护性，请遵循以下准则：

1. **唯一性与“去重”准则**：
   - **禁止冗余**：如果一个单词在“学习”、“社交”等具体话题中有了明确的分类，它**严禁**出现在 `general.ts` 的 `generalWordList` 列表中。
   - **原子引用**：跨单元（如 Unit 2）需要使用这些词时，必须通过 `import` 导入常量，保持 UI 简洁且数据源唯一。

2. **视觉等级样式映射**：
   - **必须包含 Category**：单词对象必须包含 `category: 'basic'` 或 `'advanced'`。
   - **颜色映射**：`basic` 对应红色（基础），`advanced` 对应蓝色（进阶）。缺失此属性会导致样式失效。

3. **iPad/iOS 语音引擎优化**：
   - **优先级**：在 `utils.ts` 的 `speak` 函数中，必须优先寻找 `Samantha (Enhanced)` 或 `Karen` 等清晰女声。
   - **黑名单**：主动避开 `Daniel` 等发音生硬的男声。

4. **练习模式干扰项 (Distractors) 逻辑**：
   - **生成逻辑**：生成练习题时，干扰项必须**首选当前列表内**的单词，次选全局单词池。这能显著增加练习的针对性。

5. **Unit 单元命名规范**：
   - **极简原则**：Essential Skills 的单元标题应保持极简（如 "Unit 2"），不要添加冗长的描述，以适配移动端标题栏显示。

---

## 词汇库扩展规范 🛠️

本项目采用 **“原子化单词导出 (Atomic Word Export)”** 模式。

### 1. 原子化定义 (唯一事实来源)
**不要**直接在 `WordList` 的 `words` 数组里写死单词对象。
请在对应的“主题文件”（如 `src/data/learning.ts`）中，将每个单词定义为独立的常量并导出。

```typescript
// src/data/learning.ts (主题文件：作为“仓库”)
export const word_knowledge = {
  word: 'knowledge',
  emoji: '🧠',
  phonetic: '/ˈnɒlɪdʒ/',
  definition: '知识',
  example: 'Reading books is a great way to gain knowledge.',
  category: 'basic'
};
```

### 2. 跨文件引用 (精选集模式)
单元文件（如 `unit2.ts`）不存储数据，只负责“点菜”。

```typescript
// src/data/skills/unit2.ts (单元文件：作为“货架”)
import { word_knowledge } from '../learning'; 

export const skillsUnit2 = {
  id: 'skills-unit-2',
  title: 'Unit 2',
  words: [ word_knowledge ]
};
```

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
