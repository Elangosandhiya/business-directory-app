# 📋 Business Directory App

A full-stack **Business Directory** web application built as a Full Stack Developer assignment.

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js (Vite + React Router + Axios) |
| Backend | Node.js + Express.js |
| Database | PostgreSQL (mock data included for development) |
| Styling | Tailwind CSS |

## 📁 Project Structure

```
├── client/          # React + Vite frontend (port 3000)
│   └── src/
│       ├── pages/
│       │   ├── BusinessList.jsx      # Listings grid page
│       │   └── BusinessDetail.jsx    # Task B: detail page
│       └── components/
│           ├── ImageGallery.jsx
│           ├── ContactInfo.jsx
│           ├── WhatsAppButton.jsx
│           ├── Loader.jsx
│           └── ErrorMessage.jsx
└── server/          # Express backend (port 5000)
    ├── controllers/
    ├── routes/
    └── middleware/
```

## 🚀 Getting Started

### Backend
```bash
cd server
npm install
cp .env.example .env   # fill in your DB credentials
node server.js         # runs on http://localhost:5000
```

### Frontend
```bash
cd client
npm install
npm run dev            # runs on http://localhost:3000
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/businesses` | All listings |
| GET | `/api/businesses/:id` | Single business (joined with category) |

## ✨ Features (Task B — Business Detail Page)

- Responsive layout (1 col mobile / 2 col desktop)
- Featured ⭐ badge
- Image gallery with placeholder fallback
- `tel:` link for phone numbers
- Website link (only shown when present) with `target="_blank" rel="noopener noreferrer"`
- WhatsApp enquiry button with prefilled message
- Loading spinner, 404, 400 and generic error states
- "Back to listings" navigation

## 📝 Notes

- Mock data is used by default (no DB required to run locally)
- Switch to real PostgreSQL by updating `server/.env` and restoring `pool.query()` in the controller
- Parameterized queries used throughout to prevent SQL injection
- No stack traces are ever sent to the client
