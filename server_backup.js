const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// TOP 100 Frontend Interview Questions Database
const top100Questions = [
  // HTML/CSS (15 sual)
  {
    id: 1,
    question: "HTML5-də yeni elementlər hansılardır və niyə istifadə olunur?",
    category: "html",
    subcategory: "semantic",
    difficulty: "easy",
    frequency: "very_high",
    answer: {
      explanation: "HTML5 semantic elementlər səhifə strukturunu daha anlaşılan edir və SEO, accessibility üçün vacibdir",
      semantic_elements: ["<header>", "<nav>", "<main>", "<article>", "<section>", "<aside>", "<footer>", "<figure>", "<figcaption>"],
      benefits: ["SEO yaxşılaşdırır", "Screen reader-lər üçün daha yaxşı", "Kod daha oxunaqlı", "CSS styling asanlaşır"],
      code_example: `<article>
  <header>
    <h1>Məqalə başlığı</h1>
    <time datetime="2024-01-15">15 Yanvar 2024</time>
  </header>
  <section>
    <p>Məqalə məzmunu...</p>
  </section>
  <footer>
    <p>Müəllif: John Doe</p>
  </footer>
</article>`
    }
  },

  {
    id: 2,
    question: "CSS Box Model nədir? Margin, padding, border fərqi?",
    category: "css",
    subcategory: "layout",
    difficulty: "easy",
    frequency: "very_high",
    answer: {
      explanation: "Box model hər HTML elementinin ətrafında olan dörd sahədən ibarətdir",
      components: {
        content: "Məzmun sahəsi (width/height)",
        padding: "Məzmun ilə border arasındakı boş sahə",
        border: "Element ətrafındakı xətt",
        margin: "Element ilə digər elementlər arasındakı boş sahə"
      },
      box_sizing: {
        content_box: "default - padding/border width-ə əlavə olur",
        border_box: "padding/border width-ə daxildir"
      },
      code_example: `/* Box model nümunəsi */
.box {
  width: 200px;        /* content width */
  height: 100px;       /* content height */
  padding: 20px;       /* içəridən boşluq */
  border: 5px solid;   /* kənar xətt */
  margin: 10px;        /* xaricdən boşluq */
  box-sizing: border-box; /* modern approach */
}`
    }
  },

  {
    id: 3,
    question: "CSS Flexbox və Grid nə vaxt istifadə etməli?",
    category: "css",
    subcategory: "layout",
    difficulty: "medium",
    frequency: "very_high",
    answer: {
      explanation: "Flexbox 1D layout, Grid 2D layout üçün. Hər ikisi müxtəlif vəziyyətlər üçün uyğundur",
      flexbox_use_cases: [
        "Navigation bar-lar",
        "Card component-lər içi",
        "Center alignment",
        "Space distribution",
        "Equal height columns"
      ],
      grid_use_cases: [
        "Page layout (header, sidebar, main, footer)",
        "Image galleries", 
        "Complex dashboard layouts",
        "Magazine-style layouts",
        "Responsive grid systems"
      ],
      decision_tree: "1D alignment = Flexbox, 2D layout = Grid, Component içi = Flexbox, Page layout = Grid",
      code_example: `/* Flexbox - Navigation */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Grid - Page Layout */
.page-layout {
  display: grid;
  grid-template-areas: 
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 150px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}`
    }
  },

  // JavaScript Core (25 sual)
  {
    id: 4,
    question: "JavaScript-də var, let, const fərqi nədir?",
    category: "javascript",
    subcategory: "variables",
    difficulty: "easy",
    frequency: "very_high",
    answer: {
      explanation: "ES6 ilə gələn let/const var-ın problemlərini həll edir",
      comparison: {
        var: {
          scope: "Function scope",
          hoisting: "undefined ilə hoisted",
          redeclaration: "Mümkün",
          reassignment: "Mümkün"
        },
        let: {
          scope: "Block scope",
          hoisting: "Hoisted amma TDZ",
          redeclaration: "Qadağan",
          reassignment: "Mümkün"
        },
        const: {
          scope: "Block scope", 
          hoisting: "Hoisted amma TDZ",
          redeclaration: "Qadağan",
          reassignment: "Qadağan (objects daxili dəyişə bilər)"
        }
      },
      code_example: `// var problemi
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 3, 3, 3
}

// let həlli  
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2
}

// const immutability
const obj = { name: 'John' };
obj.name = 'Jane'; // OK - object daxili dəyişə bilər
obj = {}; // Error - reassignment qadağan`
    }
  },

  {
    id: 5,
    question: "JavaScript-də this keyword necə işləyir?",
    category: "javascript",
    subcategory: "context",
    difficulty: "medium",
    frequency: "very_high",
    answer: {
      explanation: "'this' funksiyaların çağırılma kontekstinə görə dəyişir",
      contexts: {
        global: "Window object (browser-də) və ya undefined (strict mode)",
        object_method: "Method-un aid olduğu object",
        constructor: "Yeni yaradılan object",
        arrow_function: "Lexical this - parent scope-dan alır",
        event_handler: "Event-in baş verdiyi element"
      },
      code_example: `// Object method
const person = {
  name: 'John',
  greet() {
    console.log(this.name); // 'John'
  }
};

// Arrow function
const person2 = {
  name: 'Jane',
  greet: () => {
    console.log(this.name); // undefined (global this)
  }
};

// bind, call, apply
const boundGreet = person.greet.bind({ name: 'Mike' });
boundGreet(); // 'Mike'

person.greet.call({ name: 'Sarah' }); // 'Sarah'`,
      common_mistakes: [
        "Arrow function-da this istifadəsi",
        "Event handler-da this-i unudmaq", 
        "Nested function-da this itirilməsi"
      ]
    }
  },

  {
    id: 6,
    question: "Closure nədir və necə işləyir?",
    category: "javascript",
    subcategory: "scope",
    difficulty: "hard",
    frequency: "very_high",
    answer: {
      explanation: "Inner function outer function-un variable-larına access saxlayır",
      how_it_works: "Lexical scoping - function öz yaradıldığı yerdəki scope-u yadda saxlayır",
      practical_uses: [
        "Data privacy (private variables)",
        "Module pattern",
        "Callback functions",
        "Event handlers",
        "Currying və partial application"
      ],
      code_example: `// Basic closure
function outerFunction(x) {
  let outerVariable = x;
  
  return function innerFunction(y) {
    console.log(outerVariable + y); // Closure!
  };
}

const addFive = outerFunction(5);
addFive(10); // 15

// Module pattern
function createCounter() {
  let count = 0;
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
counter.increment(); // count = 1
// count variable-a direkt access yoxdur!`,
      interview_tips: [
        "Real use case nümunə göstər",
        "Memory management-dən danış",
        "Module pattern əlaqəsi qur"
      ]
    }
  },

  {
    id: 7,
    question: "Event Loop necə işləyir? Call Stack, Callback Queue?",
    category: "javascript",
    subcategory: "async",
    difficulty: "hard",
    frequency: "high",
    answer: {
      explanation: "JavaScript single-threaded-dir, amma async operations event loop ilə idarə olunur",
      components: {
        call_stack: "Function çağırışlarının stack-i",
        web_apis: "setTimeout, DOM events, HTTP requests",
        callback_queue: "Async callback-lərin queue-su", 
        event_loop: "Stack boş olanda queue-dan callback alır"
      },
      execution_order: [
        "1. Synchronous kod (Call Stack)",
        "2. Microtasks (Promises, queueMicrotask)",
        "3. Macrotasks (setTimeout, setInterval)"
      ],
      code_example: `console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

// Output: 1, 4, 3, 2
// Çünki: sync → microtasks → macrotasks`,
      visualization: "Call Stack → Web APIs → Callback Queue → Event Loop → Call Stack"
    }
  },

  {
    id: 8,
    question: "Promise nədir? async/await ilə fərqi?",
    category: "javascript",
    subcategory: "async",
    difficulty: "medium",
    frequency: "very_high",
    answer: {
      explanation: "Promise async operations-ı idarə etməyin modern yoludur",
      promise_states: {
        pending: "İlkin vəziyyət",
        fulfilled: "Uğurla tamamlandı",
        rejected: "Xəta baş verdi"
      },
      async_await_benefits: [
        "Daha oxunaqlı kod",
        "Error handling asandır", 
        "Sequential async operations",
        "Promise chaining-dən qaçmaq"
      ],
      code_example: `// Promise chaining
fetch('/api/user')
  .then(response => response.json())
  .then(user => fetch(\`/api/posts/\${user.id}\`))
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error(error));

// async/await - daha təmiz
async function getUserPosts() {
  try {
    const userResponse = await fetch('/api/user');
    const user = await userResponse.json();
    
    const postsResponse = await fetch(\`/api/posts/\${user.id}\`);
    const posts = await postsResponse.json();
    
    console.log(posts);
  } catch (error) {
    console.error(error);
  }
}`,
      error_handling: "Promise: .catch() və ya try/catch, async/await: try/catch block"
    }
  },

  // React (20 sual)
  {
    id: 9,
    question: "React-da component nədir? Functional vs Class components?",
    category: "react",
    subcategory: "components",
    difficulty: "easy",
    frequency: "very_high",
    answer: {
      explanation: "Component UI-ın təkrar istifadə olunan hissəsidir",
      functional_vs_class: {
        functional: {
          pros: ["Daha qısa kod", "Hooks dəstəyi", "Performance", "Test etmək asan"],
          cons: ["Hook-ların öyrənilməsi"],
          when_to_use: "Demək olar ki, həmişə (React 16.8+)"
        },
        class: {
          pros: ["Lifecycle methods", "Error boundaries"],
          cons: ["Daha çox kod", "this binding problemləri"],
          when_to_use: "Error boundaries və ya legacy kod"
        }
      },
      code_example: `// Functional Component (Modern)
function UserCard({ user }) {
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Component mount olduqda
    console.log('Component mounted');
  }, []);
  
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

// Class Component (Legacy)
class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }
  
  componentDidMount() {
    console.log('Component mounted');
  }
  
  render() {
    const { user } = this.props;
    return (
      <div className="user-card">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    );
  }
}`,
      best_practices: [
        "Functional component istifadə edin",
        "Props destructuring edin",
        "Default props verin",
        "PropTypes istifadə edin"
      ]
    }
  },

  {
    id: 10,
    question: "useState hook-u necə işləyir? State updates?",
    category: "react",
    subcategory: "hooks",
    difficulty: "medium",
    frequency: "very_high",
    answer: {
      explanation: "useState functional component-lərdə state idarə etmək üçün istifadə olunur",
      syntax: "const [state, setState] = useState(initialValue)",
      key_concepts: {
        immutability: "State-i direkt dəyişdirmək olmaz, yeni state yaratmaq lazımdır",
        batching: "React state update-lərini batch edir (performans üçün)",
        functional_updates: "Previous state-ə əsasən update etmək üçün function verin"
      },
      code_example: `// Basic usage
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', email: '' });

// Wrong - direct mutation
user.name = 'John'; // ❌

// Correct - new object
setUser({ ...user, name: 'John' }); // ✅

// Functional update
setCount(prevCount => prevCount + 1);

// Array update
const [items, setItems] = useState([]);
setItems(prevItems => [...prevItems, newItem]);

// Object update  
setUser(prevUser => ({
  ...prevUser,
  name: 'John'
}));`,
      common_mistakes: [
        "State-i direkt mutate etmək",
        "Async update-ləri düzgün handle etməmək",
        "Previous state-i ignore etmək"
      ]
    }
  },

  {
    id: 11,
    question: "useEffect hook-u necə işləyir? Cleanup və dependencies?",
    category: "react",
    subcategory: "hooks",
    difficulty: "medium",
    frequency: "very_high",
    answer: {
      explanation: "useEffect side effect-ləri idarə etmək üçün - data fetch, subscriptions, manual DOM changes",
      dependency_patterns: {
        no_deps: "useEffect(() => {}) - hər render-də işləyir",
        empty_deps: "useEffect(() => {}, []) - yalnız mount/unmount",
        with_deps: "useEffect(() => {}, [dep1, dep2]) - dependency-lər dəyişəndə"
      },
      cleanup: "Memory leak-ləri önləmək üçün cleanup function return edin",
      code_example: `// Data fetching
useEffect(() => {
  async function fetchData() {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  }
  
  fetchData();
}, []); // Empty deps - once on mount

// Subscription with cleanup
useEffect(() => {
  const subscription = someAPI.subscribe(data => {
    setData(data);
  });
  
  // Cleanup function
  return () => {
    subscription.unsubscribe();
  };
}, []);

// Dependency tracking
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]); // Runs when count changes`,
      rules_of_hooks: [
        "Yalnız React function-larında call edin",
        "Loop, condition və ya nested function içində call etməyin",
        "Dependencies array-da istifadə olunan bütün dəyişənləri qeyd edin"
      ]
    }
  },

  // Next.js (10 sual)
  {
    id: 12,
    question: "Next.js nədir və React-dan fərqi nədir?",
    category: "nextjs",
    subcategory: "fundamentals",
    difficulty: "easy",
    frequency: "high",
    answer: {
      explanation: "Next.js React-ın üzərinə qurulmuş full-stack framework-üdür",
      key_features: [
        "Server-Side Rendering (SSR)",
        "Static Site Generation (SSG)",
        "API Routes",
        "Automatic code splitting",
        "Built-in CSS support",
        "Image optimization",
        "File-based routing"
      ],
      react_vs_nextjs: {
        react: "Library - UI yaratmaq üçün",
        nextjs: "Framework - complete web application"
      },
      code_example: `// Next.js page component
// pages/products/[id].js
import { GetServerSideProps } from 'next';

export default function Product({ product }) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

// Server-side data fetching
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  const product = await fetch(\`/api/products/\${id}\`);
  
  return {
    props: {
      product: await product.json()
    }
  };
};`,
      when_to_use: "SEO vacib olan saytlar, full-stack apps, performance critical apps"
    }
  },

  {
    id: 13,
    question: "Next.js-də SSR, SSG, ISR fərqi nədir?",
    category: "nextjs",
    subcategory: "rendering",
    difficulty: "medium",
    frequency: "high",
    answer: {
      explanation: "Next.js müxtəlif rendering strategiyaları təklif edir",
      rendering_types: {
        ssr: {
          full_name: "Server-Side Rendering",
          when: "Hər request-də server-də render olunur",
          use_case: "Dynamic content, user-specific data",
          method: "getServerSideProps"
        },
        ssg: {
          full_name: "Static Site Generation", 
          when: "Build time-da static HTML yaradılır",
          use_case: "Static content, blog posts, landing pages",
          method: "getStaticProps + getStaticPaths"
        },
        isr: {
          full_name: "Incremental Static Regeneration",
          when: "Static amma belirli müddətdən sonra yenilənir",
          use_case: "Semi-static content, product pages",
          method: "getStaticProps + revalidate"
        }
      },
      code_example: `// SSG - Static generation
export async function getStaticProps() {
  const posts = await fetchPosts();
  return {
    props: { posts }
  };
}

// SSG with dynamic routes
export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

// ISR - Revalidate every hour
export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
    revalidate: 3600 // 1 hour
  };
}

// SSR - On every request
export async function getServerSideProps(context) {
  const data = await fetchUserData(context.req);
  return {
    props: { data }
  };
}`
    }
  },

  // REST API (10 sual)
  {
    id: 14,
    question: "REST API nədir? HTTP metodları hansılardır?",
    category: "api",
    subcategory: "rest",
    difficulty: "easy",
    frequency: "very_high",
    answer: {
      explanation: "REST web service-lər üçün arxitektur prinsiplərdir",
      rest_principles: [
        "Stateless - server client state saxlamır",
        "Client-Server separation",
        "Cacheable responses",
        "Uniform interface",
        "Layered system"
      ],
      http_methods: {
        GET: "Data əldə etmək (read)",
        POST: "Yeni data yaratmaq (create)",
        PUT: "Data yeniləmək (update/replace)",
        PATCH: "Partial update",
        DELETE: "Data silmək"
      },
      status_codes: {
        "200": "OK - Successful",
        "201": "Created",
        "400": "Bad Request",
        "401": "Unauthorized", 
        "404": "Not Found",
        "500": "Internal Server Error"
      },
      code_example: `// REST API endpoints
GET    /api/users         // Bütün istifadəçiləri gətir
GET    /api/users/123     // ID=123 istifadəçini gətir
POST   /api/users         // Yeni istifadəçi yarat
PUT    /api/users/123     // ID=123 istifadəçini yenilə
DELETE /api/users/123     // ID=123 istifadəçini sil

// JavaScript-də API calls
// GET request
const users = await fetch('/api/users').then(r => r.json());

// POST request
const newUser = await fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John', email: 'john@example.com' })
}).then(r => r.json());`
    }
  },

  {
    id: 15,
    question: "JavaScript-də API call necə edilir? Error handling?",
    category: "api",
    subcategory: "fetch",
    difficulty: "medium", 
    frequency: "very_high",
    answer: {
      explanation: "Modern JavaScript-də fetch API istifadə edilir",
      fetch_vs_axios: {
        fetch: "Native browser API, promise-based",
        axios: "3rd party library, daha çox feature"
      },
      error_handling: [
        "Network errors",
        "HTTP status errors", 
        "JSON parsing errors",
        "Timeout errors"
      ],
      code_example: `// Basic fetch
async function fetchUsers() {
  try {
    const response = await fetch('/api/users');
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// With full error handling
async function apiCall(url, options = {}) {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    throw error;
  }
}`,
      best_practices: [
        "Həmişə error handling edin",
        "Loading state göstərin",
        "Timeout əlavə edin",
        "Response status check edin"
      ]
    }
  }

  // Daha 85 sual əlavə ediləcək...
  // Performance, Security, Testing, Git, Deployment və s.
];

// Enhanced API Routes with filtering

// Get all questions with advanced filtering
app.get('/api/questions', (req, res) => {
  const { 
    category, 
    subcategory, 
    difficulty, 
    frequency,
    limit = 20,
    offset = 0,
    search 
  } = req.query;

  let filteredQuestions = top100Questions;

  // Category filter
  if (category) {
    filteredQuestions = filteredQuestions.filter(q => 
      q.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Subcategory filter  
  if (subcategory) {
    filteredQuestions = filteredQuestions.filter(q =>
      q.subcategory && q.subcategory.toLowerCase() === subcategory.toLowerCase()
    );
  }

  // Difficulty filter
  if (difficulty) {
    filteredQuestions = filteredQuestions.filter(q =>
      q.difficulty.toLowerCase() === difficulty.toLowerCase()
    );
  }

  // Frequency filter
  if (frequency) {
    filteredQuestions = filteredQuestions.filter(q =>
      q.frequency.toLowerCase() === frequency.toLowerCase()
    );
  }

  // Search in question text
  if (search) {
    filteredQuestions = filteredQuestions.filter(q =>
      q.question.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Pagination
  const startIndex = parseInt(offset);
  const endIndex = startIndex + parseInt(limit);
  const paginatedQuestions = filteredQuestions.slice(startIndex, endIndex);

  res.json({
    total: filteredQuestions.length,
    limit: parseInt(limit),
    offset: parseInt(offset),
    has_more: endIndex < filteredQuestions.length,
    questions: paginatedQuestions
  });
});

// Get random question with filters
app.get('/api/questions/random', (req, res) => {
  const { category, difficulty, frequency } = req.query;
  let availableQuestions = top100Questions;

  if (category) {
    availableQuestions = availableQuestions.filter(q => 
      q.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (difficulty) {
    availableQuestions = availableQuestions.filter(q => 
      q.difficulty.toLowerCase() === difficulty.toLowerCase()
    );
  }

  if (frequency) {
    availableQuestions = availableQuestions.filter(q =>
      q.frequency.toLowerCase() === frequency.toLowerCase()
    );
  }

  if (availableQuestions.length === 0) {
    return res.status(404).json({ error: 'Həmin kriteriyaya uyğun sual tapılmadı' });
  }

  const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  res.json(randomQuestion);
});

// Get questions by category with subcategories
app.get('/api/categories/:category', (req, res) => {
  const { category } = req.params;
  const { subcategory } = req.query;
  
  let categoryQuestions = top100Questions.filter(q => 
    q.category.toLowerCase() === category.toLowerCase()
  );

  if (subcategory) {
    categoryQuestions = categoryQuestions.filter(q =>
      q.subcategory && q.subcategory.toLowerCase() === subcategory.toLowerCase()
    );
  }

  // Group by subcategory
  const groupedBySubcategory = categoryQuestions.reduce((acc, question) => {
    const sub = question.subcategory || 'general';
    if (!acc[sub]) acc[sub] = [];
    acc[sub].push(question);
    return acc;
  }, {});

  res.json({
    category,
    total_questions: categoryQuestions.length,
    subcategories: Object.keys(groupedBySubcategory),
    questions: subcategory ? categoryQuestions : groupedBySubcategory
  });
});

// Get all available filters
app.get('/api/filters', (req, res) => {
  const categories = [...new Set(top100Questions.map(q => q.category))];
  const subcategories = {};
  const difficulties = [...new Set(top100Questions.map(q => q.difficulty))];
  const frequencies = [...new Set(top100Questions.map(q => q.frequency))];

  // Group subcategories by category
  categories.forEach(category => {
    subcategories[category] = [...new Set(
      top100Questions
        .filter(q => q.category === category)
        .map(q => q.subcategory)
        .filter(Boolean)
    )];
  });

  res.json({
    categories,
    subcategories,
    difficulties,
    frequencies
  });
});

// Create study plan
app.post('/api/study-plan', (req, res) => {
  const { 
    categories = [], 
    difficulty_progression = true,
    questions_per_day = 5,
    total_days = 20
  } = req.body;

  let selectedQuestions = top100Questions;

  if (categories.length > 0) {
    selectedQuestions = selectedQuestions.filter(q => 
      categories.includes(q.category)
    );
  }

  if (difficulty_progression) {
    selectedQuestions.sort((a, b) => {
      const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
      return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    });
  } else {
    selectedQuestions = selectedQuestions.sort(() => Math.random() - 0.5);
  }

  const totalQuestions = Math.min(selectedQuestions.length, questions_per_day * total_days);
  const studyPlan = [];

  for (let day = 1; day <= total_days; day++) {
    const startIndex = (day - 1) * questions_per_day;
    const endIndex = Math.min(startIndex + questions_per_day, totalQuestions);
    
    if (startIndex >= totalQuestions) break;

    studyPlan.push({
      day,
      date: new Date(Date.now() + (day - 1) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      questions: selectedQuestions.slice(startIndex, endIndex).map(q => ({
        id: q.id,
        question: q.question,
        category: q.category,
        difficulty: q.difficulty
      }))
    });
  }

  res.json({
    study_plan_id: Date.now(),
    total_days: studyPlan.length,
    questions_per_day,
    total_questions: totalQuestions,
    plan: studyPlan
  });
});

// Interview simulation
app.post('/api/interview-simulation', (req, res) => {
  const { 
    categories = [],
    difficulty = 'mixed',
    duration_minutes = 30,
    question_count = 10
  } = req.body;

  let availableQuestions = top100Questions;

  if (categories.length > 0) {
    availableQuestions = availableQuestions.filter(q => 
      categories.includes(q.category)
    );
  }

  if (difficulty !== 'mixed') {
    availableQuestions = availableQuestions.filter(q => 
      q.difficulty === difficulty
    );
  }

  // Shuffle və select
  const shuffled = availableQuestions.sort(() => Math.random() - 0.5);
  const selectedQuestions = shuffled.slice(0, question_count);

  const interview = {
    interview_id: Date.now(),
    duration_minutes,
    question_count: selectedQuestions.length,
    questions: selectedQuestions.map((q, index) => ({
      order: index + 1,
      id: q.id,
      question: q.question,
      category: q.category,
      difficulty: q.difficulty,
      estimated_time: difficulty === 'easy' ? 2 : difficulty === 'medium' ? 4 : 7
    })),
    tips: [
      "Hər sual üçün yüksək səslə düşünün",
      "Kod nümunələri verin",
      "Real layihə təcrübələrindən danışın",
      "Anlamadığınız halda sual verin"
    ]
  };

  res.json(interview);
});

// Progress tracking
app.post('/api/progress', (req, res) => {
  const { user_id, question_id, status, time_spent, notes } = req.body;
  
  // Real sistemdə database-ə save edərsiniz
  const progressEntry = {
    id: Date.now(),
    user_id,
    question_id,
    status, // 'answered', 'skipped', 'bookmarked'
    time_spent,
    notes,
    timestamp: new Date().toISOString()
  };

  res.json({
    success: true,
    progress: progressEntry,
    message: 'Progress saved successfully'
  });
});

// Statistics endpoint
app.get('/api/stats', (req, res) => {
  const stats = {
    total_questions: top100Questions.length,
    by_category: {},
    by_difficulty: {},
    by_frequency: {},
    by_subcategory: {}
  };

  top100Questions.forEach(q => {
    // Category stats
    stats.by_category[q.category] = (stats.by_category[q.category] || 0) + 1;
    
    // Difficulty stats
    stats.by_difficulty[q.difficulty] = (stats.by_difficulty[q.difficulty] || 0) + 1;
    
    // Frequency stats
    stats.by_frequency[q.frequency] = (stats.by_frequency[q.frequency] || 0) + 1;

    // Subcategory stats
    if (q.subcategory) {
      const key = `${q.category}-${q.subcategory}`;
      stats.by_subcategory[key] = (stats.by_subcategory[key] || 0) + 1;
    }
  });

  res.json(stats);
});

// Search questions
app.get('/api/search', (req, res) => {
  const { q, limit = 10 } = req.query;
  
  if (!q || q.length < 2) {
    return res.status(400).json({ error: 'Search query must be at least 2 characters' });
  }

  const searchTerm = q.toLowerCase();
  const results = top100Questions.filter(question => 
    question.question.toLowerCase().includes(searchTerm) ||
    question.category.toLowerCase().includes(searchTerm) ||
    (question.subcategory && question.subcategory.toLowerCase().includes(searchTerm)) ||
    (question.answer.explanation && question.answer.explanation.toLowerCase().includes(searchTerm))
  ).slice(0, parseInt(limit));

  res.json({
    query: q,
    total_results: results.length,
    results: results.map(q => ({
      id: q.id,
      question: q.question,
      category: q.category,
      subcategory: q.subcategory,
      difficulty: q.difficulty,
      frequency: q.frequency
    }))
  });
});

// Bookmarks functionality
app.post('/api/bookmarks', (req, res) => {
  const { user_id, question_id, action } = req.body; // action: 'add' or 'remove'
  
  // Real sistemdə database operation
  res.json({
    success: true,
    message: `Question ${action === 'add' ? 'bookmarked' : 'removed from bookmarks'}`,
    user_id,
    question_id,
    action
  });
});

// Get trending questions (most accessed)
app.get('/api/trending', (req, res) => {
  // Frequency əsasında trending questions
  const trendingQuestions = top100Questions
    .filter(q => q.frequency === 'very_high')
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  res.json({
    trending_questions: trendingQuestions.map(q => ({
      id: q.id,
      question: q.question,
      category: q.category,
      difficulty: q.difficulty,
      frequency: q.frequency
    }))
  });
});

// Daily challenge
app.get('/api/daily-challenge', (req, res) => {
  const today = new Date().toDateString();
  const seed = today.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  
  // Seed əsasında deterministic random
  const questionIndex = seed % top100Questions.length;
  const dailyQuestion = top100Questions[questionIndex];

  res.json({
    date: today,
    challenge_id: seed,
    question: {
      id: dailyQuestion.id,
      question: dailyQuestion.question,
      category: dailyQuestion.category,
      difficulty: dailyQuestion.difficulty
    },
    message: "Günün çağırışı! Bu sualı cavablandırmağa çalışın.",
    hint: "Əvvəl özünüz cavablamağa çalışın, sonra cavabı yoxlayın."
  });
});

// Home page with API documentation
app.get('/', (req, res) => {
  res.json({
    message: '🚀 Top 100 Frontend Interview Questions API',
    version: '2.0.0',
    description: 'Frontend developers üçün ən çox verilən 100 interview sualı',
    
    endpoints: {
      questions: {
        all: 'GET /api/questions',
        random: 'GET /api/questions/random',
        by_id: 'GET /api/questions/:id',
        by_category: 'GET /api/categories/:category',
        search: 'GET /api/search?q=keyword'
      },
      study: {
        create_plan: 'POST /api/study-plan',
        interview_simulation: 'POST /api/interview-simulation',
        daily_challenge: 'GET /api/daily-challenge'
      },
      utility: {
        filters: 'GET /api/filters',
        statistics: 'GET /api/stats',
        trending: 'GET /api/trending'
      },
      user: {
        progress: 'POST /api/progress',
        bookmarks: 'POST /api/bookmarks'
      }
    },

    filters: {
      categories: ['html', 'css', 'javascript', 'react', 'nextjs', 'api', 'performance', 'testing'],
      difficulties: ['easy', 'medium', 'hard'],
      frequencies: ['very_high', 'high', 'medium', 'low']
    },

    example_usage: [
      'GET /api/questions?category=javascript&difficulty=medium&limit=5',
      'GET /api/questions/random?category=react',
      'GET /api/categories/javascript?subcategory=async',
      'GET /api/search?q=closure&limit=3',
      'POST /api/study-plan {"categories":["react","javascript"],"questions_per_day":3}'
    ],

    study_features: [
      '📚 100 ən çox verilən sual',
      '🎯 Kateqoriya və çətinlik filtri',
      '📖 Ətraflı cavablar və izahatlar',
      '💡 Kod nümunələri və məsləhətlər',
      '📅 Study plan generator',
      '🎭 Interview simulation',
      '📊 Progress tracking',
      '🔍 Smart search',
      '⭐ Bookmark system',
      '🏆 Daily challenges'
    ],

    tech_stack: [
      'Express.js backend',
      'RESTful API design', 
      'JSON responses',
      'CORS enabled',
      'Error handling',
      'Pagination support'
    ]
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    message: `${req.method} ${req.originalUrl} does not exist`,
    available_endpoints: [
      'GET /',
      'GET /api/questions', 
      'GET /api/questions/random',
      'GET /api/filters',
      'GET /api/stats'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Frontend Interview API running on port ${PORT}`);
  console.log(`📚 Total questions available: ${top100Questions.length}`);
  console.log(`🌐 API Documentation: http://localhost:${PORT}`);
  console.log(`🎯 Random question: http://localhost:${PORT}/api/questions/random`);
});

// Əlavə 85 sual - top100Questions array-nə əlavə ediləcək

const additionalQuestions = [
  // JavaScript Advanced (15 əlavə)
  {
    id: 16,
    question: "Event bubbling və event capturing nədir?",
    category: "javascript",
    subcategory: "events",
    difficulty: "medium",
    frequency: "high",
    answer: {
      explanation: "DOM event-lərinin element iyerarxiyasında yayılma prosesi",
      phases: {
        capturing: "Event parent-dan child-a doğru gedər (capture phase)",
        target: "Event target element-də işlənir",
        bubbling: "Event child-dan parent-a doğru gedər (bubble phase)"
      },
      code_example: `<div id="parent">
  <div id="child">
    <button id="button">Click me</button>
  </div>
</div>

// Event listeners
document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
}, false); // false = bubbling (default)

document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
}, true); // true = capturing

document.getElementById('button').addEventListener('click', (e) => {
  console.log('Button clicked');
  e.stopPropagation(); // Stop bubbling
});

// Click button-a basanda:
// Capturing: Child clicked
// Target: Button clicked  
// Bubbling stopped`,
      practical_uses: ["Event delegation", "Modal close functionality", "Form validation"]
    }
  },

  {
    id: 17,
    question: "Hoisting nədir? var, let, const, function hoisting?",
    category: "javascript",
    subcategory: "scope",
    difficulty: "medium",
    frequency: "high",
    answer: {
      explanation: "JavaScript engine variable və function declaration-ları scope-un yuxarısına aparır",
      hoisting_types: {
        var: "undefined ilə initialize olunur",
        let_const: "Hoisted amma Temporal Dead Zone",
        function_declaration: "Tam hoisted",
        function_expression: "Variable kimi hoisted"
      },
      code_example: `// var hoisting
console.log(x); // undefined (not error)
var x = 5;

// let/const hoisting
console.log(y); // ReferenceError: TDZ
let y = 10;

// Function hoisting
sayHello(); // "Hello!" - works!
function sayHello() {
  console.log("Hello!");
}

// Function expression
sayBye(); // TypeError: sayBye is not a function
var sayBye = function() {
  console.log("Bye!");
};`,
      temporal_dead_zone: "let/const declare edilənə qədər access edilə bilməz"
    }
  },

  {
    id: 18,
    question: "Prototype və Prototype chain nədir?",
    category: "javascript", 
    subcategory: "objects",
    difficulty: "hard",
    frequency: "medium",
    answer: {
      explanation: "JavaScript-də inheritance mexanizmi. Hər obyekt __proto__ vasitəsilə parent-ə bağlıdır",
      prototype_vs_proto: {
        prototype: "Function-ların property-si, constructor üçün",
        __proto__: "Obyektlərin parent-ə reference-i"
      },
      code_example: `// Constructor function
function Person(name) {
  this.name = name;
}

// Prototype-a method əlavə et
Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

const john = new Person('John');
console.log(john.greet()); // "Hello, I'm John"

// Prototype chain
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null

// Method lookup chain:
// john -> Person.prototype -> Object.prototype -> null`,
      modern_alternative: "Class syntax (ES6) prototype chain üzərində sugar syntax-dır"
    }
  },

  // CSS Advanced (10 əlavə)
  {
    id: 19,
    question: "CSS Preprocessor nədir? Sass/SCSS faydaları?",
    category: "css",
    subcategory: "tools",
    difficulty: "medium",
    frequency: "medium",
    answer: {
      explanation: "CSS-i daha güclü etmək üçün preprocessing tools",
      features: [
        "Variables",
        "Nesting", 
        "Mixins",
        "Functions",
        "Partials & Imports",
        "Extends"
      ],
      code_example: `// SCSS nümunəsi
$primary-color: #3498db;
$border-radius: 8px;

@mixin button-style($bg-color) {
  background: $bg-color;
  border: none;
  border-radius: $border-radius;
  padding: 12px 24px;
  cursor: pointer;
  
  &:hover {
    background: darken($bg-color, 10%);
  }
}

.button {
  @include button-style($primary-color);
  
  &--secondary {
    @include button-style(#95a5a6);
  }
}

// Compiled CSS
.button {
  background: #3498db;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
}

.button:hover {
  background: #2980b9;
}`
    }
  },

  {
    id: 20,
    question: "CSS-də responsive design necə edilir? Media queries?",
    category: "css",
    subcategory: "responsive",
    difficulty: "medium",
    frequency: "very_high",
    answer: {
      explanation: "Müxtəlif ekran ölçüləri üçün adaptiv dizayn yaratmaq",
      approaches: [
        "Fluid layouts (percentage, fr units)",
        "Flexible images",
        "Media queries",
        "Mobile-first design",
        "Viewport meta tag"
      ],
      code_example: `/* Mobile-first approach */
.container {
  width: 100%;
  padding: 16px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
  }
  
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Common breakpoints */
/* Mobile: < 768px */
/* Tablet: 768px - 1023px */
/* Desktop: 1024px+ */`,
      viewport_tag: '<meta name="viewport" content="width=device-width, initial-scale=1">',
      best_practices: [
        "Mobile-first design",
        "Use relative units (rem, em, %)",
        "Test on real devices",
        "Performance optimization"
      ]
    }
  },

  // React Advanced (15 əlavə)
  {
    id: 21,
    question: "React-da state lifting up nədir? Niyə edilir?",
    category: "react",
    subcategory: "state",
    difficulty: "medium",
    frequency: "high",
    answer: {
      explanation: "State-i ümumi parent component-ə daşımaq, child component-lər arasında paylaşmaq üçün",
      when_to_use: [
        "Sibling component-lər arasında data share",
        "Multiple component-lər eyni state-ə ehtiyac duyanda",
        "State-in synchronize olması lazım olduqda"
      ],
      code_example: `// Before lifting up - isolated state
function SearchInput() {
  const [query, setQuery] = useState('');
  return (
    <input 
      value={query} 
      onChange={e => setQuery(e.target.value)} 
    />
  );
}

function SearchResults() {
  // query-ə access yoxdur!
  return <div>Results</div>;
}

// After lifting up - shared state
function SearchPage() {
  const [query, setQuery] = useState(''); // Lifted state
  
  return (
    <div>
      <SearchInput query={query} setQuery={setQuery} />
      <SearchResults query={query} />
    </div>
  );
}

function SearchInput({ query, setQuery }) {
  return (
    <input 
      value={query} 
      onChange={e => setQuery(e.target.value)} 
    />
  );
}

function SearchResults({ query }) {
  return <div>Results for: {query}</div>;
}`,
      alternatives: ["Context API", "State management libraries (Redux, Zustand)"]
    }
  },

  {
    id: 22,
    question: "React Context API nədir? Nə vaxt istifadə edilir?",
    category: "react",
    subcategory: "context",
    difficulty: "medium",
    frequency: "high",
    answer: {
      explanation: "Component tree-də deep nesting olmadan data paylaşmaq üçün",
      use_cases: [
        "Theme data (dark/light mode)",
        "User authentication",
        "Language/localization",
        "Global app state"
      ],
      code_example: `// Create context
const ThemeContext = createContext();

// Context provider
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for easy usage
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// Usage in component
function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className={\`header \${theme}\`}>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} mode
      </button>
    </header>
  );
}

// App structure
function App() {
  return (
    <ThemeProvider>
      <Header />
      <MainContent />
    </ThemeProvider>
  );
}`,
      performance_note: "Context dəyişəndə bütün consumer-lər re-render olur. Performance üçün split context-lər istifadə edin"
    }
  },

  {
    id: 23,
    question: "useMemo və useCallback nə vaxt istifadə edilir?",
    category: "react",
    subcategory: "performance",
    difficulty: "medium",
    frequency: "high",
    answer: {
      explanation: "Performance optimization üçün expensive calculations və functions-ı cache etmək",
      useMemo: "Expensive calculations-ı cache edir",
      useCallback: "Functions-ı cache edir (child components-a pass edəndə)",
      code_example: `// useMemo - expensive calculation
function ProductList({ products, filter }) {
  // Bu calculation hər render-də işləyəcək
  const expensiveCalculation = products
    .filter(p => p.category === filter)
    .sort((a, b) => a.price - b.price)
    .map(p => ({ ...p, displayPrice: formatPrice(p.price) }));

  // useMemo ilə cache
  const filteredProducts = useMemo(() => {
    return products
      .filter(p => p.category === filter)
      .sort((a, b) => a.price - b.price)
      .map(p => ({ ...p, displayPrice: formatPrice(p.price) }));
  }, [products, filter]); // Yalnız products və ya filter dəyişəndə

  return <div>{/* render products */}</div>;
}

// useCallback - function memoization
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  
  // Bu function hər render-də yeni yaranır
  const addTodo = (text) => {
    setTodos(prev => [...prev, { id: Date.now(), text, done: false }]);
  };
  
  // useCallback ilə memoize
  const memoizedAddTodo = useCallback((text) => {
    setTodos(prev => [...prev, { id: Date.now(), text, done: false }]);
  }, []); // Dependencies yoxdur
  
  return (
    <div>
      <TodoInput onAdd={memoizedAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

// Child component React.memo ilə
const TodoInput = React.memo(({ onAdd }) => {
  // onAdd dəyişməsə component re-render olmayacaq
  const [text, setText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
});`,
      when_to_use: [
        "Expensive calculations",
        "Child components-a function pass edəndə",
        "Dependencies tez-tez dəyişməyəndə",
        "Performance problem olduqda"
      ],
      warning: "Prematurely optimize etməyin. Əvvəlcə profile edin, sonra optimize edin"
    }
  },

  // Performance (8 sual)
  {
    id: 24,
    question: "Web saytın performansını necə ölçürsünüz?",
    category: "performance",
    subcategory: "measurement",
    difficulty: "medium",
    frequency: "high",
    answer: {
      explanation: "Web performance müxtəlif metrics və tools ilə ölçülür",
      core_metrics: {
        LCP: "Largest Contentful Paint - əsas content load vaxtı",
        FID: "First Input Delay - user interaction-a cavab vaxtı", 
        CLS: "Cumulative Layout Shift - layout stability"
      },
      tools: [
        "Google PageSpeed Insights",
        "Lighthouse",
        "WebPageTest",
        "Chrome DevTools",
        "GTmetrix",
        "Real User Monitoring (RUM)"
      ],
      code_example: `// Performance measurement
// Navigation timing
const navigation = performance.getEntriesByType('navigation')[0];
console.log('Page load time:', navigation.loadEventEnd - navigation.loadEventStart);

// Resource timing
const resources = performance.getEntriesByType('resource');
resources.forEach(resource => {
  console.log(\`\${resource.name}: \${resource.duration}ms\`);
});

// Custom timing
performance.mark('start-heavy-task');
// Heavy task here
performance.mark('end-heavy-task');
performance.measure('heavy-task', 'start-heavy-task', 'end-heavy-task');

// Web Vitals with library
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);`,
      optimization_targets: {
        LCP: "< 2.5s",
        FID: "< 100ms", 
        CLS: "< 0.1"
      }
    }
  },

  {
    id: 25,
    question: "Image optimization necə edilir?",
    category: "performance",
    subcategory: "optimization",
    difficulty: "medium",
    frequency: "medium",
    answer: {
      explanation: "Images web saytların ən böyük asset-lərindəndir, optimization vacibdir",
      techniques: [
        "Format seçimi (WebP, AVIF)",
        "Compression",
        "Responsive images",
        "Lazy loading",
        "CDN istifadəsi"
      ],
      code_example: `<!-- Modern image formats -->
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>

<!-- Responsive images -->
<img 
  srcset="
    image-320w.jpg 320w,
    image-640w.jpg 640w,
    image-1024w.jpg 1024w"
  sizes="(max-width: 640px) 100vw, 50vw"
  src="image-640w.jpg"
  alt="Description"
  loading="lazy"
>

<!-- Next.js Image component -->
import Image from 'next/image';

<Image
  src="/image.jpg"
  alt="Description" 
  width={800}
  height={600}

  // Qalan 67 sual - 100-ə tamamlamaq üçün

const finalQuestions = [
  // TypeScript (10 sual)
  {
    id: 34,
    question: "TypeScript nədir və JavaScript-dən fərqi nədir?",
    category: "typescript",
    subcategory: "basics",
    difficulty: "easy",
    frequency: "very_high",
    answer: {
      explanation: "TypeScript JavaScript-ə static type checking əlavə edən programming language",
      benefits: [
        "Type safety",
        "Better IDE support", 
        "Early error detection",
        "Better refactoring",
        "Self-documenting code"
      ],
      code_example: `// JavaScript
function greet(name) {
  return "Hello, " + name;
}

greet(123); // Runtime error potential

// TypeScript
function greet(name: string): string {
  return "Hello, " + name;
}

greet(123); // Compile-time error
greet("John"); // ✅ Correct

// Interface example
interface User {
  id: number;
  name: string;
  email?: string; // optional
}

function createUser(userData: User): User {
  return {
    id: userData.id,
    name: userData.name,
    email: userData.email || ''
  };
}

// Generic example
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("hello");
const numberResult = identity<number>(42);`
    }
  },

  {
    id: 35,
    question: "TypeScript-də interface və type fərqi nədir?",
    category: "typescript",
    subcategory: "types",
    difficulty: "medium",
    frequency: "high",
    answer: {
      explanation: "Hər ikisi custom types yaratmaq üçün istifadə olunur, amma fərqli xüsusiyyətləri var",
      interface_features: [
        "Object shapes define etmək üçün",
        "Declaration merging",
        "Extends keyword",
        "Implements keyword"
      ],
      type_features: [
        "Union, intersection types",
        "Computed properties", 
        "Conditional types",
        "Primitive aliases"
      ],
      code_example: `// Interface
interface User {
  name: string;
  age: number;
}

interface User { // Declaration merging
  email: string;
}
// Result: { name: string; age: number; email: string; }

interface Admin extends User {
  permissions: string[];
}

// Type
type Theme = 'light' | 'dark'; // Union type
type Status = 'loading' | 'success' | 'error';

type UserWithTheme = User & { theme: Theme }; // Intersection

// Computed property
type EventHandlers = {
  [K in 'onClick' | 'onHover']: () => void;
};

// Conditional type
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T };

// When to use what?
// Interface: Object shapes, class contracts
// Type: Unions, computed types, complex logic`,
      recommendation: "Interface object shapes üçün, type union/intersection üçün"
    }
  },

  {
    id: 36,
    question: "React-da TypeScript necə istifadə edilir?",
    category: "typescript",
    subcategory: "react",
    difficulty: "medium",
    frequency: "very_high",
    answer: {
      explanation: "React + TypeScript combination type safety və better developer experience verir",
      component_typing: "Props, state və event handlers type etmək",
      code_example: `// Functional component with props
interface Props {
  title: string;
  count: number;
  onIncrement: () => void;
  children?: React.ReactNode;
}

const Counter: React.FC<Props> = ({ title, count, onIncrement, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
      {children}
    </div>
  );
};

// useState with types
const [user, setUser] = useState<User | null>(null);
const [items, setItems] = useState<string[]>([]);

// useEffect with cleanup
useEffect(() => {
  const subscription = someAPI.subscribe((data: ApiData) => {
    setData(data);
  });
  
  return () => subscription.unsubscribe();
}, []);

// Event handlers
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(e.target.value);
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // submit logic
};

// Custom hooks with types
function useApi<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: string | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((result: T) => setData(result))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Usage
const { data, loading, error } = useApi<User[]>('/api/users');`
    }
  },

  // State Management (10 sual)
  {
    id: 37,
    question: "Redux nədir və necə işləyir?",
    category: "state-management", 
    subcategory: "redux",
    difficulty: "medium",
    frequency: "high",
    answer: {
      explanation: "Redux predictable state container for JavaScript apps",
      core_concepts: {
        store: "Tək mərkəzi state saxlayıcı",
        actions: "State dəyişikliyi təsvir edən objects",
        reducers: "Action əsasında state update edən functions",
        dispatch: "Action göndərmə metodu"
      },
      principles: [
        "Single source of truth",
        "State is read-only", 
        "Changes are made with pure functions"
      ],
      code_example: `// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Store
import { createStore } from 'redux';
const store = createStore(counterReducer);

// React integration
import { Provider, useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

// Redux Toolkit (modern approach)
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: state => { state.count += 1; },
    decrement: state => { state.count -= 1; },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const store = configureStore({ reducer: { counter: counterSlice.reducer } });`
    }
  },

  {
    id: 38,
    question: "Zustand nədir? Redux-dan fərqi?",
    category: "state-management",
    subcategory: "zustand", 
    difficulty: "medium",
    frequency: "medium",
    answer: {
      explanation: "Zustand kiçik, sürətli və scalable state management library",
      advantages: [
        "Minimal boilerplate",
        "No providers needed",
        "TypeScript support",
        "Devtools integration",
        "Middleware support"
      ],
      redux_vs_zustand: {
        redux: "More verbose, established ecosystem, time travel debugging",
        zustand: "Less boilerplate, simpler API, smaller bundle"
      },
      code_example: `// Zustand store
import { create } from 'zustand';

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

// Usage in component
function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Async actions
const useUserStore = create((set, get) => ({
  users: [],
  loading: false,
  
  fetchUsers: async () => {
    set({ loading: true });
    try {
      const response = await fetch('/api/users');
      const users = await response.json();
      set({ users, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
  
  addUser: (user) => set((state) => ({console.log(`Completed: ${complete100Questions.length} questions`);

// QALAN 55 SUAL BURADA DAXİL EDİLƏCƏK
// Sürət üçün qısaldılmış format

const remaining55Questions = [
  // CSS Frameworks (5 sual)
  { id: 46, question: "Tailwind CSS vs Bootstrap fərqi nədir?", category: "css", subcategory: "frameworks", difficulty: "easy", frequency: "high" },
  { id: 47, question: "CSS-in-JS nədir? Styled-components vs Emotion?", category: "css", subcategory: "css-in-js", difficulty: "medium", frequency: "medium" },
  { id: 48, question: "CSS Custom Properties (CSS Variables) necə istifadə edilir?", category: "css", subcategory: "variables", difficulty: "easy", frequency: "medium" },
  { id: 49, question: "CSS Grid vs Flexbox - hansını nə vaxt istifadə etməli?", category: "css", subcategory: "layout", difficulty: "medium", frequency: "very_high" },
  { id: 50, question: "CSS Animations vs Transitions fərqi nədir?", category: "css", subcategory: "animations", difficulty: "medium", frequency: "medium" },

  // Advanced JavaScript (10 sual)
  { id: 51, question: "JavaScript-də Debounce və Throttle nədir?", category: "javascript", subcategory: "performance", difficulty: "medium", frequency: "high" },
  { id: 52, question: "Call, Apply, Bind methods fərqi nədir?", category: "javascript", subcategory: "context", difficulty: "medium", frequency: "medium" },
  { id: 53, question: "JavaScript-də Memory Leaks necə yaranır və necə qarşısı alınır?", category: "javascript", subcategory: "memory", difficulty: "hard", frequency: "medium" },
  { id: 54, question: "ES6+ features hansılardır? (destructuring, spread, etc.)", category: "javascript", subcategory: "es6", difficulty: "easy", frequency: "very_high" },
  { id: 55, question: "JavaScript-də Map və Set nədir?", category: "javascript", subcategory: "data-structures", difficulty: "medium", frequency: "medium" },
  { id: 56, question: "Proxy və Reflect objects nədir?", category: "javascript", subcategory: "metaprogramming", difficulty: "hard", frequency: "low" },
  { id: 57, question: "JavaScript modules (ES6) vs CommonJS fərqi?", category: "javascript", subcategory: "modules", difficulty: "medium", frequency: "medium" },
  { id: 58, question: "Generator functions və Iterators nədir?", category: "javascript", subcategory: "generators", difficulty: "hard", frequency: "low" },
  { id: 59, question: "WeakMap və WeakSet nədir?", category: "javascript", subcategory: "data-structures", difficulty: "hard", frequency: "low" },
  { id: 60, question: "JavaScript-də Symbol primitive type nədir?", category: "javascript", subcategory: "types", difficulty: "medium", frequency: "low" },

  // React Advanced (10 sual)
  { id: 61, question: "React.memo nədir və nə vaxt istifadə edilir?", category: "react", subcategory: "performance", difficulty: "medium", frequency: "high" },
  { id: 62, question: "useReducer vs useState nə vaxt hansını istifadə etməli?", category: "react", subcategory: "hooks", difficulty: "medium", frequency: "high" },
  { id: 63, question: "Custom hooks necə yazılır və nəyə görə faydalıdır?", category: "react", subcategory: "hooks", difficulty: "medium", frequency: "high" },
  { id: 64, question: "React Error Boundaries nədir?", category: "react", subcategory: "error-handling", difficulty: "medium", frequency: "medium" },
  { id: 65, question: "React Portals nədir və nə vaxt istifadə edilir?", category: "react", subcategory: "portals", difficulty: "medium", frequency: "medium" },
  { id: 66, question: "React Suspense və Lazy loading necə işləyir?", category: "react", subcategory: "suspense", difficulty: "medium", frequency: "high" },
  { id: 67, question: "React Concurrent Features nədir?", category: "react", subcategory: "concurrent", difficulty: "hard", frequency: "medium" },
  { id: 68, question: "useLayoutEffect vs useEffect fərqi nədir?", category: "react", subcategory: "hooks", difficulty: "medium", frequency: "medium" },
  { id: 69, question: "React forwardRef nədir və necə istifadə edilir?", category: "react", subcategory: "refs", difficulty: "medium", frequency: "medium" },
  { id: 70, question: "React Higher-Order Components (HOC) nədir?", category: "react", subcategory: "patterns", difficulty: "medium", frequency: "medium" },

  // Performance (5 sual)
  { id: 71, question: "Code splitting nədir və necə implement edilir?", category: "performance", subcategory: "optimization", difficulty: "medium", frequency: "high" },
  { id: 72, question: "Tree shaking nədir?", category: "performance", subcategory: "bundling", difficulty: "medium", frequency: "medium" },
  { id: 73, question: "Critical rendering path nədir?", category: "performance", subcategory: "rendering", difficulty: "hard", frequency: "medium" },
  { id: 74, question: "Browser caching strategies hansılardır?", category: "performance", subcategory: "caching", difficulty: "medium", frequency: "medium" },
  { id: 75, question: "Virtual DOM necə işləyir?", category: "performance", subcategory: "dom", difficulty: "medium", frequency: "high" },

  // Testing (5 əlavə)
  { id: 76, question: "Test-driven development (TDD) nədir?", category: "testing", subcategory: "methodology", difficulty: "medium", frequency: "medium" },
  { id: 77, question: "Mock, Stub, Spy fərqi nədir?", category: "testing", subcategory: "concepts", difficulty: "medium", frequency: "medium" },
  { id: 78, question: "Integration testing vs Unit testing?", category: "testing", subcategory: "types", difficulty: "easy", frequency: "medium" },
  { id: 79, question: "Cypress vs Selenium fərqi nədir?", category: "testing", subcategory: "e2e", difficulty: "medium", frequency: "medium" },
  { id: 80, question: "Test coverage nədir və necə ölçülür?", category: "testing", subcategory: "metrics", difficulty: "easy", frequency: "medium" },

  // DevTools (5 sual)
  { id: 81, question: "Chrome DevTools-da performance debug necə edilir?", category: "devtools", subcategory: "performance", difficulty: "medium", frequency: "medium" },
  { id: 82, question: "Source Maps nədir və necə işləyir?", category: "devtools", subcategory: "debugging", difficulty: "medium", frequency: "medium" },
  { id: 83, question: "Network tab-da nəyə diqqət etməli?", category: "devtools", subcategory: "network", difficulty: "easy", frequency: "high" },
  { id: 84, question:// Qalan 67 sual - 100-ə tamamlamaq üçün

const finalQuestions = [
  // TypeScript (10 sual)
  {
    id: 34,
    question: "TypeScript nədir və JavaScript-dən fərqi nədir?",
    category: "typescript",
    subcategory: "basics",
    difficulty: "easy",
    frequency: "very_high",
    answer: {
      explanation: "TypeScript JavaScript-ə static type checking əlavə edən programming language",
      benefits: [
        "Type safety",
        "Better IDE support", 
        "Early error detection",
        "Better refactoring",
        "Self-documenting code"
      ],
      code_example: `// JavaScript
function greet(name) {
  return "Hello, " + name;
}

greet(123); // Runtime error potential

// TypeScript
function greet(name: string): string {
  return "Hello, " + name;
}

greet(123); // Compile-time error
greet("John"); // ✅ Correct

// Interface example
interface User {
  id: number;
  name: string;
  email?: string; // optional
}

function createUser(userData: User): User {
  return {
    id: userData.id,
    name: userData.name,
    email: userData.email || ''
  };
}

// Generic example
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<string>("hello");
const numberResult = identity<number>(42);`
    }
  },

  {
    id: 35,
    question: "TypeScript-də interface və type fərqi nədir?",
    category: "typescript",
    subcategory: "types",
    difficulty: "medium",
    frequency: "high",
    answer: {
      explanation: "Hər ikisi custom types yaratmaq üçün istifadə olunur, amma fərqli xüsusiyyətləri var",
      interface_features: [
        "Object shapes define etmək üçün",
        "Declaration merging",
        "Extends keyword",
        "Implements keyword"
      ],
      type_features: [
        "Union, intersection types",
        "Computed properties", 
        "Conditional types",
        "Primitive aliases"
      ],
      code_example: `// Interface
interface User {
  name: string;
  age: number;
}

interface User { // Declaration merging
  email: string;
}
// Result: { name: string; age: number; email: string; }

interface Admin extends User {
  permissions: string[];
}

// Type
type Theme = 'light' | 'dark'; // Union type
type Status = 'loading' | 'success' | 'error';

type UserWithTheme = User & { theme: Theme }; // Intersection

// Computed property
type EventHandlers = {
  [K in 'onClick' | 'onHover']: () => void;
};

// Conditional type
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T };

// When to use what?
// Interface: Object shapes, class contracts
// Type: Unions, computed types, complex logic`,
      recommendation: "Interface object shapes üçün, type union/intersection üçün"
    }
  },

  {
    id: 36,
    question: "React-da TypeScript necə istifadə edilir?",
    category: "typescript",
    subcategory: "react",
    difficulty: "medium",
    frequency: "very_high",
    answer: {
      explanation: "React + TypeScript combination type safety və better developer experience verir",
      component_typing: "Props, state və event handlers type etmək",
      code_example: `// Functional component with props
interface Props {
  title: string;
  count: number;
  onIncrement: () => void;
  children?: React.ReactNode;
}

const Counter: React.FC<Props> = ({ title, count, onIncrement, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
      {children}
    </div>
  );
};

// useState with types
const [user, setUser] = useState<User | null>(null);
const [items, setItems] = useState<string[]>([]);

// useEffect with cleanup
useEffect(() => {
  const subscription = someAPI.subscribe((data: ApiData) => {
    setData(data);
  });
  
  return () => subscription.unsubscribe();
}, []);

// Event handlers
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(e.target.value);
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // submit logic
};

// Custom hooks with types
function useApi<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: string | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((result: T) => setData(result))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Usage
const { data, loading, error } = useApi<User[]>('/api/users');`
    }
  },

  // State Management (10 sual)
  {
    id: 37,
    question: "Redux nədir və necə işləyir?",
    category: "state-management", 
    subcategory: "redux",
    difficulty: "medium",
    frequency: "high",
    answer: {
      explanation: "Redux predictable state container for JavaScript apps",
      core_concepts: {
        store: "Tək mərkəzi state saxlayıcı",
        actions: "State dəyişikliyi təsvir edən objects",
        reducers: "Action əsasında state update edən functions",
        dispatch: "Action göndərmə metodu"
      },
      principles: [
        "Single source of truth",
        "State is read-only", 
        "Changes are made with pure functions"
      ],
      code_example: `// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Store
import { createStore } from 'redux';
const store = createStore(counterReducer);

// React integration
import { Provider, useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

// Redux Toolkit (modern approach)
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: state => { state.count += 1; },
    decrement: state => { state.count -= 1; },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const store = configureStore({ reducer: { counter: counterSlice.reducer } });`
    }
  },

  {
    id: 38,
    question: "Zustand nədir? Redux-dan fərqi?",
    category: "state-management",
    subcategory: "zustand", 
    difficulty: "medium",
    frequency: "medium",
    answer: {
      explanation: "Zustand kiçik, sürətli və scalable state management library",
      advantages: [
        "Minimal boilerplate",
        "No providers needed",
        "TypeScript support",
        "Devtools integration",
        "Middleware support"
      ],
      redux_vs_zustand: {
        redux: "More verbose, established ecosystem, time travel debugging",
        zustand: "Less boilerplate, simpler API, smaller bundle"
      },
      code_example: `// Zustand store
import { create } from 'zustand';

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

// Usage in component
function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Async actions
const useUserStore = create((set, get) => ({
  users: [],
  loading: false,
  
  fetchUsers: async () => {
    set({ loading: true });
    try {
      const response = await fetch('/api/users');
      const users = await response.json();
      set({ users, loading: false });
    } catch (error) {
      set({ loading: false });
    }
  },
  
  addUser: (user) => set((state) => ({ 
    users: [...state.users, user] 
  })),
}));

// Persist middleware
import { persist } from 'zustand/middleware';

const usePersistedStore = create(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'app-settings', // localStorage key
    }
  )
);`
    }
  },

  // Build Tools (8 sual)
  {
    id: 39,
    question: "Webpack nədir və necə konfiqurasiya edilir?",
    category: "build-tools",
    subcategory: "webpack",
    difficulty: "medium",
    frequency: "medium",
    answer: {
      explanation: "Webpack module bundler - JavaScript applications üçün static module bundler",
      core_concepts: {
        entry: "Bundling başlama nöqtəsi",
        output: "Bundle faylların yeri",
        loaders: "Non-JS faylları transform edir",
        plugins: "Optimization və functionality əlavə edir"
      },
      code_example: `// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  
  module: {
    rules: [
      // JavaScript/JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      
      // CSS
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      
      // SCSS
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      
      // Images
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource'
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    }
  },
  
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true
  }
};

// package.json scripts
{
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack serve --mode development",
    "analyze": "webpack-bundle-analyzer dist"
  }
}`
    }
  },

  {
    id: 40,
    question: "Vite nədir və Webpack-dən fərqi nədir?",
    category: "build-tools",
    subcategory: "vite",
    difficulty: "medium", 
    frequency: "high",
    answer: {
      explanation: "Vite next generation frontend tooling - sürətli development server və build tool",
      advantages: [
        "Lightning fast HMR",
        "Native ES modules",
        "No bundling in development",
        "Optimized build with Rollup",
        "Plugin ecosystem"
      ],
      webpack_vs_vite: {
        development: "Vite daha sürətli (ES modules), Webpack bundling edir",
        build: "Hər ikisi production üçün optimize edir",
        config: "Vite daha az konfiqurasiya tələb edir"
      },
      code_example: `// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: \`@import "@/styles/variables.scss";\`
      }
    }
  },
  
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash']
        }
      }
    }
  },
  
  server: {
    port: 3000,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
});

// package.json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}

// Environment variables (.env)
VITE_API_URL=http://localhost:8000
VITE_APP_TITLE=My Vite App

// Usage in code
const apiUrl = import.meta.env.VITE_API_URL;`
    }
  },

  // Browser APIs (5 sual)
  {
    id: 41,
    question: "Local Storage, Session Storage, Cookies fərqi nədir?",
    category: "browser-apis",
    subcategory: "storage",
    difficulty: "easy",
    frequency: "high",
    answer: {
      explanation: "Browser-də data saxlamaq üçün müxtəlif methodlar",
      comparison: {
        localStorage: {
          capacity: "5-10MB",
          expiration: "Manuel silənə qədər",
          scope: "Origin (protocol + domain + port)",
          sent_to_server: "Xeyr"
        },
        sessionStorage: {
          capacity: "5-10MB", 
          expiration: "Tab bağlanana qədər",
          scope: "Origin + Tab",
          sent_to_server: "Xeyr"
        },
        cookies: {
          capacity: "4KB",
          expiration: "Expires/Max-Age ilə",
          scope: "Domain + Path",
          sent_to_server: "Hər HTTP request ilə"
        }
      },
      code_example: `// Local Storage
localStorage.setItem('user', JSON.stringify({ name: 'John', age: 30 }));
const user = JSON.parse(localStorage.getItem('user'));
localStorage.removeItem('user');
localStorage.clear();

// Session Storage
sessionStorage.setItem('tempData', 'some value');
const tempData = sessionStorage.getItem('tempData');

// Cookies
// Set cookie
document.cookie = "username=john; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/";

// Get cookie
function getCookie(name) {
  const value = \`; \${document.cookie}\`;
  const parts = value.split(\`; \${name}=\`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

// Modern cookie library usage
import Cookies from 'js-cookie';

Cookies.set('name', 'value', { expires: 7, secure: true, sameSite: 'strict' });
const value = Cookies.get('name');
Cookies.remove('name');

// React hook for localStorage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
}`,
      use_cases: {
        localStorage: "User preferences, shopping cart, offline data",
        sessionStorage: "Form data, temporary UI state",
        cookies: "Authentication tokens, tracking, server-side data"
      }
    }
  },

  {
    id: 42,
    question: "Fetch API vs XMLHttpRequest fərqi nədir?",
    category: "browser-apis",
    subcategory: "http",
    difficulty: "easy",
    frequency: "medium",
    answer: {
      explanation: "Hər ikisi HTTP requests etmək üçün, amma Fetch daha modern və promise-based",
      fetch_advantages: [
        "Promise-based (modern async)",
        "More readable code",
        "Better error handling",
        "Request/Response objects",
        "Streaming support"
      ],
      code_example: `// XMLHttpRequest (legacy)
const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/users');
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};
xhr.send();

// Fetch API (modern)
fetch('/api/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Fetch with async/await
async function fetchUsers() {
  try {
    const response = await fetch('/api/users');
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// POST request with Fetch
async function createUser(userData) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData)
  });
  
  return response.json();
}

// Fetch with timeout
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    throw error;
  }
}`
    }
  },

  // Accessibility (8 sual)
  {
    id: 43,
    question: "Web Accessibility (a11y) nədir? ARIA nədir?",
    category: "accessibility",
    subcategory: "basics",
    difficulty: "medium",
    frequency: "medium",
    answer: {
      explanation: "Web accessibility bütün istifadəçilərin web content-ə access edə bilməsini təmin edir",
      wcag_principles: [
        "Perceivable - görmək/eşitmək/hiss etmək",
        "Operable - navigate və interact edə bilmək", 
        "Understandable - content və interface anlaşılan",
        "Robust - müxtəlif texnologiyalarla işləmək"
      ],
      aria_roles: "ARIA (Accessible Rich Internet Applications) semantic məlumat əlavə edir",
      code_example: `<!-- Semantic HTML -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<main>
  <h1>Page Title</h1>
  <article>
    <h2>Article Title</h2>
    <p>Content...</p>
  </article>
</main>

<!-- ARIA examples -->
<button 
  aria-expanded="false" 
  aria-controls="dropdown-menu"
  aria-haspopup="true"
>
  Menu
</button>

<div 
  id="dropdown-menu"
  role="menu"
  aria-hidden="true"
>
  <a href="#" role="menuitem">Option 1</a>
  <a href="#" role="menuitem">Option 2</a>
</div>

<!-- Form accessibility -->
<form>
  <label for="email">Email Address *</label>
  <input 
    type="email" 
    id="email"
    required
    aria-describedby="email-error"
    aria-invalid="false"
  />
  <div id="email-error" aria-live="polite"></div>
</form>

<!-- Skip navigation -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<!-- Focus management in React -->
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef();
  const previousFocus = useRef();

  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement;
      modalRef.current?.focus();
    } else {
      previousFocus.current?.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
    >
      <div 
        className="modal"
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onKeyDown={handleKeyDown}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="modal-title">Modal Title</h2>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}`,
      testing_tools: [
        "axe-core DevTools extension",
        "Lighthouse accessibility audit",
        "Screen reader testing",
        "Keyboard navigation testing"
      ]
    }
  },

  // SEO (5 sual)
  {
    id: 44,
    question: "Frontend SEO best practices hansılardır?",
    category: "seo",
    subcategory: "optimization",
    difficulty: "medium",
    frequency: "medium",
    answer: {
      explanation: "Search Engine Optimization frontend performance və visibility artırır",
      technical_seo: [
        "Meta tags optimization",
        "Semantic HTML structure",
        "Page speed optimization",
        "Mobile responsiveness",
        "URL structure"
      ],
      code_example: `<!-- Essential meta tags -->
<head>
  <title>Page Title - Max 60 characters</title>
  <meta name="description" content="Page description - max 160 characters">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <!-- Open Graph (Social media) -->
  <meta property="og:title" content="Page Title">
  <meta property="og:description" content="Page description">
  <meta property="og:image" content="https://example.com/image.jpg">
  <meta property="og:url" content="https://example.com/page">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Page Title">
  <meta name="twitter:description" content="Page description">
  <meta name="twitter:image" content="https://example.com/image.jpg">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://example.com/page">
  
  <!-- Robots -->
  <meta name="robots" content="index, follow">
</head>

<!-- Semantic HTML structure -->
<header>
  <nav aria-label="Main navigation">
    <h1>Site Title</h1>
    <!-- Navigation menu -->
  </nav>
</header>

<main>
  <article>
    <header>
      <h1>Article Title</h1>
      <time datetime="2024-01-15">January 15, 2024</time>
    </header>
    
    <section>
      <h2>Section Title</h2>
      <p>Content with proper heading hierarchy...</p>
    </section>
  </article>
</main>

<footer>
  <!-- Footer content -->
</footer>

// React Helmet for dynamic meta tags
import { Helmet } from 'react-helmet';

function ProductPage({ product }) {
  return (
    <>
      <Helmet>
        <title>{\`\${product.name} - Our Store\`}</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        <meta property="og:image" content={product.image} />
        <link rel="canonical" href={\`https://store.com/products/\${product.slug}\`} />
      </Helmet>
      
      <article itemScope itemType="https://schema.org/Product">
        <h1 itemProp="name">{product.name}</h1>
        <img itemProp="image" src={product.image} alt={product.name} />
        <p itemProp="description">{product.description}</p>
        <span itemProp="price">${product.price}</span>
      </article>
    </>
  );
}

// Next.js Head component
import Head from 'next/head';

export default function Page({ post }) {
  return (
    <>
      <Head>
        <title>{\`\${post.title} | Blog\`}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
}`,
      performance_factors: [
        "Core Web Vitals (LCP, FID, CLS)",
        "Page load speed",
        "Mobile-first indexing", 
        "HTTPS requirement",
        "Structured data"
      ]
    }
  },

  // Bu nöqtədə 45 sual var. Qalan 55 sualı da əlavə etmək olar:
  // - GraphQL (5 sual)
  // - DevTools (5 sual) 
  // - CSS Frameworks (5 sual)
  // - Design Patterns (8 sual)
  // - Error Handling (5 sual)
  // - Code Quality (7 sual)
  // - Browser Compatibility (5 sual)
  // - Monitoring (5 sual)
  // - Advanced JavaScript (10 sual)

  // GraphQL (5 sual)
  {
    id: 45,
    question: "GraphQL nədir və REST API-dən fərqi nədir?",
    category: "graphql",
    subcategory: "basics",
    difficulty: "medium",
    frequency: "medium", 
    answer: {
      explanation: "GraphQL API-lər üçün query language və runtime",
      advantages: [
        "Single endpoint",
        "Exact data fetching",
        "Strong type system",
        "Real-time subscriptions",
        "Introspection"
      ],
      rest_vs_graphql: {
        rest: "Multiple endpoints, over/under fetching, versioning issues",
        graphql: "Single endpoint, precise data, evolution without versioning"
      },
      code_example: `// GraphQL Schema
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}

type Query {
  user(id: ID!): User
  users: [User!]!
  post(id: ID!): Post
}

// GraphQL Query
query GetUser($userId: ID!) {
  user(id: $userId) {
    id
    name
    email
    posts {
      id
      title
    }
  }
}

// Apollo Client setup
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

// React component with GraphQL
const GET_USERS = gql\`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
\`;

function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}

// Mutation example
const CREATE_USER = gql\`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      id
      name
      email
    }
  }
\`;

function CreateUser() {
  const [createUser, { loading, error }] = useMutation(CREATE_USER);

  const handleSubmit = async (formData) => {
    try {
      await createUser({
        variables: { input: formData },
        refetchQueries: [{ query: GET_USERS }]
      });
    } catch (err) {
      console.error('Error creating user:', err);
    }
  };
}`
    }
  }

  // Bu şəkildə davam edib 100 sual tamamlanır...
];

// Bütün sualları birləşdirmək
const complete100Questions = [
  ...top100Questions,     // İlk 15
  ...additionalQuestions, // Növbəti 18  
  ...finalQuestions       // Son hissə
];

console.log(`Completed: ${complete100Questions.length} questions`);{ id: 84, question: "Console API-nin advanced features hansılardır?", category: "devtools", subcategory: "console", difficulty: "easy", frequency: "medium" },
{ id: 85, question: "React DevTools necə istifadə edilir?", category: "devtools", subcategory: "react", difficulty: "easy", frequency: "high" },

// Design Patterns (5 sual)
{ id: 86, question: "Singleton pattern JavaScript-də necə implement edilir?", category: "patterns", subcategory: "creational", difficulty: "medium", frequency: "medium" },
{ id: 87, question: "Observer pattern nədir? Event-driven programming?", category: "patterns", subcategory: "behavioral", difficulty: "medium", frequency: "medium" },
{ id: 88, question: "Module pattern vs Revealing module pattern?", category: "patterns", subcategory: "structural", difficulty: "medium", frequency: "medium" },
{ id: 89, question: "Factory pattern frontend-də necə istifadə edilir?", category: "patterns", subcategory: "creational", difficulty: "medium", frequency: "low" },
{ id: 90, question: "MVC, MVP, MVVM patterns fərqi nədir?", category: "patterns", subcategory: "architectural", difficulty: "medium", frequency: "medium" },

// Error Handling (5 sual)
{ id: 91, question: "JavaScript-də error handling best practices?", category: "error-handling", subcategory: "javascript", difficulty: "medium", frequency: "high" },
{ id: 92, question: "Global error handling necə implement edilir?", category: "error-handling", subcategory: "global", difficulty: "medium", frequency: "medium" },
{ id: 93, question: "React-da error boundaries vs try-catch?", category: "error-handling", subcategory: "react", difficulty: "medium", frequency: "medium" },
{ id: 94, question: "API error handling strategies hansılardır?", category: "error-handling", subcategory: "api", difficulty: "medium", frequency: "high" },
{ id: 95, question: "Error logging və monitoring necə edilir?", category: "error-handling", subcategory: "monitoring", difficulty: "medium", frequency: "medium" },

// Browser Compatibility (5 sual)
{ id: 96, question: "Polyfills və Transpilation nədir?", category: "compatibility", subcategory: "tools", difficulty: "medium", frequency: "medium" },
{ id: 97, question: "Cross-browser testing necə edilir?", category: "compatibility", subcategory: "testing", difficulty: "medium", frequency: "medium" },
{ id: 98, question: "Progressive enhancement vs Graceful degradation?", category: "compatibility", subcategory: "strategy", difficulty: "medium", frequency: "medium" },
{ id: 99, question: "Feature detection vs Browser detection?", category: "compatibility", subcategory: "detection", difficulty: "medium", frequency: "medium" },
{ id: 100, question: "Modernizr library nədir və necə istifadə edilir?", category: "compatibility", subcategory: "tools", difficulty: "medium", frequency: "low" }
];

// API-dəki top100Questions array-nə bütün sualları əlavə etmək üçün:
const COMPLETE_100_QUESTIONS = [
// İlk 15 sual artıq API-də var
...additionalQuestions, // 16-33
...finalQuestions,      // 34-45  
...remaining55Questions // 46-100
];

// Bu 100 sual artıq API-də istifadə edilmək üçün hazırdır!
// Hər sualın:
// - id: unikal identifikator
// - question: sual mətni
// - category: əsas kateqoriya (html, css, javascript, react, və s.)
// - subcategory: alt kateqoriya (hooks, performance, və s.) 
// - difficulty: çətinlik səviyyəsi (easy, medium, hard)
// - frequency: nə qədər tez-tez verilir (very_high, high, medium, low)
// - answer: ətraflı cavab və izahat (bəzi suallar üçün)

console.log(`🎉 Toplam ${COMPLETE_100_QUESTIONS.length} frontend interview sualı hazırdır!`);

// Kateqoriyalar üzrə statistika:
const categoryStats = COMPLETE_100_QUESTIONS.reduce((acc, q) => {
acc[q.category] = (acc[q.category] || 0) + 1;
return acc;
}, {});

console.log('📊 Kateqoriya statistikası:', categoryStats);

// Məsələn output:
// {
//   javascript: 25,
//   react: 20, 
//   css: 15,
//   html: 5,
//   typescript: 10,
//   nextjs: 5,
//   api: 5,
//   performance: 8,
//   testing: 7
// }// Qalan 67 sual - 100-ə tamamlamaq üçün

const finalQuestions = [
// TypeScript (10 sual)
{
  id: 34,
  question: "TypeScript nədir və JavaScript-dən fərqi nədir?",
  category: "typescript",
  subcategory: "basics",
  difficulty: "easy",
  frequency: "very_high",
  answer: {
    explanation: "TypeScript JavaScript-ə static type checking əlavə edən programming language",
    benefits: [
      "Type safety",
      "Better IDE support", 
      "Early error detection",
      "Better refactoring",
      "Self-documenting code"
    ],
    code_example: `// JavaScript
function greet(name) {
  return "Hello, " + name;
}

greet(123); // Runtime error potential

// TypeScript
function greet(name: string): string {
  return "Hello, " + name;
}

greet(123); // Compile-time error
greet("John"); // ✅ Correct

// Interface example`
interface User {
id: number;
name: string;
email?: string; // optional
}

function createUser(userData: User): User {
return {
  id: userData.id,
  name: userData.name,
  email: userData.email || ''
};
}

// Generic example
function identity<T>(arg: T): T {
return arg;
}

const result = identity<string>("hello");
const numberResult = identity<number>(42);`
  }
},

{
  id: 35,
  question: "TypeScript-də interface və type fərqi nədir?",
  category: "typescript",
  subcategory: "types",
  difficulty: "medium",
  frequency: "high",
  answer: {
    explanation: "Hər ikisi custom types yaratmaq üçün istifadə olunur, amma fərqli xüsusiyyətləri var",
    interface_features: [
      "Object shapes define etmək üçün",
      "Declaration merging",
      "Extends keyword",
      "Implements keyword"
    ],
    type_features: [
      "Union, intersection types",
      "Computed properties", 
      "Conditional types",
      "Primitive aliases"
    ],
    code_example: `// Interface
interface User {
name: string;
age: number;
}

interface User { // Declaration merging
email: string;
}
// Result: { name: string; age: number; email: string; }

interface Admin extends User {
permissions: string[];
}

// Type
type Theme = 'light' | 'dark'; // Union type
type Status = 'loading' | 'success' | 'error';

type UserWithTheme = User & { theme: Theme }; // Intersection

// Computed property
type EventHandlers = {
[K in 'onClick' | 'onHover']: () => void;
};

// Conditional type
type ApiResponse<T> = T extends string 
? { message: T } 
: { data: T };

// When to use what?
// Interface: Object shapes, class contracts
// Type: Unions, computed types, complex logic`,
    recommendation: "Interface object shapes üçün, type union/intersection üçün"
  }
},

{
  id: 36,
  question: "React-da TypeScript necə istifadə edilir?",
  category: "typescript",
  subcategory: "react",
  difficulty: "medium",
  frequency: "very_high",
  answer: {
    explanation: "React + TypeScript combination type safety və better developer experience verir",
    component_typing: "Props, state və event handlers type etmək",
    code_example: `// Functional component with props
interface Props {
title: string;
count: number;
onIncrement: () => void;
children?: React.ReactNode;
}

const Counter: React.FC<Props> = ({ title, count, onIncrement, children }) => {
return (
  <div>
    <h2>{title}</h2>
    <p>Count: {count}</p>
    <button onClick={onIncrement}>Increment</button>
    {children}
  </div>
);
};

// useState with types
const [user, setUser] = useState<User | null>(null);
const [items, setItems] = useState<string[]>([]);

// useEffect with cleanup
useEffect(() => {
const subscription = someAPI.subscribe((data: ApiData) => {
  setData(data);
});

return () => subscription.unsubscribe();
}, []);

// Event handlers
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setInputValue(e.target.value);
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
// submit logic
};

// Custom hooks with types
function useApi<T>(url: string): {
data: T | null;
loading: boolean;
error: string | null;
} {
const [data, setData] = useState<T | null>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  fetch(url)
    .then(res => res.json())
    .then((result: T) => setData(result))
    .catch((err: Error) => setError(err.message))
    .finally(() => setLoading(false));
}, [url]);

return { data, loading, error };
}

// Usage
const { data, loading, error } = useApi<User[]>('/api/users');`
  }
},

// State Management (10 sual)
{
  id: 37,
  question: "Redux nədir və necə işləyir?",
  category: "state-management", 
  subcategory: "redux",
  difficulty: "medium",
  frequency: "high",
  answer: {
    explanation: "Redux predictable state container for JavaScript apps",
    core_concepts: {
      store: "Tək mərkəzi state saxlayıcı",
      actions: "State dəyişikliyi təsvir edən objects",
      reducers: "Action əsasında state update edən functions",
      dispatch: "Action göndərmə metodu"
    },
    principles: [
      "Single source of truth",
      "State is read-only", 
      "Changes are made with pure functions"
    ],
    code_example: `// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action creators
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// Reducer
const counterReducer = (state = { count: 0 }, action) => {
switch (action.type) {
  case INCREMENT:
    return { ...state, count: state.count + 1 };
  case DECREMENT:
    return { ...state, count: state.count - 1 };
  default:
    return state;
}
};

// Store
import { createStore } from 'redux';
const store = createStore(counterReducer);

// React integration
import { Provider, useSelector, useDispatch } from 'react-redux';

function Counter() {
const count = useSelector(state => state.count);
const dispatch = useDispatch();

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
  </div>
);
}

function App() {
return (
  <Provider store={store}>
    <Counter />
  </Provider>
);
}

// Redux Toolkit (modern approach)
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
name: 'counter',
initialState: { count: 0 },
reducers: {
  increment: state => { state.count += 1; },
  decrement: state => { state.count -= 1; },
  incrementByAmount: (state, action) => {
    state.count += action.payload;
  }
}
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const store = configureStore({ reducer: { counter: counterSlice.reducer } });`
  }
},

{
  id: 38,
  question: "Zustand nədir? Redux-dan fərqi?",
  category: "state-management",
  subcategory: "zustand", 
  difficulty: "medium",
  frequency: "medium",
  answer: {
    explanation: "Zustand kiçik, sürətli və scalable state management library",
    advantages: [
      "Minimal boilerplate",
      "No providers needed",
      "TypeScript support",
      "Devtools integration",
      "Middleware support"
    ],
    redux_vs_zustand: {
      redux: "More verbose, established ecosystem, time travel debugging",
      zustand: "Less boilerplate, simpler API, smaller bundle"
    },
    code_example: `// Zustand store
import { create } from 'zustand';

interface CounterStore {
count: number;
increment: () => void;
decrement: () => void;
reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
count: 0,
increment: () => set((state) => ({ count: state.count + 1 })),
decrement: () => set((state) => ({ count: state.count - 1 })),
reset: () => set({ count: 0 }),
}));

// Usage in component
function Counter() {
const { count, increment, decrement, reset } = useCounterStore();

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>Reset</button>
  </div>
);
}

// Async actions
const useUserStore = create((set, get) => ({
users: [],
loading: false,

fetchUsers: async () => {
  set({ loading: true });
  try {
    const response = await fetch('/api/users');
    const users = await response.json();
    set({ users, loading: false });
  } catch (error) {
    set({ loading: false });
  }
},

addUser: (user) => set((state) => ({ 
  users: [...state.users, user] 
})),
}));

// Persist middleware
import { persist } from 'zustand/middleware';

const usePersistedStore = create(
persist(
  (set) => ({
    theme: 'light',
    setTheme: (theme) => set({ theme }),
  }),
  {
    name: 'app-settings', // localStorage key
  }
)
);`
  }
},

// Build Tools (8 sual)
{
  id: 39,
  question: "Webpack nədir və necə konfiqurasiya edilir?",
  category: "build-tools",
  subcategory: "webpack",
  difficulty: "medium",
  frequency: "medium",
  answer: {
    explanation: "Webpack module bundler - JavaScript applications üçün static module bundler",
    core_concepts: {
      entry: "Bundling başlama nöqtəsi",
      output: "Bundle faylların yeri",
      loaders: "Non-JS faylları transform edir",
      plugins: "Optimization və functionality əlavə edir"
    },
    code_example: `// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
entry: './src/index.js',

output: {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].[contenthash].js',
  clean: true,
},

module: {
  rules: [
    // JavaScript/JSX
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    },
    
    // CSS
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    },
    
    // SCSS
    {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    },
    
    // Images
    {
      test: /\.(png|jpg|gif|svg)$/,
      type: 'asset/resource'
    }
  ]
},

plugins: [
  new HtmlWebpackPlugin({
    template: './public/index.html'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css'
  })
],

optimization: {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
      }
    }
  }
},

devServer: {
  port: 3000,
  hot: true,
  historyApiFallback: true
}
};

// package.json scripts
{
"scripts": {
  "build": "webpack --mode production",
  "dev": "webpack serve --mode development",
  "analyze": "webpack-bundle-analyzer dist"
}
}`
  }
},

{
  id: 40,
  question: "Vite nədir və Webpack-dən fərqi nədir?",
  category: "build-tools",
  subcategory: "vite",
  difficulty: "medium", 
  frequency: "high",
  answer: {
    explanation: "Vite next generation frontend tooling - sürətli development server və build tool",
    advantages: [
      "Lightning fast HMR",
      "Native ES modules",
      "No bundling in development",
      "Optimized build with Rollup",
      "Plugin ecosystem"
    ],
    webpack_vs_vite: {
      development: "Vite daha sürətli (ES modules), Webpack bundling edir",
      build: "Hər ikisi production üçün optimize edir",
      config: "Vite daha az konfiqurasiya tələb edir"
    },
    code_example: `// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
plugins: [react()],

resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
},

css: {
  preprocessorOptions: {
    scss: {
      additionalData: \`@import "@/styles/variables.scss";\`
    }
  }
},

build: {
  outDir: 'dist',
  sourcemap: true,
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        utils: ['lodash']
      }
    }
  }
},

server: {
  port: 3000,
  hot: true,
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      changeOrigin: true
    }
  }
}
});

// package.json
{
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
}

// Environment variables (.env)
VITE_API_URL=http://localhost:8000
VITE_APP_TITLE=My Vite App

// Usage in code
const apiUrl = import.meta.env.VITE_API_URL;`
  }
},

// Browser APIs (5 sual)
{
  id: 41,
  question: "Local Storage, Session Storage, Cookies fərqi nədir?",
  category: "browser-apis",
  subcategory: "storage",
  difficulty: "easy",
  frequency: "high",
  answer: {
    explanation: "Browser-də data saxlamaq üçün müxtəlif methodlar",
    comparison: {
      localStorage: {
        capacity: "5-10MB",
        expiration: "Manuel silənə qədər",
        scope: "Origin (protocol + domain + port)",
        sent_to_server: "Xeyr"
      },
      sessionStorage: {
        capacity: "5-10MB", 
        expiration: "Tab bağlanana qədər",
        scope: "Origin + Tab",
        sent_to_server: "Xeyr"
      },
      cookies: {
        capacity: "4KB",
        expiration: "Expires/Max-Age ilə",
        scope: "Domain + Path",
        sent_to_server: "Hər HTTP request ilə"
      }
    },
    code_example: `// Local Storage
localStorage.setItem('user', JSON.stringify({ name: 'John', age: 30 }));
const user = JSON.parse(localStorage.getItem('user'));
localStorage.removeItem('user');
localStorage.clear();

// Session Storage
sessionStorage.setItem('tempData', 'some value');
const tempData = sessionStorage.getItem('tempData');

// Cookies
// Set cookie
document.cookie = "username=john; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/";

// Get cookie
function getCookie(name) {
const value = \`; \${document.cookie}\`;
const parts = value.split(\`; \${name}=\`);
if (parts.length === 2) return parts.pop().split(';').shift();
}

// Modern cookie library usage
import Cookies from 'js-cookie';

Cookies.set('name', 'value', { expires: 7, secure: true, sameSite: 'strict' });
const value = Cookies.get('name');
Cookies.remove('name');

// React hook for localStorage
function useLocalStorage(key, initialValue) {
const [storedValue, setStoredValue] = useState(() => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    return initialValue;
  }
});

const setValue = value => {
  try {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

return [storedValue, setValue];
}`,
    use_cases: {
      localStorage: "User preferences, shopping cart, offline data",
      sessionStorage: "Form data, temporary UI state",
      cookies: "Authentication tokens, tracking, server-side data"
    }
  }
},

{
  id: 42,
  question: "Fetch API vs XMLHttpRequest fərqi nədir?",
  category: "browser-apis",
  subcategory: "http",
  difficulty: "easy",
  frequency: "medium",
  answer: {
    explanation: "Hər ikisi HTTP requests etmək üçün, amma Fetch daha modern və promise-based",
    fetch_advantages: [
      "Promise-based (modern async)",
      "More readable code",
      "Better error handling",
      "Request/Response objects",
      "Streaming support"
    ],
    code_example: `// XMLHttpRequest (legacy)
const xhr = new XMLHttpRequest();
xhr.open('GET', '/api/users');
xhr.onreadystatechange = function() {
if (xhr.readyState === 4 && xhr.status === 200) {
  const data = JSON.parse(xhr.responseText);
  console.log(data);
}
};
xhr.send();

// Fetch API (modern)
fetch('/api/users')
.then(response => {
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }
  return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

// Fetch with async/await
async function fetchUsers() {
try {
  const response = await fetch('/api/users');
  
  if (!response.ok) {
    throw new Error(\`HTTP error! status: \${response.status}\`);
  }
  
  const users = await response.json();
  return users;
} catch (error) {
  console.error('Fetch error:', error);
  throw error;
}
}

// POST request with Fetch
async function createUser(userData) {
const response = await fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(userData)
});

return response.json();
}

// Fetch with timeout
async function fetchWithTimeout(url, timeout = 5000) {
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), timeout);

try {
  const response = await fetch(url, {
    signal: controller.signal
  });
  clearTimeout(timeoutId);
  return response;
} catch (error) {
  if (error.name === 'AbortError') {
    throw new Error('Request timed out');
  }
  throw error;
}
}`
  }
},

// Accessibility (8 sual)
{
  id: 43,
  question: "Web Accessibility (a11y) nədir? ARIA nədir?",
  category: "accessibility",
  subcategory: "basics",
  difficulty: "medium",
  frequency: "medium",
  answer: {
    explanation: "Web accessibility bütün istifadəçilərin web content-ə access edə bilməsini təmin edir",
    wcag_principles: [
      "Perceivable - görmək/eşitmək/hiss etmək",
      "Operable - navigate və interact edə bilmək", 
      "Understandable - content və interface anlaşılan",
      "Robust - müxtəlif texnologiyalarla işləmək"
    ],
    aria_roles: "ARIA (Accessible Rich Internet Applications) semantic məlumat əlavə edir",
    code_example: `<!-- Semantic HTML -->
<nav aria-label="Main navigation">
<ul>
  <li><a href="/" aria-current="page">Home</a></li>
  <li><a href="/about">About</a></li>
</ul>
</nav>

<main>
<h1>Page Title</h1>
<article>
  <h2>Article Title</h2>
  <p>Content...</p>
</article>
</main>

<!-- ARIA examples -->
<button 
aria-expanded="false" 
aria-controls="dropdown-menu"
aria-haspopup="true"
>
Menu
</button>

<div 
id="dropdown-menu"
role="menu"
aria-hidden="true"
>
<a href="#" role="menuitem">Option 1</a>
<a href="#" role="menuitem">Option 2</a>
</div>

<!-- Form accessibility -->
<form>
<label for="email">Email Address *</label>
<input 
  type="email" 
  id="email"
  required
  aria-describedby="email-error"
  aria-invalid="false"
/>
<div id="email-error" aria-live="polite"></div>
</form>

<!-- Skip navigation -->
<a href="#main-content" class="skip-link">
Skip to main content
</a>

<!-- Focus management in React -->
function Modal({ isOpen, onClose, children }) {
const modalRef = useRef();
const previousFocus = useRef();

useEffect(() => {
  if (isOpen) {
    previousFocus.current = document.activeElement;
    modalRef.current?.focus();
  } else {
    previousFocus.current?.focus();
  }
}, [isOpen]);

const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    onClose();
  }
};

if (!isOpen) return null;

return (
  <div 
    className="modal-overlay"
    onClick={onClose}
  >
    <div 
      className="modal"
      ref={modalRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onKeyDown={handleKeyDown}
      onClick={(e) => e.stopPropagation()}
    >
      <h2 id="modal-title">Modal Title</h2>
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);
}`,
    testing_tools: [
      "axe-core DevTools extension",
      "Lighthouse accessibility audit",
      "Screen reader testing",
      "Keyboard navigation testing"
    ]
  }
},

// SEO (5 sual)
{
  id: 44,
  question: "Frontend SEO best practices hansılardır?",
  category: "seo",
  subcategory: "optimization",
  difficulty: "medium",
  frequency: "medium",
  answer: {
    explanation: "Search Engine Optimization frontend performance və visibility artırır",
    technical_seo: [
      "Meta tags optimization",
      "Semantic HTML structure",
      "Page speed optimization",
      "Mobile responsiveness",
      "URL structure"
    ],
    code_example: `<!-- Essential meta tags -->
<head>
<title>Page Title - Max 60 characters</title>
<meta name="description" content="Page description - max 160 characters">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Open Graph (Social media) -->
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com/page">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title">
<meta name="twitter:description" content="Page description">
<meta name="twitter:image" content="https://example.com/image.jpg">

<!-- Canonical URL -->
<link rel="canonical" href="https://example.com/page">

<!-- Robots -->
<meta name="robots" content="index, follow">
</head>

<!-- Semantic HTML structure -->
<header>
<nav aria-label="Main navigation">
  <h1>Site Title</h1>
  <!-- Navigation menu -->
</nav>
</header>

<main>
<article>
  <header>
    <h1>Article Title</h1>
    <time datetime="2024-01-15">January 15, 2024</time>
  </header>
  
  <section>
    <h2>Section Title</h2>
    <p>Content with proper heading hierarchy...</p>
  </section>
</article>
</main>

<footer>
<!-- Footer content -->
</footer>

// React Helmet for dynamic meta tags
import { Helmet } from 'react-helmet';

function ProductPage({ product }) {
return (
  <>
    <Helmet>
      <title>{\`\${product.name} - Our Store\`}</title>
      <meta name="description" content={product.description} />
      <meta property="og:title" content={product.name} />
      <meta property="og:image" content={product.image} />
      <link rel="canonical" href={\`https://store.com/products/\${product.slug}\`} />
    </Helmet>
    
    <article itemScope itemType="https://schema.org/Product">
      <h1 itemProp="name">{product.name}</h1>
      <img itemProp="image" src={product.image} alt={product.name} />
      <p itemProp="description">{product.description}</p>
      <span itemProp="price">${product.price}</span>
    </article>
  </>
);
}

// Next.js Head component
import Head from 'next/head';

export default function Page({ post }) {
return (
  <>
    <Head>
      <title>{\`\${post.title} | Blog\`}</title>
      <meta name="description" content={post.excerpt} />
    </Head>
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  </>
);
}`,
    performance_factors: [
      "Core Web Vitals (LCP, FID, CLS)",
      "Page load speed",
      "Mobile-first indexing", 
      "HTTPS requirement",
      "Structured data"
    ]
  }
},

// Bu nöqtədə 45 sual var. Qalan 55 sualı da əlavə etmək olar:
// - GraphQL (5 sual)
// - DevTools (5 sual) 
// - CSS Frameworks (5 sual)
// - Design Patterns (8 sual)
// - Error Handling (5 sual)
// - Code Quality (7 sual)
// - Browser Compatibility (5 sual)
// - Monitoring (5 sual)
// - Advanced JavaScript (10 sual)

// GraphQL (5 sual)
{
  id: 45,
  question: "GraphQL nədir və REST API-dən fərqi nədir?",
  category: "graphql",
  subcategory: "basics",
  difficulty: "medium",
  frequency: "medium", 
  answer: {
    explanation: "GraphQL API-lər üçün query language və runtime",
    advantages: [
      "Single endpoint",
      "Exact data fetching",
      "Strong type system",
      "Real-time subscriptions",
      "Introspection"
    ],
    rest_vs_graphql: {
      rest: "Multiple endpoints, over/under fetching, versioning issues",
      graphql: "Single endpoint, precise data, evolution without versioning"
    },
    code_example: `// GraphQL Schema
type User {
id: ID!
name: String!
email: String!
posts: [Post!]!
}

type Post {
id: ID!
title: String!
content: String!
author: User!
}

type Query {
user(id: ID!): User
users: [User!]!
post(id: ID!): Post
}

// GraphQL Query
query GetUser($userId: ID!) {
user(id: $userId) {
  id
  name
  email
  posts {
    id
    title
  }
}
}

// Apollo Client setup
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
uri: 'http://localhost:4000/graphql',
cache: new InMemoryCache()
});

// React component with GraphQL
const GET_USERS = gql\`
query GetUsers {
  users {
    id
    name
    email
  }
}
\`;

function UserList() {
const { loading, error, data } = useQuery(GET_USERS);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;

return (
  <ul>
    {data.users.map(user => (
      <li key={user.id}>
        {user.name} - {user.email}
      </li>
    ))}
  </ul>
);
}

// Mutation example
const CREATE_USER = gql\`
mutation CreateUser($input: UserInput!) {
  createUser(input: $input) {
    id
    name
    email
  }
}
\`;

function CreateUser() {
const [createUser, { loading, error }] = useMutation(CREATE_USER);

const handleSubmit = async (formData) => {
  try {
    await createUser({
      variables: { input: formData },
      refetchQueries: [{ query: GET_USERS }]
    });
  } catch (err) {
    console.error('Error creating user:', err);
  }
};
}`
  }
}

// Bu şəkildə davam edib 100 sual tamamlanır...
];

// Bütün sualları birləşdirmək
const complete100Questions = [
...top100Questions,     // İlk 15
...additionalQuestions, // Növbəti 18  
...finalQuestions       // Son hissə
];

console.log(`Completed: ${complete100Questions.length} questions`);