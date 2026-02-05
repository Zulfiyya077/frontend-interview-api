const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

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
  },

  // Missing questions 26-33
  {
    id: 26,
    question: "JavaScript-də Array methods hansılardır? map, filter, reduce fərqi?",
    category: "javascript",
    subcategory: "arrays",
    difficulty: "medium",
    frequency: "very_high",
    answer: {
      explanation: "Array methods functional programming üçün vacibdir",
      methods: {
        map: "Hər element üçün yeni array yaradır",
        filter: "Şərtə uyğun elementləri seçir",
        reduce: "Array-i tək dəyərə endirir",
        forEach: "Hər element üçün funksiya çağırır (return yoxdur)",
        find: "Şərtə uyğun ilk elementi tapır",
        some: "Ən azı biri şərtə uyğundursa true",
        every: "Hamısı şərtə uyğundursa true"
      },
      code_example: `const numbers = [1, 2, 3, 4, 5];

// map - transform
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter - select
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce - accumulate
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// Chaining
const result = numbers
  .filter(n => n > 2)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0); // 24`
    }
  },

  {
    id: 27,
    question: "React-da props və state fərqi nədir?",
    category: "react",
    subcategory: "fundamentals",
    difficulty: "easy",
    frequency: "very_high",
    answer: {
      explanation: "Props parent-dən gələn data, state component-in öz data-sıdır",
      comparison: {
        props: "Parent-dən child-a data pass edilir, immutable, read-only",
        state: "Component-in öz daxili data-sı, mutable, setState ilə dəyişir"
      },
      code_example: `// Props - parent-dən gəlir
function UserCard({ name, email }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

// State - component-də saxlanılır
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`
    }
  },

  {
    id: 28,
    question: "React-da key prop nədir və niyə vacibdir?",
    category: "react",
    subcategory: "rendering",
    difficulty: "medium",
    frequency: "very_high",
    answer: {
      explanation: "Key React-ə element-ləri identify etmək üçün istifadə olunur",
      why_important: [
        "Efficient re-rendering",
        "Component state-i saxlamaq",
        "List dəyişikliklərini track etmək"
      ],
      code_example: `// Without key - React can't track items
const items = users.map(user => (
  <UserCard user={user} /> // ❌ Warning: missing key
));

// With key - React tracks each item
const items = users.map(user => (
  <UserCard key={user.id} user={user} /> // ✅
));

// Key must be unique and stable
// ❌ Bad: index as key (if list can reorder)
{items.map((item, index) => (
  <Item key={index} data={item} />
))}

// ✅ Good: unique ID
{items.map(item => (
  <Item key={item.id} data={item} />
))}`
    }
  },

  {
    id: 29,
    question: "React-da conditional rendering necə edilir?",
    category: "react",
    subcategory: "rendering",
    difficulty: "easy",
    frequency: "high",
    answer: {
      explanation: "Conditional rendering şərt əsasında UI göstərməkdir",
      methods: [
        "if/else statements",
        "Ternary operator (? :)",
        "Logical AND (&&)",
        "Switch statements"
      ],
      code_example: `// if/else
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please log in.</h1>;
  }
}

// Ternary operator
function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;
}

// Logical AND
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

// Early return
function Component({ data }) {
  if (!data) return null;
  if (data.loading) return <Spinner />;
  return <Content data={data} />;
}`
    }
  },

  {
    id: 30,
    question: "React-da list rendering necə edilir?",
    category: "react",
    subcategory: "rendering",
    difficulty: "easy",
    frequency: "high",
    answer: {
      explanation: "Array-dən element-ləri render etmək üçün map istifadə edilir",
      code_example: `// Basic list rendering
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => (
  <li key={number}>{number}</li>
));

function NumberList() {
  return <ul>{listItems}</ul>;
}

// With data
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}

// Complex list
function ProductList({ products }) {
  return (
    <div>
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}`
    }
  },

  {
    id: 31,
    question: "React-da forms necə idarə edilir? Controlled vs Uncontrolled?",
    category: "react",
    subcategory: "forms",
    difficulty: "medium",
    frequency: "high",
    answer: {
      explanation: "Forms React-da controlled və ya uncontrolled ola bilər",
      controlled: "React state form input-larını idarə edir",
      uncontrolled: "DOM form input-larını idarə edir (ref istifadəsi)",
      code_example: `// Controlled component
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Uncontrolled component
function Form() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" placeholder="Name" />
      <input ref={emailRef} type="email" placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}`
    }
  },

  {
    id: 32,
    question: "React-da event handling necə edilir?",
    category: "react",
    subcategory: "events",
    difficulty: "easy",
    frequency: "very_high",
    answer: {
      explanation: "React-da events camelCase-də yazılır və synthetic events istifadə edir",
      code_example: `// Basic event handling
function Button() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return <button onClick={handleClick}>Click me</button>;
}

// With parameters
function TodoList({ todos }) {
  const handleDelete = (id) => {
    console.log('Delete todo:', id);
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

// Event object
function Input() {
  const handleChange = (e) => {
    console.log('Value:', e.target.value);
  };

  return <input onChange={handleChange} />;
}

// Multiple events
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // form logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onFocus={() => console.log('focused')} />
      <button type="submit">Submit</button>
    </form>
  );
}`
    }
  },

  {
    id: 33,
    question: "React-da component lifecycle nədir?",
    category: "react",
    subcategory: "lifecycle",
    difficulty: "medium",
    frequency: "high",
    answer: {
      explanation: "Component lifecycle mount, update, unmount mərhələlərindən ibarətdir",
      lifecycle_stages: {
        mount: "Component DOM-a əlavə olunur",
        update: "Props və ya state dəyişir",
        unmount: "Component DOM-dan silinir"
      },
      code_example: `// Functional component with useEffect
function Component() {
  useEffect(() => {
    // Component mount olduqda (componentDidMount)
    console.log('Component mounted');
    
    return () => {
      // Component unmount olduqda (componentWillUnmount)
      console.log('Component unmounted');
    };
  }, []);

  useEffect(() => {
    // Hər render-də (componentDidUpdate)
    console.log('Component updated');
  });

  useEffect(() => {
    // Yalnız dependency dəyişəndə
    console.log('Dependency changed');
  }, [dependency]);

  return <div>Component</div>;
}

// Class component lifecycle (legacy)
class Component extends React.Component {
  componentDidMount() {
    // Mount
  }

  componentDidUpdate(prevProps, prevState) {
    // Update
  }

  componentWillUnmount() {
    // Unmount
  }
}`
    }
  },

  // Questions 34-45 from finalQuestions
  {
    id: 34,
    question: "TypeScript nədir və JavaScript-dən fərqi nədir?",
    category: "typescript",
    subcategory: "basics",
    difficulty: "easy",
    frequency: "very_high",
    answer: {
      explanation: "TypeScript JavaScript-ə static type checking əlavə edən programming language",
      benefits: ["Type safety", "Better IDE support", "Early error detection", "Better refactoring", "Self-documenting code"]
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
      explanation: "Hər ikisi custom types yaratmaq üçün istifadə olunur, amma fərqli xüsusiyyətləri var"
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
      explanation: "React + TypeScript combination type safety və better developer experience verir"
    }
  },
  {
    id: 37,
    question: "Redux nədir və necə işləyir?",
    category: "state-management",
    subcategory: "redux",
    difficulty: "medium",
    frequency: "high",
    answer: {
      explanation: "Redux predictable state container for JavaScript apps"
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
      explanation: "Zustand kiçik, sürətli və scalable state management library"
    }
  },
  {
    id: 39,
    question: "Webpack nədir və necə konfiqurasiya edilir?",
    category: "build-tools",
    subcategory: "webpack",
    difficulty: "medium",
    frequency: "medium",
    answer: {
      explanation: "Webpack module bundler - JavaScript applications üçün static module bundler"
    }
  },
  {
    id: 40,
    question: "Vite nədir? Webpack-dən fərqi?",
    category: "build-tools",
    subcategory: "vite",
    difficulty: "medium",
    frequency: "high",
    answer: {
      explanation: "Vite next generation frontend build tool - daha sürətli development experience"
    }
  },
  {
    id: 41,
    question: "Git workflow nədir? Branch strategy?",
    category: "git",
    subcategory: "workflow",
    difficulty: "medium",
    frequency: "medium",
    answer: {
      explanation: "Git workflow development process-i idarə etmək üçün branch strategy-dir"
    }
  },
  {
    id: 42,
    question: "CI/CD nədir? Frontend-də necə istifadə edilir?",
    category: "deployment",
    subcategory: "cicd",
    difficulty: "medium",
    frequency: "medium",
    answer: {
      explanation: "CI/CD Continuous Integration və Continuous Deployment prosesləridir"
    }
  },
  {
    id: 43,
    question: "Accessibility (a11y) nədir? WCAG guidelines?",
    category: "accessibility",
    subcategory: "basics",
    difficulty: "medium",
    frequency: "medium",
    answer: {
      explanation: "Accessibility web saytların bütün istifadəçilər üçün əlçatan olmasıdır"
    }
  },
  {
    id: 44,
    question: "Frontend SEO best practices hansılardır?",
    category: "seo",
    subcategory: "optimization",
    difficulty: "medium",
    frequency: "medium",
    answer: {
      explanation: "Search Engine Optimization frontend performance və visibility artırır"
    }
  },
  {
    id: 45,
    question: "GraphQL nədir? REST-dən fərqi?",
    category: "api",
    subcategory: "graphql",
    difficulty: "medium",
    frequency: "medium",
    answer: {
      explanation: "GraphQL query language və runtime API üçün - REST alternativi"
    }
  },

  // Questions 46-100 from remaining55Questions
  { id: 46, question: "Tailwind CSS vs Bootstrap fərqi nədir?", category: "css", subcategory: "frameworks", difficulty: "easy", frequency: "high" },
  { id: 47, question: "CSS-in-JS nədir? Styled-components vs Emotion?", category: "css", subcategory: "css-in-js", difficulty: "medium", frequency: "medium" },
  { id: 48, question: "CSS Custom Properties (CSS Variables) necə istifadə edilir?", category: "css", subcategory: "variables", difficulty: "easy", frequency: "medium" },
  { id: 49, question: "CSS Grid vs Flexbox - hansını nə vaxt istifadə etməli?", category: "css", subcategory: "layout", difficulty: "medium", frequency: "very_high" },
  { id: 50, question: "CSS Animations vs Transitions fərqi nədir?", category: "css", subcategory: "animations", difficulty: "medium", frequency: "medium" },
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
  { id: 71, question: "Code splitting nədir və necə implement edilir?", category: "performance", subcategory: "optimization", difficulty: "medium", frequency: "high" },
  { id: 72, question: "Tree shaking nədir?", category: "performance", subcategory: "bundling", difficulty: "medium", frequency: "medium" },
  { id: 73, question: "Critical rendering path nədir?", category: "performance", subcategory: "rendering", difficulty: "hard", frequency: "medium" },
  { id: 74, question: "Browser caching strategies hansılardır?", category: "performance", subcategory: "caching", difficulty: "medium", frequency: "medium" },
  { id: 75, question: "Virtual DOM necə işləyir?", category: "performance", subcategory: "dom", difficulty: "medium", frequency: "high" },
  { id: 76, question: "Test-driven development (TDD) nədir?", category: "testing", subcategory: "methodology", difficulty: "medium", frequency: "medium" },
  { id: 77, question: "Mock, Stub, Spy fərqi nədir?", category: "testing", subcategory: "concepts", difficulty: "medium", frequency: "medium" },
  { id: 78, question: "Integration testing vs Unit testing?", category: "testing", subcategory: "types", difficulty: "easy", frequency: "medium" },
  { id: 79, question: "Cypress vs Selenium fərqi nədir?", category: "testing", subcategory: "e2e", difficulty: "medium", frequency: "medium" },
  { id: 80, question: "Test coverage nədir və necə ölçülür?", category: "testing", subcategory: "metrics", difficulty: "easy", frequency: "medium" },
  { id: 81, question: "Chrome DevTools-da performance debug necə edilir?", category: "devtools", subcategory: "performance", difficulty: "medium", frequency: "medium" },
  { id: 82, question: "Source Maps nədir və necə işləyir?", category: "devtools", subcategory: "debugging", difficulty: "medium", frequency: "medium" },
  { id: 83, question: "Network tab-da nəyə diqqət etməli?", category: "devtools", subcategory: "network", difficulty: "easy", frequency: "high" },
  { id: 84, question: "Console API-nin advanced features hansılardır?", category: "devtools", subcategory: "console", difficulty: "easy", frequency: "medium" },
  { id: 85, question: "React DevTools necə istifadə edilir?", category: "devtools", subcategory: "react", difficulty: "easy", frequency: "high" },
  { id: 86, question: "Singleton pattern JavaScript-də necə implement edilir?", category: "patterns", subcategory: "creational", difficulty: "medium", frequency: "medium" },
  { id: 87, question: "Observer pattern nədir? Event-driven programming?", category: "patterns", subcategory: "behavioral", difficulty: "medium", frequency: "medium" },
  { id: 88, question: "Module pattern vs Revealing module pattern?", category: "patterns", subcategory: "structural", difficulty: "medium", frequency: "medium" },
  { id: 89, question: "Factory pattern frontend-də necə istifadə edilir?", category: "patterns", subcategory: "creational", difficulty: "medium", frequency: "low" },
  { id: 90, question: "MVC, MVP, MVVM patterns fərqi nədir?", category: "patterns", subcategory: "architectural", difficulty: "medium", frequency: "medium" },
  { id: 91, question: "JavaScript-də error handling best practices?", category: "error-handling", subcategory: "javascript", difficulty: "medium", frequency: "high" },
  { id: 92, question: "Global error handling necə implement edilir?", category: "error-handling", subcategory: "global", difficulty: "medium", frequency: "medium" },
  { id: 93, question: "React-da error boundaries vs try-catch?", category: "error-handling", subcategory: "react", difficulty: "medium", frequency: "medium" },
  { id: 94, question: "API error handling strategies hansılardır?", category: "error-handling", subcategory: "api", difficulty: "medium", frequency: "high" },
  { id: 95, question: "Error logging və monitoring necə edilir?", category: "error-handling", subcategory: "monitoring", difficulty: "medium", frequency: "medium" },
  { id: 96, question: "Polyfills və Transpilation nədir?", category: "compatibility", subcategory: "tools", difficulty: "medium", frequency: "medium" },
  { id: 97, question: "Cross-browser testing necə edilir?", category: "compatibility", subcategory: "testing", difficulty: "medium", frequency: "medium" },
  { id: 98, question: "Progressive enhancement vs Graceful degradation?", category: "compatibility", subcategory: "strategy", difficulty: "medium", frequency: "medium" },
  { id: 99, question: "Feature detection vs Browser detection?", category: "compatibility", subcategory: "detection", difficulty: "medium", frequency: "medium" },
  { id: 100, question: "Modernizr library nədir və necə istifadə edilir?", category: "compatibility", subcategory: "tools", difficulty: "medium", frequency: "low" }
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

// Alternative endpoint for frontend compatibility: /api/questions/category/:category
app.get('/api/questions/category/:category', (req, res) => {
  console.log('📥 Request received:', req.method, req.path, req.params);
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

  console.log(`✅ Found ${categoryQuestions.length} questions for category: ${category}`);

  // Return questions array directly for frontend
  res.json({
    category,
    total: categoryQuestions.length,
    questions: categoryQuestions
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
// In-memory user storage (in production, use a database)
const users = [
  {
    id: 1,
    username: 'zulfiyya',
    email: 'mammadlizulfiyya@gmail.com',
    password: 'zulfiyya07',
    createdAt: new Date().toISOString()
  }
];

// Authentication Routes
// POST /api/auth/register
app.post('/api/auth/register', (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validation
    if (!username || !email || !password) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'Username, email, and password are required'
      });
    }

    // Check if user already exists
    const existingUser = users.find(u => u.email === email || u.username === username);
    if (existingUser) {
      return res.status(409).json({
        error: 'User already exists',
        message: 'A user with this email or username already exists'
      });
    }

    // Create new user (in production, hash the password!)
    const newUser = {
      id: users.length + 1,
      username,
      email,
      password, // In production, hash this with bcrypt!
      createdAt: new Date().toISOString()
    };

    users.push(newUser);

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser;

    res.status(201).json({
      message: 'User registered successfully',
      user: userWithoutPassword
    });
  } catch (error) {
    res.status(500).json({
      error: 'Registration failed',
      message: error.message
    });
  }
});

// POST /api/auth/login
app.post('/api/auth/login', (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        error: 'Validation error',
        message: 'Email and password are required'
      });
    }

    // Normalize email (lowercase) for comparison
    const normalizedEmail = email.toLowerCase().trim();
    const normalizedPassword = password.trim();

    // Find user (case-insensitive email comparison)
    const user = users.find(u => 
      u.email.toLowerCase() === normalizedEmail && 
      u.password === normalizedPassword
    );

    if (!user) {
      console.log('Login failed:', { 
        receivedEmail: normalizedEmail, 
        receivedPassword: normalizedPassword,
        availableUsers: users.map(u => ({ id: u.id, email: u.email }))
      });
      return res.status(401).json({
        error: 'Authentication failed',
        message: 'Invalid email or password'
      });
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      message: 'Login successful',
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      error: 'Login failed',
      message: error.message
    });
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    message: err.message
  });
});

// 404 handler - must be last
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.method} ${req.path} not found`,
    available_endpoints: [
      'GET /api/questions',
      'GET /api/questions/random',
      'GET /api/questions/category/:category',
      'GET /api/categories/:category',
      'GET /api/filters',
      'POST /api/study-plan',
      'POST /api/interview-simulation',
      'POST /api/progress',
      'GET /api/stats',
      'GET /api/search',
      'POST /api/auth/register',
      'POST /api/auth/login'
    ]
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Frontend Interview API running on port ${PORT}`);
  console.log(`📚 Total questions available: ${top100Questions.length}`);
  console.log(`🌐 API Documentation: http://localhost:${PORT}`);
  console.log(`🎯 Random question: http://localhost:${PORT}/api/questions/random`);
  console.log(`✅ Auth endpoints: POST /api/auth/register, POST /api/auth/login`);
});
