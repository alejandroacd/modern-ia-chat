# 🌌 Cosmic AI: A Modern AI Assistant Powered by GPT-3 model 🧠
Cosmic AI is a sleek and minimal AI assistant built with the power of GPT-3 via Magic Loops endpoints. Designed to be fast, responsive, and user-friendly, the app lets users interact with AI in a modern chat-like interface — perfect for quick answers, idea generation, and more.

 [🔗 Live Demo](https://cosmic-ai-chat.vercel.app)
![image](https://github.com/user-attachments/assets/0bca3d67-548d-4b62-9d92-e7e4bebe4772)

## Features and key points ✨
-  ### GPT-3 Intelligence:
 The assistant is powered by Magic Loops endpoints that deliver responses from OpenAI's GPT-3 model, providing rich and human-like interactions.

- ### Real-Time Chat Interface:
 Smooth and responsive typing experience, with fast API response rendering and conversation continuity.

- ### State Management with Zustand:
 The entire app state — including chat history and UI toggles — is managed using Zustand for lightweight, scalable state logic.

- ### Minimalist UI/UX:
 Styled with Tailwind CSS for a clean, modern look that’s intuitive and distraction-free.

## Tech stack 🛠️
- TypeScript

- Next.js 15 (App Router)

- Tailwind CSS

- Zustand (State Management)

- Magic Loops (GPT-3 API)

## Installation 🚀
Prerequisites:

- Node.js (https://nodejs.org) (Latest version recommended)

- Magic Loops API Key (Get access at https://magicloops.dev)

- 1.- Clone the repository


```bash
git clone https://github.com/alejandroacd/cosmic-ai-chat.git
cd cosmic-ai-chat
```

2.- Install dependencies

```
npm install
# or
pnpm install
# or
yarn install
```

3.- Setup environment variables
Create a .env.local file in the root of your project and add:

```
NEXT_PUBLIC_MAGIC_LOOPS_API_KEY=your_api_key_here
``` 

4.- Run the development server
```
npm run dev
# or
yarn dev
# or
pnpm dev
```
5.- Blast Off 🚀✨
Your AI assistant should now be live at: http://localhost:3000
