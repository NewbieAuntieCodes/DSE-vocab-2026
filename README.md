
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# DSE Speaking Vocabulary App

This app provides a comprehensive platform for practicing DSE speaking vocabulary, featuring word lists, interactive games, and selection tools.

## Key Features

- **Word Lists**: Categorized by topic (Learning, Environment, Travel, etc.) with definitions, phonetics, and emojis.
- **Selection Mode**: Users can pick specific words to practice, filter by difficulty (Basic/Advanced), or copy lists to clipboard.
- **Interactive Learning**: Flip-card style learning steps and comprehensive practice games (English to Chinese, Listening, Fill-in-the-blank).
- **Sorting Logic**: In grouped views (like the Travel section), words are automatically sorted within each sub-group to show **Basic (Red)** words first, followed by **Advanced (Blue)** words.
- **My Vocabulary**: A global tool allowing users to collect words from anywhere in the app by double-clicking.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Technical Details

- **Framework**: React 18
- **Styling**: Styled-components (CSS-in-JS)
- **State Management**: React Hooks (useState, useEffect, useVocabulary)
- **Deployment**: Configured for GitHub Pages via `gh-pages`
