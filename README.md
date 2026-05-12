# AI News Intelligence Platform — Frontend

React dashboard that displays AI-processed news articles with summaries, sentiment analysis, and key insights fetched from the Spring Boot backend.

## Tech Stack

- React 19 + Vite
- Tailwind CSS
- Axios
- Deployed on Vercel

## Live Demo

https://ai-news-summary-frontend-model.vercel.app

## Setup

1. Clone the repo
   ```bash
   git clone https://github.com/melonmusk20/ai_news_summary_frontend_model.git
   cd ai_news_summary_frontend_model/frontend
2. Install dependencies
   ```bash
   npm install
3. Start the dev server
   ```bash
   npm run dev
 App runs on http://localhost:5173
 Make sure the backend is running on http://localhost:8080 before opening the app.

## Features
- Live news feed fetched from database
- AI-generated 2-sentence summary per article
- Sentiment classification — Positive / Negative / Neutral
- 3 key insights per article
- Search articles by title
- Filter by sentiment
- Links to original articles
  
## Backend Repo
https://github.com/melonmusk20/ai_news_summary_backend_model
   
