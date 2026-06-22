# ⚖️ LawYaar

**AI Legal Assistant for Every Indian**

LawYaar is a full-stack platform that gives instant, AI-powered legal guidance and connects users with trusted, verified lawyers — all in one place.

> Get simplified explanations of Indian law, ask questions to an AI legal assistant, and find the right lawyer for your situation.

---

## ✨ Features

- 🤖 **AI Legal Assistant** — Ask legal questions in plain language and get instant, AI-powered guidance tailored to your situation.
- 👤 **Find Verified Lawyers** — Search and connect with trusted, verified lawyers based on practice area (Criminal, Property, Corporate, Family Law, etc.).
- 📖 **Legal Knowledge Hub** — Simplified legal resources and guides to help users stay informed.
- 💬 **Floating Chat Widget** — Quick access to the AI assistant from anywhere on the site.
- 🔐 **Login / Signup UI** — Premium, glassmorphism-styled authentication flow (currently UI-only; JWT-based auth in roadmap).
- 📱 **Fully Responsive** — Smooth, animated experience across mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Framer Motion (animations)
- React Router (routing)

**Backend**
- Node.js + Express.js
- Groq SDK / OpenAI SDK (AI chat completions)
- CORS, dotenv

---

## 📂 Project Structure

```
LawYaar/
├── backend/
│   ├── server.js              # Express server + /chat endpoint
│   ├── .env                   # API keys (not committed)
│   └── package.json
│
└── frontend-react/
    ├── src/
    │   ├── components/
    │   │   ├── chat/           # ChatHeader, ChatMessage, TypingIndicator
    │   │   ├── common/         # AnimatedCounter, Reveal, SectionHeading
    │   │   ├── home/           # HeroSection, FeaturesSection, FAQSection...
    │   │   ├── lawyers/        # LawyerCard, LawyerList, LawyerSearch
    │   │   ├── layout/         # Navbar, Footer, FloatingChatButton
    │   │   └── auth/           # LoginCard, AuthBackground, PasswordInput
    │   ├── pages/               # Home, FindLawyer, Chatbot, Login
    │   ├── constants/           # ROUTES, etc.
    │   ├── utils/               # fakeAuth.js
    │   └── App.jsx
    └── package.json
```

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/<your-username>/LawYaar.git
cd LawYaar
```

### 2. Backend setup
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```
PORT=5000
GROQ_API_KEY=your_groq_api_key
OPENAI_API_KEY=your_openai_api_key
```

Run the backend:
```bash
npm start
```

### 3. Frontend setup
Open a **new terminal** (keep the backend running):
```bash
cd frontend-react
npm install
```

Create a `.env` file inside `frontend-react/`:
```
VITE_API_URL=http://localhost:5000
```

Run the frontend:
```bash
npm run dev
```

The app will be live at `http://localhost:5173`.

> ⚠️ Both servers must run **simultaneously** in separate terminals — stopping the frontend server will break asset loading (images) while the backend is running.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|--------------|
| `POST` | `/chat`  | Sends a user message to the AI legal assistant and returns a response |

---

## ☁️ Deployment

- **Backend (Render):** Root directory `backend`, build command `npm install`, start command `npm start`, environment variables set in Render dashboard.
- **Frontend (Netlify):** Base directory `frontend-react`, build command `npm run build`, publish directory `frontend-react/dist`, with a `_redirects` file (`/* /index.html 200`) for React Router support.

---

## 🗺️ Roadmap

- [ ] Replace fake (localStorage) auth with real JWT-based authentication
- [ ] Lawyer booking / appointment system
- [ ] User dashboard with chat history
- [ ] Multi-language support for legal guidance

---

## 👩‍💻 Author

**Nausheen**  
[LinkedIn](https://www.linkedin.com/in/nausheen-waseem-32365b308/) • [GitHub](https://github.com/NausheenW3008)
---

## 📄 License

This project is for educational/portfolio purposes.
