// server.js - Frontend Interview Questions API (5 Sual - Test)
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// 5 Test Questions
const questions = [
  {
    id: 1,
    question: "HTML5-in yeni semantic elementləri hansılardır?",
    category: "html",
    difficulty: "easy",
    options: [
      "<header>, <nav>, <main>, <article>, <section>, <footer>",
      "<div>, <span>, <p>, <h1>",
      "<table>, <tr>, <td>, <th>",
      "<form>, <input>, <button>"
    ],
    correctAnswer: 0,
    explanation: "HTML5 semantic elementlər səhifənin strukturunu aydın ifadə edir"
  },
  {
    id: 2,
    question: "CSS Box Model-in düzgün sıralaması necədir?",
    category: "css",
    difficulty: "easy",
    options: [
      "content → padding → border → margin",
      "margin → border → padding → content",
      "padding → content → border → margin",
      "border → margin → padding → content"
    ],
    correctAnswer: 0,
    explanation: "Box Model: content → padding → border → margin"
  },
  {
    id: 3,
    question: "JavaScript-də var, let və const arasındakı əsas fərq nədir?",
    category: "javascript",
    difficulty: "easy",
    options: [
      "var function-scoped, let və const block-scoped",
      "Heç bir fərq yoxdur",
      "var yalnız number üçün işləyir",
      "let yalnız string üçün işləyir"
    ],
    correctAnswer: 0,
    explanation: "var function-scoped və hoisted, let və const block-scoped"
  },
  {
    id: 4,
    question: "React-də useState hook-u nə üçün istifadə olunur?",
    category: "react",
    difficulty: "easy",
    options: [
      "Functional component-də state saxlamaq üçün",
      "API çağırmaq üçün",
      "Routing üçün",
      "Styling üçün"
    ],
    correctAnswer: 0,
    explanation: "useState functional component-lərdə state idarə etmək üçün"
  },
  {
    id: 5,
    question: "JavaScript-də == və === fərqi nədir?",
    category: "javascript",
    difficulty: "easy",
    options: [
      "== type coercion edir, === etmir",
      "Heç bir fərq yoxdur",
      "=== daha sürətlidir",
      "== yalnız number-lər üçündür"
    ],
    correctAnswer: 0,
    explanation: "== type coercion edir, === həm type həm value yoxlayır"
  }
];

// API Endpoints

// Bütün suallar
app.get('/api/questions', (req, res) => {
  res.json({
    success: true,
    count: questions.length,
    data: questions
  });
});

// Random suallar
app.get('/api/questions/random/:count', (req, res) => {
  const count = parseInt(req.params.count) || 5;
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, Math.min(count, questions.length));
  
  res.json({
    success: true,
    count: selected.length,
    data: selected
  });
});

// ID-yə görə sual
app.get('/api/questions/:id', (req, res) => {
  const question = questions.find(q => q.id === parseInt(req.params.id));
  
  if (!question) {
    return res.status(404).json({
      success: false,
      message: 'Sual tapılmadı'
    });
  }
  
  res.json({
    success: true,
    data: question
  });
});

// Kateqoriyaya görə
app.get('/api/questions/category/:category', (req, res) => {
  const category = req.params.category.toLowerCase();
  const filtered = questions.filter(q => q.category.toLowerCase() === category);
  
  res.json({
    success: true,
    count: filtered.length,
    data: filtered
  });
});

// Cavabları yoxla
app.post('/api/quiz/submit', (req, res) => {
  const { answers } = req.body;
  
  if (!answers || typeof answers !== 'object') {
    return res.status(400).json({
      success: false,
      message: 'Cavablar düzgün formatda deyil'
    });
  }
  
  let correct = 0;
  let total = 0;
  const results = [];
  
  Object.entries(answers).forEach(([questionId, userAnswer]) => {
    const question = questions.find(q => q.id === parseInt(questionId));
    if (question) {
      total++;
      const isCorrect = question.correctAnswer === parseInt(userAnswer);
      if (isCorrect) correct++;
      
      results.push({
        questionId: question.id,
        question: question.question,
        userAnswer: parseInt(userAnswer),
        correctAnswer: question.correctAnswer,
        isCorrect,
        explanation: question.explanation
      });
    }
  });
  
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  
  res.json({
    success: true,
    score: {
      correct,
      total,
      percentage
    },
    results
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API işləyir',
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint tapılmadı'
  });
});

// Server başlat
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server ${PORT} portunda işə başladı`);
  console.log(`📚 API: http://localhost:${PORT}/api/questions`);
});

module.exports = app;

// Random 1 sual - daily question üçün
app.get('/api/questions/daily', (req, res) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  const dailyQuestion = shuffled[0];
  
  res.json({
    success: true,
    data: dailyQuestion
  });
});