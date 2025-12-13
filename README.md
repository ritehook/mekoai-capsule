MekoAi Capsule

MekoAi is the first validator-grade, no-hallucination AI capsule powered by DeepSeek Chat and built with Vite + React + TypeScript.

🚀 Features

- 🔒 Validator-grade capsule logic
- 🧠 DeepSeek Chat integration (OpenAI-compatible)
- ⚡ Fast Vite dev server
- 🧩 Modular React components
- 🧪 TypeScript strict mode
- 🌐 Ready for Netlify or Vercel deployment

📦 Setup

1. Clone the repo:
   `bash
   git clone https://github.com/mekoai/mekoai-capsule.git
   cd mekoai-capsule
   `

2. Create .env file:
   `bash
   cp .env.example .env
   `

3. Add your DeepSeek API key to .env:
   `
   VITEDEEPSEEKAPI_KEY=sk-...
   `

4. Install dependencies:
   `bash
   npm install
   `

5. Run the dev server:
   `bash
   npm run dev
   `

Visit http://localhost:5173 to chat with MekoAi.

🧠 DeepSeek Integration

Uses deepseek-chat model via:
`ts
POST https://api.deepseek.com/v1/chat/completions
`
