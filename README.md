# AI News Intelligence Platform — Frontend

React dashboard for the AI News Intelligence Platform. Displays AI-processed news articles with summaries, sentiment badges, and key insights fetched from the Spring Boot backend.

## Tech Stack

- React 19 + Vite
- Tailwind CSS
- Axios
- Deployed on Vercel

## Setup (under 5 minutes)

1. Clone the repo
   ```bash
   git clone https://github.com/melonmusk20/ai_news_summary_frontend_model.git
   cd ai_news_summary_frontend_model/frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the dev server
   ```bash
   npm run dev
   ```

App runs on `http://localhost:5173`

> Make sure the backend is running on `http://localhost:8080` before opening the app.

## Features

- **Live news feed** — articles fetched and AI-processed on demand
- **Search** — filter articles by title keyword
- **Sentiment filter** — view Positive / Negative / Neutral articles
- **AI summaries** — 2-sentence summary per article
- **Key insights** — 3 bullet-point insights per article
- **Source links** — direct links to original articles

## Connecting to Backend

The app points to the deployed Render backend by default. To use a local backend, update `src/App.jsx` fetch URLs to `http://localhost:8080`.
