# Frontend Interview API

Top 100 Frontend Interview Questions API - Frontend developers üçün ən çox verilən interview sualları.

## 🚀 Features

- 📚 100 ən çox verilən sual
- 🎯 Kateqoriya və çətinlik filtri
- 📖 Ətraflı cavablar və izahatlar
- 💡 Kod nümunələri və məsləhətlər
- 📅 Study plan generator
- 🎭 Interview simulation
- 📊 Progress tracking
- 🔍 Smart search

## 📦 Installation

```bash
npm install
```

## 🏃 Run Locally

```bash
npm start
```

Server `http://localhost:3000` ünvanında işləyəcək.

## 🌐 API Endpoints

- `GET /` - API documentation
- `GET /api/questions` - Bütün suallar (filtri ilə)
- `GET /api/questions/random` - Təsadüfi sual
- `GET /api/categories/:category` - Kateqoriyaya görə suallar
- `GET /api/search?q=keyword` - Axtarış
- `POST /api/study-plan` - Study plan yarat
- `POST /api/interview-simulation` - Interview simulation
- `GET /api/stats` - Statistika
- `POST /api/auth/register` - Qeydiyyat
- `POST /api/auth/login` - Giriş

## 🚢 Deploy

### Railway (Tövsiyə olunur)

1. [Railway.app](https://railway.app) hesabı yaradın
2. "New Project" → "Deploy from GitHub repo"
3. Repository-ni seçin
4. Railway avtomatik deploy edəcək

### Render

1. [Render.com](https://render.com) hesabı yaradın
2. "New Web Service" → GitHub repo-nu bağlayın
3. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Deploy edin

### Fly.io

```bash
# Fly.io CLI quraşdırın
npm install -g @fly/cli

# Login
fly auth login

# Deploy
fly launch
```

## 📝 Environment Variables

- `PORT` - Server portu (default: 3000)

## 🛠 Tech Stack

- Node.js
- Express.js
- CORS

## 📄 License

ISC
