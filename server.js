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
  },
  {
    id: 6,
    question: "CSS-də position: absolute və position: relative arasındakı fərq nədir?",
    category: "css",
    difficulty: "easy",
    options: [
      "relative öz yerindən, absolute yaxın positioned parent-dən hesablanır",
      "Heç bir fərq yoxdur",
      "absolute daha sürətlidir",
      "relative yalnız div-lər üçündür"
    ],
    correctAnswer: 0,
    explanation: "relative element öz normal pozisiyasından, absolute isə yaxın positioned parent-dən offset alır"
  },
  {
    id: 7,
    question: "React-də props və state arasındakı əsas fərq nədir?",
    category: "react",
    difficulty: "easy",
    options: [
      "props parent-dən gəlir və immutable, state component daxilində mutable",
      "Heç bir fərq yoxdur",
      "props yalnız class component-lərdə işləyir",
      "state yalnız functional component-lərdə işləyir"
    ],
    correctAnswer: 0,
    explanation: "props parent-dən ötürülür və dəyişilə bilməz, state component daxilində yaradılır və dəyişilə bilər"
  },
  {
    id: 8,
    question: "HTML-də <div> və <span> arasındakı əsas fərq nədir?",
    category: "html",
    difficulty: "easy",
    options: [
      "div block-level, span inline element",
      "span block-level, div inline element",
      "Heç bir fərq yoxdur",
      "div yalnız text üçündür"
    ],
    correctAnswer: 0,
    explanation: "div block-level element (yeni sətirlə başlayır), span inline element (eyni sətirdə qalır)"
  },
  {
    id: 9,
    question: "CSS Flexbox-da justify-content nəyi tənzimləyir?",
    category: "css",
    difficulty: "easy",
    options: [
      "Main axis boyunca alignment",
      "Cross axis boyunca alignment",
      "Font ölçüsünü",
      "Border-i"
    ],
    correctAnswer: 0,
    explanation: "justify-content main axis (horizontal) boyunca elementlərin yerləşməsini idarə edir"
  },
  {
    id: 10,
    question: "JavaScript-də array-in sonuna element əlavə etmək üçün hansı metod istifadə olunur?",
    category: "javascript",
    difficulty: "easy",
    options: [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    correctAnswer: 0,
    explanation: "push() array-in sonuna element əlavə edir, pop() sondan silir"
  },
  {
    id: 11,
    question: "React-də useEffect hook-u nə üçün istifadə olunur?",
    category: "react",
    difficulty: "easy",
    options: [
      "Side effect-lər (API, subscription) üçün",
      "State yaratmaq üçün",
      "Props göndərmək üçün",
      "CSS yazmaq üçün"
    ],
    correctAnswer: 0,
    explanation: "useEffect side effect-ləri (API çağırışları, subscription, DOM manipulyasiya) idarə etmək üçün"
  },
  {
    id: 12,
    question: "CSS-də display: none və visibility: hidden arasındakı fərq nədir?",
    category: "css",
    difficulty: "easy",
    options: [
      "display: none yer tutmur, visibility: hidden yer tutur",
      "visibility: hidden yer tutmur, display: none yer tutur",
      "Heç bir fərq yoxdur",
      "display: none daha sürətlidir"
    ],
    correctAnswer: 0,
    explanation: "display: none elementi DOM-dan gizlədir və yer tutmur, visibility: hidden gizlədir amma yer tutur"
  },
  {
    id: 13,
    question: "JavaScript-də null və undefined arasındakı fərq nədir?",
    category: "javascript",
    difficulty: "easy",
    options: [
      "undefined təyin olunmayıb, null qəsdən boş təyin olunub",
      "Heç bir fərq yoxdur",
      "null daha yaxşıdır",
      "undefined yalnız function-larda işləyir"
    ],
    correctAnswer: 0,
    explanation: "undefined dəyişən təyin olunmadıqda, null isə developer tərəfindən qəsdən boş dəyər təyin edildikdə"
  },
  {
    id: 14,
    question: "HTML-də form submit etmək üçün hansı element istifadə olunur?",
    category: "html",
    difficulty: "easy",
    options: [
      "<button type='submit'> və ya <input type='submit'>",
      "<div onclick='submit()'>",
      "<span>Submit</span>",
      "<a href='submit'>Submit</a>"
    ],
    correctAnswer: 0,
    explanation: "Form submit üçün button type='submit' və ya input type='submit' istifadə olunur"
  },
  {
    id: 15,
    question: "CSS-də rem və em arasındakı fərq nədir?",
    category: "css",
    difficulty: "easy",
    options: [
      "rem root element-dən, em parent element-dən hesablanır",
      "em root element-dən, rem parent element-dən hesablanır",
      "Heç bir fərq yoxdur",
      "rem yalnız margin üçündür"
    ],
    correctAnswer: 0,
    explanation: "rem (root em) html element font-size-dan, em isə parent element-in font-size-dan hesablanır"
  },
  {
    id: 16,
    question: "JavaScript-də arrow function və regular function arasındakı əsas fərq nədir?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "arrow function öz 'this' context-i yoxdur",
      "Heç bir fərq yoxdur",
      "arrow function daha yavaşdır",
      "regular function yalnız class-larda işləyir"
    ],
    correctAnswer: 0,
    explanation: "arrow function öz 'this' context-i olmur, parent scope-un 'this'-ini istifadə edir"
  },
  {
    id: 17,
    question: "React-də key prop nə üçün vacibdir?",
    category: "react",
    difficulty: "medium",
    options: [
      "List render edərkən elementləri unikal identifikasiya etmək üçün",
      "Styling üçün",
      "Event handling üçün",
      "Props ötürmək üçün"
    ],
    correctAnswer: 0,
    explanation: "key prop React-ə list-də hansı elementlərin dəyişdiyini müəyyən etməyə kömək edir"
  },
  {
    id: 18,
    question: "CSS Grid və Flexbox arasındakı əsas fərq nədir?",
    category: "css",
    difficulty: "medium",
    options: [
      "Grid 2D (sətir və sütun), Flexbox 1D (tək ox)",
      "Flexbox 2D, Grid 1D",
      "Heç bir fərq yoxdur",
      "Grid yalnız table üçündür"
    ],
    correctAnswer: 0,
    explanation: "Grid 2D layout (sətir və sütun), Flexbox 1D layout (yalnız bir ox üzrə) üçün nəzərdə tutulub"
  },
  {
    id: 19,
    question: "JavaScript-də Promise nədir?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "Asynchronous əməliyyatın nəticəsini təmsil edən obyekt",
      "Synchronous function",
      "Yalnız error handling üçün",
      "Array metodu"
    ],
    correctAnswer: 0,
    explanation: "Promise async əməliyyatın gələcək nəticəsini təmsil edir (pending, fulfilled, rejected)"
  },
  {
    id: 20,
    question: "HTML-də semantic və non-semantic elementlər arasındakı fərq nədir?",
    category: "html",
    difficulty: "medium",
    options: [
      "semantic məna daşıyır (<article>), non-semantic daşımır (<div>)",
      "Heç bir fərq yoxdur",
      "semantic daha sürətlidir",
      "non-semantic yeni brauzerdə işləmir"
    ],
    correctAnswer: 0,
    explanation: "semantic elementlər məzmunun mənasını ifadə edir, non-semantic yalnız konteyner rolunu oynayır"
  },
  {
    id: 21,
    question: "CSS-də pseudo-class (:hover) və pseudo-element (::before) fərqi nədir?",
    category: "css",
    difficulty: "medium",
    options: [
      "pseudo-class state, pseudo-element content hissəsi",
      "Heç bir fərq yoxdur",
      "pseudo-element yalnız div-lərdə işləyir",
      "pseudo-class köhnə texnologiyadır"
    ],
    correctAnswer: 0,
    explanation: "pseudo-class elementin state-ini (:hover, :active), pseudo-element isə elementin xüsusi hissəsini (::before, ::after) hədəfləyir"
  },
  {
    id: 22,
    question: "React-də useCallback hook-u nə üçün istifadə olunur?",
    category: "react",
    difficulty: "medium",
    options: [
      "Function-u memoize etmək və lazımsız re-render-in qarşısını almaq",
      "State saxlamaq üçün",
      "API çağırmaq üçün",
      "Style əlavə etmək üçün"
    ],
    correctAnswer: 0,
    explanation: "useCallback function-u memoize edir, dependency dəyişmədikcə eyni reference qaytarır"
  },
  {
    id: 23,
    question: "JavaScript-də closure nədir?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "Function-un öz scope-u və kənar scope-a access-i",
      "Array metodu",
      "Loop növü",
      "Error handling"
    ],
    correctAnswer: 0,
    explanation: "closure function-un yaradıldığı scope-dakı dəyişənlərə access imkanıdır"
  },
  {
    id: 24,
    question: "CSS-də specificity (spesifiklik) nəyi müəyyən edir?",
    category: "css",
    difficulty: "medium",
    options: [
      "Hansı CSS qaydalarının tətbiq olunacağını",
      "Animasiya sürətini",
      "Responsive dizaynı",
      "Font ölçüsünü"
    ],
    correctAnswer: 0,
    explanation: "specificity CSS selector-lərin prioritetini müəyyən edir: inline > id > class > element"
  },
  {
    id: 25,
    question: "React-də Virtual DOM nədir və nə üçün istifadə olunur?",
    category: "react",
    difficulty: "medium",
    options: [
      "Real DOM-un yüngül kopyası, performans üçün",
      "Yeni browser texnologiyası",
      "CSS framework",
      "Database növü"
    ],
    correctAnswer: 0,
    explanation: "Virtual DOM real DOM-un JavaScript təsviridir, dəyişiklikləri effektiv müqayisə edib real DOM-u minimal yeniləyir"
  },
  {
    id: 26,
    question: "JavaScript-də event bubbling və event capturing nədir?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "bubbling child-dan parent-a, capturing parent-dan child-a event yayılması",
      "Heç bir fərq yoxdur",
      "bubbling daha sürətlidir",
      "capturing köhnə texnologiyadır"
    ],
    correctAnswer: 0,
    explanation: "event bubbling child elementdən parent-a, capturing əksinə parent-dan child-a doğru event propagation-dır"
  },
  {
    id: 27,
    question: "React-də useMemo hook-u nə üçün istifadə olunur?",
    category: "react",
    difficulty: "medium",
    options: [
      "Hesablama nəticəsini cache edib performansı artırmaq üçün",
      "State yaratmaq üçün",
      "Component render etmək üçün",
      "Event handle etmək üçün"
    ],
    correctAnswer: 0,
    explanation: "useMemo bahalı hesablamaların nəticəsini memoize edir, dependency dəyişməyənə qədər əvvəlki nəticəni qaytarır"
  },
  {
    id: 28,
    question: "CSS-də z-index nə üçün istifadə olunur?",
    category: "css",
    difficulty: "medium",
    options: [
      "Elementlərin üst-üstə düşmə sırasını təyin etmək",
      "Font ölçüsünü dəyişmək",
      "Border əlavə etmək",
      "Background rəngini təyin etmək"
    ],
    correctAnswer: 0,
    explanation: "z-index positioned elementlərin z-axis (dərinlik) üzrə sırasını müəyyən edir"
  },
  {
    id: 29,
    question: "JavaScript-də async/await nədir?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "Promise-lərlə işləməyi asanlaşdıran syntax",
      "Loop növü",
      "Array metodu",
      "Variable declaration"
    ],
    correctAnswer: 0,
    explanation: "async/await Promise-lərlə işləməyi synchronous kod kimi yazmağa imkan verir"
  },
  {
    id: 30,
    question: "HTML5-də localStorage və sessionStorage arasındakı fərq nədir?",
    category: "html",
    difficulty: "medium",
    options: [
      "localStorage daimi, sessionStorage tab bağlananda silinir",
      "sessionStorage daimi, localStorage tab bağlananda silinir",
      "Heç bir fərq yoxdur",
      "localStorage yalnız string saxlayır"
    ],
    correctAnswer: 0,
    explanation: "localStorage məlumatı daimi saxlayır, sessionStorage yalnız tab/browser bağlanana qədər"
  },
  {
    id: 31,
    question: "React-də Context API nə üçün istifadə olunur?",
    category: "react",
    difficulty: "medium",
    options: [
      "Global state-i prop drilling olmadan paylaşmaq",
      "API çağırmaq üçün",
      "Routing üçün",
      "Animation üçün"
    ],
    correctAnswer: 0,
    explanation: "Context API data-nı component tree-də prop drilling etmədən hər səviyyəyə ötürməyə imkan verir"
  },
  {
    id: 32,
    question: "CSS-də transition və animation arasındakı fərq nədir?",
    category: "css",
    difficulty: "medium",
    options: [
      "transition state dəyişikliyində, animation keyframe-lərlə idarə olunur",
      "Heç bir fərq yoxdur",
      "animation daha sadədir",
      "transition yalnız color üçündür"
    ],
    correctAnswer: 0,
    explanation: "transition A state-dən B state-ə keçid, animation isə keyframe-lərlə kompleks hərəkətlər yaradır"
  },
  {
    id: 33,
    question: "JavaScript-də map() və forEach() arasındakı əsas fərq nədir?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "map() yeni array qaytarır, forEach() undefined qaytarır",
      "forEach() yeni array qaytarır",
      "Heç bir fərq yoxdur",
      "map() daha yavaşdır"
    ],
    correctAnswer: 0,
    explanation: "map() transform edilmiş yeni array qaytarır, forEach() yalnız iteration üçündür və undefined qaytarır"
  },
  {
    id: 34,
    question: "React-də useRef hook-u nə üçün istifadə olunur?",
    category: "react",
    difficulty: "medium",
    options: [
      "DOM elementlərinə access və re-render olmadan dəyər saxlamaq",
      "State saxlamaq üçün",
      "Props göndərmək üçün",
      "Component yaratmaq üçün"
    ],
    correctAnswer: 0,
    explanation: "useRef DOM elementlərinə birbaşa access və ya re-render trigger etmədən dəyər saxlamaq üçün"
  },
  {
    id: 35,
    question: "CSS-də mobile-first və desktop-first approach fərqi nədir?",
    category: "css",
    difficulty: "medium",
    options: [
      "mobile-first kiçik ekrandan başlayır, desktop-first böyükdən",
      "Heç bir fərq yoxdur",
      "desktop-first daha yaxşıdır",
      "mobile-first köhnə yanaşmadır"
    ],
    correctAnswer: 0,
    explanation: "mobile-first kiçik ekran üçün base style, sonra min-width; desktop-first böyük ekrandan başlayıb max-width istifadə edir"
  },
  {
    id: 36,
    question: "React-də useEffect hook-u nə üçün istifadə olunur?",
    category: "react",
    difficulty: "medium",
    options: [
      "Component lifecycle içində side-effectləri idarə etmək üçün",
      "State yaratmaq üçün",
      "Yeni component yaratmaq üçün",
      "CSS yazmaq üçün"
    ],
    correctAnswer: 0,
    explanation: "useEffect data fetch, event listener, subscription kimi side-effectləri component lifecycle-da idarə etmək üçündür"
},
{
    id: 37,
    question: "Next.js-də getStaticProps nə vaxt çağırılır?",
    category: "next.js",
    difficulty: "medium",
    options: [
      "Build vaxtında, SSG (Static Site Generation) üçün",
      "Hər request zamanı",
      "Client tərəfində",
      "Component mount olduqda"
    ],
    correctAnswer: 0,
    explanation: "getStaticProps build zamanı çalışır və səhifənin statik olaraq generate edilməsini təmin edir"
},
{
    id: 38,
    question: "Next.js-də getServerSideProps nə vaxt icra olunur?",
    category: "next.js",
    difficulty: "medium",
    options: [
      "Hər request zamanı server tərəfində",
      "Build zamanı",
      "Client tərəfində",
      "Yalnız ilk request zamanı"
    ],
    correctAnswer: 0,
    explanation: "getServerSideProps hər request zamanı server tərəfində işləyir və SSR üçün data fetch edir"
},
{
    id: 39,
    question: "React-də controlled və uncontrolled component fərqi nədir?",
    category: "react",
    difficulty: "medium",
    options: [
      "Controlled value state ilə idarə olunur, uncontrolled isə DOM tərəfindən",
      "Heç bir fərq yoxdur",
      "Uncontrolled daha sürətlidir",
      "Controlled yalnız form üçün istifadə olunur"
    ],
    correctAnswer: 0,
    explanation: "Controlled komponentlərin value və onChange state ilə idarə olunur, uncontrolled isə ref ilə DOM dəyərinə baxır"
},
{
    id: 40,
    question: "Next.js-də API Routes nə üçündür?",
    category: "next.js",
    difficulty: "medium",
    options: [
      "Server-side API endpoint-ləri yaratmaq üçün",
      "CSS faylları saxlamaq üçün",
      "Routing-i idarə etmək üçün",
      "Componentləri render etmək üçün"
    ],
    correctAnswer: 0,
    explanation: "API Routes Next.js daxilində serverless API endpoint-ləri yaratmağa imkan verir"
},
{
    id: 41,
    question: "React-də key prop-un əsas məqsədi nədir?",
    category: "react",
    difficulty: "medium",
    options: [
      "List renderində elementləri unikal identifikasiya etmək",
      "CSS class əlavə etmək",
      "Event listener əlavə etmək",
      "State yaratmaq"
    ],
    correctAnswer: 0,
    explanation: "Key prop React-ə list elementlərinin hansı dəyişdiyini tanımağa və optimal render etməyə kömək edir"
},
{
    id: 42,
    question: "Next.js-də dynamic routing necə edilir?",
    category: "next.js",
    difficulty: "medium",
    options: [
      "pages/[param].js fayl strukturu ilə",
      "useRouter hook-u ilə",
      "CSS modul faylı ilə",
      "Link componentinə props verməklə"
    ],
    correctAnswer: 0,
    explanation: "Dynamic routing üçün pages qovluğunda [param].js kimi fayl adı istifadə olunur"
},
{
    id: 43,
    question: "React-də useCallback hook-u nə üçün istifadə olunur?",
    category: "react",
    difficulty: "medium",
    options: [
      "Function-ları memoize edərək lazımsız re-renderin qarşısını almaq üçün",
      "State yaratmaq üçün",
      "DOM elementlərini idarə etmək üçün",
      "Event handle etmək üçün"
    ],
    correctAnswer: 0,
    explanation: "useCallback dependency dəyişmədikcə eyni function referansını saxlayır və performansı artırır"
},
{
    id: 44,
    question: "Next.js-də Image component-in əsas üstünlüyü nədir?",
    category: "next.js",
    difficulty: "medium",
    options: [
      "Automatic image optimization və responsive loading",
      "Yalnız PNG dəstəyi",
      "CSS ilə image ölçüsü dəyişmək",
      "Serverless funksiyaları çağırmaq"
    ],
    correctAnswer: 0,
    explanation: "Next.js Image component şəkilləri avtomatik optimizasiya edir və responsive loading təmin edir"
},
{
    id: 45,
    question: "React-də state-ləri dərin nested componentlərə ötürməmək üçün hansı pattern istifadə olunur?",
    category: "react",
    difficulty: "medium",
    options: [
      "Context API və ya state management library (Redux, Zustand)",
      "Props drilling",
      "CSS Modules",
      "Fragments"
    ],
    correctAnswer: 0,
    explanation: "Context API və ya Redux kimi state management alətləri prop drilling olmadan global state paylaşmağa imkan verir"
},
  {
    id: 46,
    question: "Next.js-də getStaticPaths nə üçün istifadə olunur?",
    category: "next.js",
    difficulty: "medium",
    options: [
      "Dynamic routing üçün build vaxtında statik səhifə yollarını təyin etmək",
      "API endpoint yaratmaq üçün",
      "Client-də routing etmək üçün",
      "CSS fayllarını yükləmək üçün"
    ],
    correctAnswer: 0,
    explanation: "getStaticPaths build zamanı dinamik route-lar üçün hansı path-lərin generate ediləcəyini müəyyən edir"
},
{
    id: 47,
    question: "React-də StrictMode nə üçün istifadə olunur?",
    category: "react",
    difficulty: "medium",
    options: [
      "Potensial problemləri aşkar etmək və development zamanı xəbərdarlıq etmək üçün",
      "Production build-i sürətləndirmək üçün",
      "CSS-in optimizasiyası üçün",
      "Component-ləri cache-ləmək üçün"
    ],
    correctAnswer: 0,
    explanation: "StrictMode development zamanı potensial bug və köhnəlmiş API istifadəsini aşkar etməyə kömək edir"
},
{
    id: 48,
    question: "Next.js-də middleware nə vaxt işə düşür?",
    category: "next.js",
    difficulty: "medium",
    options: [
      "Request gələn kimi, page və ya API route render olunmazdan əvvəl",
      "Client tərəfdə render bitəndə",
      "Build vaxtında",
      "Yalnız getServerSideProps icra olunanda"
    ],
    correctAnswer: 0,
    explanation: "Middleware hər request gələndə server tərəfində, səhifə və ya API cavabı göndərilməzdən əvvəl icra olunur"
},
{
    id: 49,
    question: "React-də HOC (Higher Order Component) nədir?",
    category: "react",
    difficulty: "medium",
    options: [
      "Başqa component-i qəbul edib genişləndirən və ya dəyişdirən funksiya",
      "CSS üçün xüsusi selector",
      "Yeni state hook-u",
      "Event handler metodu"
    ],
    correctAnswer: 0,
    explanation: "HOC bir component-i argument kimi alıb ona əlavə qabiliyyətlər verən funksiyadır"
},
{
    id: 50,
    question: "Next.js-də ISR (Incremental Static Regeneration) nədir?",
    category: "next.js",
    difficulty: "medium",
    options: [
      "Statik səhifələri müəyyən intervallarla serverdə yeniləmək imkanı",
      "Client-də caching mexanizmi",
      "CSR ilə eyni anlayış",
      "Static faylları zip-ləmək prosesi"
    ],
    correctAnswer: 0,
    explanation: "ISR statik səhifələri build-dən sonra müəyyən vaxt intervalı ilə yeniləməyə imkan verir"
},
{
    id: 51,
    question: "React-də Portals nə üçündür?",
    category: "react",
    difficulty: "medium",
    options: [
      "Component-i DOM ağacının başqa hissəsində render etmək",
      "Yeni route açmaq",
      "Redux ilə state idarə etmək",
      "API call etmək"
    ],
    correctAnswer: 0,
    explanation: "Portals UI elementini parent hierarchy-dən kənarda, başqa DOM node-da render etməyə imkan verir"
},
{
    id: 52,
    question: "Next.js-də Link component-in əsas funksiyası nədir?",
    category: "next.js",
    difficulty: "medium",
    options: [
      "Client-side navigation təmin etmək",
      "Yeni API route yaratmaq",
      "Server-side rendering idarə etmək",
      "CSS faylı import etmək"
    ],
    correctAnswer: 0,
    explanation: "Link component səhifələr arasında client-side navigation üçün istifadə olunur və sürətli keçid təmin edir"
},
{
    id: 53,
    question: "React-də Suspense nə üçün istifadə olunur?",
    category: "react",
    difficulty: "medium",
    options: [
      "Asinxron component-lərin yüklənməsi zamanı fallback UI göstərmək üçün",
      "CSS modul idarə etmək üçün",
      "Event listener əlavə etmək üçün",
      "State yaratmaq üçün"
    ],
    correctAnswer: 0,
    explanation: "Suspense lazy loading zamanı component yüklənənə qədər fallback UI göstərməyə imkan verir"
},
{
    id: 54,
    question: "Next.js-də static faylları harada saxlamaq lazımdır?",
    category: "next.js",
    difficulty: "medium",
    options: [
      "public qovluğunda",
      "pages qovluğunda",
      "components qovluğunda",
      "api qovluğunda"
    ],
    correctAnswer: 0,
    explanation: "Static asset-lər (şəkil, favicon və s.) public qovluğunda saxlanılır və kök URL vasitəsilə əlçatan olur"
},
{
    id: 55,
    question: "React-də state-lərin idarəsi üçün Redux-dan başqa hansı populyar alternativ mövcuddur?",
    category: "react",
    difficulty: "medium",
    options: [
      "Zustand, Recoil və Context API",
      "Axios və Fetch",
      "Bootstrap və Tailwind",
      "Webpack və Babel"
    ],
    correctAnswer: 0,
    explanation: "Redux-a alternativ olaraq Zustand, Recoil və Context API kimi state management həlləri mövcuddur"
},
  {
    id: 56,
    question: "Next.js-də getServerSideProps nə zaman istifadə olunur?",
    category: "next.js",
    difficulty: "medium",
    options: [
      "Hər request zamanı serverdə data fetch etmək üçün",
      "Build zamanı data fetch etmək üçün",
      "Client-də data fetch etmək üçün",
      "Static asset-ləri yükləmək üçün"
    ],
    correctAnswer: 0,
    explanation: "getServerSideProps hər gələn request üçün serverdə işləyir və səhifəyə runtime-da data ötürür"
},
{
    id: 57,
    question: "React-də useCallback hook-u nə üçün istifadə olunur?",
    category: "react",
    difficulty: "medium",
    options: [
      "Funksiya referansını dependency dəyişmədikcə eyni saxlamaq üçün",
      "Yeni state yaratmaq üçün",
      "Component render etmək üçün",
      "DOM elementlərinə birbaşa girmək üçün"
    ],
    correctAnswer: 0,
    explanation: "useCallback dependency array dəyişməyənə qədər funksiyanın eyni referansını saxlayaraq unnecessary render-ləri azaldır"
},
{
    id: 58,
    question: "Next.js-də API routes hansı qovluqda yaradılır?",
    category: "next.js",
    difficulty: "medium",
    options: [
      "pages/api qovluğunda",
      "public/api qovluğunda",
      "components/api qovluğunda",
      "utils/api qovluğunda"
    ],
    correctAnswer: 0,
    explanation: "Next.js API routes pages/api qovluğunda yaradılır və serverless function kimi işləyir"
},
{
    id: 59,
    question: "React-də Controlled və Uncontrolled component arasındakı əsas fərq nədir?",
    category: "react",
    difficulty: "medium",
    options: [
      "Controlled component-lərdə value state tərəfindən idarə olunur, Uncontrolled-da DOM tərəfindən",
      "Uncontrolled component-lər daha sürətlidir",
      "Controlled component-lər yalnız class component-lərdə işləyir",
      "Heç bir fərq yoxdur"
    ],
    correctAnswer: 0,
    explanation: "Controlled component-lərdə input value React state ilə idarə olunur, Uncontrolled-da isə DOM-un öz value-sundan istifadə edilir"
},
{
    id: 60,
    question: "Next.js-də Image component-in üstünlüyü nədir?",
    category: "next.js",
    difficulty: "medium",
    options: [
      "Automatic image optimization və lazy loading",
      "Yalnız CSS effektləri üçün istifadə olunur",
      "Şəkilləri zip-ləmək üçün",
      "Background image əlavə etmək üçün"
    ],
    correctAnswer: 0,
    explanation: "Image component şəkilləri optimallaşdırır, responsive ölçülər və lazy loading təmin edir"
},
{
    id: 61,
    question: "React-də Error Boundary nə üçündür?",
    category: "react",
    difficulty: "medium",
    options: [
      "Component ağacında JavaScript xətalarını tutmaq və fallback UI göstərmək üçün",
      "Server error-larını loglamaq üçün",
      "API cavablarını idarə etmək üçün",
      "CSS xətalarını aradan qaldırmaq üçün"
    ],
    correctAnswer: 0,
    explanation: "Error Boundary render mərhələsində baş verən JavaScript xətalarını tutaraq fallback UI göstərir"
},
{
    id: 62,
    question: "Next.js-də getInitialProps ilə getServerSideProps arasındakı fərq nədir?",
    category: "next.js",
    difficulty: "medium",
    options: [
      "getServerSideProps yalnız serverdə işləyir və daha müasir yanaşmadır, getInitialProps həm client, həm serverdə işləyə bilər",
      "Heç bir fərq yoxdur",
      "getInitialProps daha sürətlidir",
      "getServerSideProps köhnə texnologiyadır"
    ],
    correctAnswer: 0,
    explanation: "getServerSideProps yalnız serverdə runtime-da data fetch edir, getInitialProps isə həm client, həm serverdə işləyə bilər və köhnəlmiş yanaşma sayılır"
},
{
    id: 63,
    question: "React-də Fragment (<></>) nə üçün istifadə olunur?",
    category: "react",
    difficulty: "easy",
    options: [
      "DOM-a əlavə wrapper element əlavə etmədən birdən çox child qaytarmaq",
      "Lazy loading etmək",
      "CSS import etmək",
      "API call etmək"
    ],
    correctAnswer: 0,
    explanation: "Fragment birdən çox element qaytarmağa imkan verir, əlavə div və ya wrapper yaratmadan"
},
{
    id: 64,
    question: "Next.js-də dynamic import nə üçündür?",
    category: "next.js",
    difficulty: "medium",
    options: [
      "Kod split və lazımlı komponentləri asinxron yükləmək",
      "Static faylları yükləmək",
      "Serverdə data saxlanmaq",
      "Image optimizasiya etmək"
    ],
    correctAnswer: 0,
    explanation: "Dynamic import lazımlı komponentləri yalnız istifadə olunduğu zaman yükləyir və bundle ölçüsünü azaldır"
},
{
    id: 65,
    question: "React-də key prop-u nə üçün vacibdir?",
    category: "react",
    difficulty: "medium",
    options: [
      "List item-lərin unikallığını təmin edib render performansını artırmaq üçün",
      "CSS selector yaratmaq üçün",
      "Event listener əlavə etmək üçün",
      "API call etmək üçün"
    ],
    correctAnswer: 0,
    explanation: "key prop React-ə hansı elementin dəyişdiyini, əlavə olunduğunu və ya silindiyini anlamağa kömək edir, bu da diffing prosesini optimallaşdırır"
},
  {
    id: 66,
    question: "JavaScript-də debouncing nədir?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "Bir funksiyanın çağırılmasını gecikdirib yalnız sonuncu trigger-dən sonra işə salmaq",
      "Funksiyanı dərhal bir neçə dəfə işlətmək",
      "Promise-ləri zəncirləmək",
      "Array-ləri map etmək"
    ],
    correctAnswer: 0,
    explanation: "Debouncing bir funksiyanın çox tez-tez çağırılmasının qarşısını alır və yalnız müəyyən vaxt keçdikdən sonra sonuncu çağırışı icra edir."
},
{
    id: 67,
    question: "React-də virtual DOM nə üçün istifadə olunur?",
    category: "react",
    difficulty: "medium",
    options: [
      "Real DOM-dakı dəyişiklikləri minimum diff-lə hesablamaq üçün",
      "CSS animasiyalarını idarə etmək üçün",
      "Database ilə əlaqə qurmaq üçün",
      "Backend API yaratmaq üçün"
    ],
    correctAnswer: 0,
    explanation: "Virtual DOM real DOM-un yüngül kopiyasıdır və dəyişiklikləri optimallaşdıraraq performansı artırır."
},
{
    id: 68,
    question: "JavaScript-də 'this' konteksti arrow function ilə adi function-da necə fərqlənir?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "Arrow function-da this lexical scope-dan götürülür, adi function-da isə çağırıldığı obyektə görə təyin olunur",
      "Arrow function-da this həmişə window obyektidir",
      "Adi function-da this hər zaman undefined olur",
      "Heç bir fərq yoxdur"
    ],
    correctAnswer: 0,
    explanation: "Arrow function-lar this dəyərini yuxarıdakı lexical scope-dan miras alır, adi function-da isə çağırıldığı obyektə görə dəyişir."
},
{
    id: 69,
    question: "React-də useReducer hook-u nə üçün istifadə olunur?",
    category: "react",
    difficulty: "medium",
    options: [
      "Kompleks state idarəetməsi üçün reducer pattern-dən istifadə etmək",
      "DOM elementlərinə birbaşa daxil olmaq üçün",
      "Routing idarə etmək üçün",
      "Event listener-lər əlavə etmək üçün"
    ],
    correctAnswer: 0,
    explanation: "useReducer kompleks state dəyişikliklərini daha aydın və idarə olunan şəkildə idarə etməyə imkan verir."
},
{
    id: 70,
    question: "JavaScript-də hoisting nədir?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "Variable və function deklarasiyalarının scope-un yuxarısına qaldırılması",
      "Kodun asinxron icrası",
      "Array elementlərinin sıralanması",
      "Object-lərin dərin kopyalanması"
    ],
    correctAnswer: 0,
    explanation: "Hoisting variable və function deklarasiyalarını run-time zamanı scope-un yuxarısına qaldırır."
},
{
    id: 71,
    question: "React-də strict mode nə edir?",
    category: "react",
    difficulty: "medium",
    options: [
      "Potensial problemləri aşkar etmək üçün əlavə yoxlamalar və xəbərdarlıqlar göstərir",
      "Kodun daha sürətli icrasını təmin edir",
      "CSS xətalarını düzəldir",
      "Server side rendering-i aktiv edir"
    ],
    correctAnswer: 0,
    explanation: "Strict mode inkişaf zamanı potensial xətaları aşkar etməyə kömək edən əlavə yoxlamalar aparır."
},
{
    id: 72,
    question: "JavaScript-də prototypal inheritance nədir?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "Object-lərin başqa object-lərdən xüsusiyyətləri miras alması",
      "Array metodlarının zəncirlənməsi",
      "Class-ların yalnız constructor-dan istifadə etməsi",
      "Module-lərin import/export prosesi"
    ],
    correctAnswer: 0,
    explanation: "Prototypal inheritance object-lərin başqa object-lərin xüsusiyyətlərini miras almasına imkan verir."
},
{
    id: 73,
    question: "React-də lazy loading komponentləri necə optimallaşdırır?",
    category: "react",
    difficulty: "medium",
    options: [
      "Komponentləri yalnız ehtiyac olduqda yükləyərək bundle ölçüsünü azaldır",
      "CSS fayllarını avtomatik optimallaşdırır",
      "API cavablarını cache edir",
      "State idarəetməsini sürətləndirir"
    ],
    correctAnswer: 0,
    explanation: "Lazy loading komponentləri yalnız lazım olduğu anda yükləyir və başlanğıc bundle ölçüsünü azaldır."
},
{
    id: 74,
    question: "JavaScript-də event loop nə üçün vacibdir?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "Asinxron əməliyyatların (callback, promise) idarə olunmasını təmin edir",
      "DOM elementlərini animasiya edir",
      "CSS transition-ları icra edir",
      "Database sorğularını idarə edir"
    ],
    correctAnswer: 0,
    explanation: "Event loop JavaScript-in single-threaded mühitində asinxron əməliyyatların düzgün icrasını təmin edir."
},
{
    id: 75,
    question: "React-də keylərlə yanaşı index-dən istifadə niyə tövsiyə olunmur?",
    category: "react",
    difficulty: "medium",
    options: [
      "Index dəyişə bilər və diffing prosesində səhv yenilənmələrə səbəb ola bilər",
      "Index performansı azaldır",
      "Index yalnız class component-lərdə işləyir",
      "Heç bir səbəb yoxdur"
    ],
    correctAnswer: 0,
    explanation: "Index-lər elementlərin sırası dəyişdikdə diffing prosesini çaşdırır və yanlış render-lərə səbəb ola bilər."
}
,
  {
    id: 76,
    question: "HTML-də semantic elementlər nədir?",
    category: "html",
    difficulty: "medium",
    options: [
      "Mənası və funksiyası olan elementlər (məs. <header>, <footer>)",
      "Yalnız dizayn üçün istifadə olunan elementlər",
      "JavaScript kodu üçün istifadə olunan tag-lar",
      "SEO üçün xüsusi atributlar"
    ],
    correctAnswer: 0,
    explanation: "Semantic elementlər öz daxilində məna daşıyır və brauzer və SEO üçün daha aydın struktur yaradır (məs: <main>, <article>, <nav>)."
},
{
    id: 77,
    question: "CSS-də flexbox-un əsas oxu necə işləyir?",
    category: "css",
    difficulty: "medium",
    options: [
      "flex-direction ilə müəyyən olunur",
      "həmişə horizontal olur",
      "həmişə vertical olur",
      "grid-template-rows ilə təyin olunur"
    ],
    correctAnswer: 0,
    explanation: "Flexbox-un əsas oxu flex-direction property-si ilə row və ya column olaraq təyin olunur."
},
{
    id: 78,
    question: "JavaScript-də '===' və '==' arasındakı fərq nədir?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "=== həm value, həm də type yoxlayır, == yalnız value yoxlayır",
      "== həm value, həm də type yoxlayır, === yalnız value yoxlayır",
      "=== yalnız object-lərdə işləyir",
      "Heç bir fərq yoxdur"
    ],
    correctAnswer: 0,
    explanation: "=== strict equality operator-dur, həm tip həm dəyəri yoxlayır, == isə type coercion edə bilər."
},
{
    id: 79,
    question: "HTML-də alt atributu nə üçün istifadə olunur?",
    category: "html",
    difficulty: "medium",
    options: [
      "Şəkil görünmədikdə alternativ mətn göstərmək üçün",
      "Şəkil ölçüsünü dəyişmək üçün",
      "Şəkili mərkəzləşdirmək üçün",
      "Şəkil faylını yükləmək üçün"
    ],
    correctAnswer: 0,
    explanation: "alt atributu şəkil görünməsə belə təsviri mətn göstərir və eyni zamanda SEO və accessibility üçün vacibdir."
},
{
    id: 80,
    question: "CSS-də position: sticky nə edir?",
    category: "css",
    difficulty: "medium",
    options: [
      "Element scroll zamanı müəyyən hündürlükdə yapışıb qalır",
      "Element həmişə ekranda sabit qalır",
      "Element scroll ilə birlikdə hərəkət etmir",
      "Element absolute position ilə eyni işləyir"
    ],
    correctAnswer: 0,
    explanation: "position: sticky element müəyyən threshold-a çatana qədər normal hərəkət edir, sonra isə ekrana yapışır."
},
{
    id: 81,
    question: "JavaScript-də setTimeout funksiyası nə edir?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "Verilmiş müddətdən sonra callback funksiyanı icra edir",
      "Funksiyanı dərhal icra edir",
      "Loop yaradır",
      "Promise qaytarır"
    ],
    correctAnswer: 0,
    explanation: "setTimeout müəyyən millisecond sonra göstərilən funksiyanı bir dəfə icra edir."
},
{
    id: 82,
    question: "HTML form elementində method=\"POST\" nə deməkdir?",
    category: "html",
    difficulty: "medium",
    options: [
      "Məlumatı HTTP body-də serverə göndərir",
      "Məlumatı URL query string-də göndərir",
      "Form-u localStorage-a saxlayır",
      "Data-nı yalnız GET sorğusu ilə göndərir"
    ],
    correctAnswer: 0,
    explanation: "POST method form məlumatlarını HTTP body-də serverə göndərir və URL-də göstərilmir."
},
{
    id: 83,
    question: "CSS-də em və rem arasındakı fərq nədir?",
    category: "css",
    difficulty: "medium",
    options: [
      "em parent elementin font-size-a, rem isə root (html) elementin font-size-a əsaslanır",
      "rem parent-in ölçüsünə əsaslanır, em isə həmişə 16px-dir",
      "em və rem eyni işləyir",
      "rem yalnız margin üçün istifadə olunur"
    ],
    correctAnswer: 0,
    explanation: "em parent-in font-size-a əsaslanır, rem isə root elementin (html) font-size-ına əsaslanır."
},
{
    id: 84,
    question: "JavaScript-də event.preventDefault() nə üçün istifadə olunur?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "Browser-in default davranışını (məsələn form submit) dayandırmaq üçün",
      "Event-in parent elementə ötürülməsinin qarşısını almaq üçün",
      "Funksiyanı dərhal dayandırmaq üçün",
      "Elementin style-nı dəyişmək üçün"
    ],
    correctAnswer: 0,
    explanation: "event.preventDefault() browser-in default davranışını (məs: linkin yönləndirməsi, form-un submiti) bloklayır."
},
{
    id: 85,
    question: "CSS-də media query nə üçün istifadə olunur?",
    category: "css",
    difficulty: "medium",
    options: [
      "Ekran ölçüsünə görə fərqli stillər tətbiq etmək üçün",
      "JavaScript funksiyalarını çağırmaq üçün",
      "HTML elementləri yaratmaq üçün",
      "API sorğuları göndərmək üçün"
    ],
    correctAnswer: 0,
    explanation: "Media query ekran ölçüsü və digər cihaz xüsusiyyətlərinə görə müxtəlif CSS stilləri tətbiq etməyə imkan verir."
}
,
  {
    id: 86,
    question: "JavaScript-də call(), apply() və bind() metodları arasında əsas fərq nədir?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "call və apply funksiyanı dərhal işə salır, bind isə yeni funksiya qaytarır",
      "bind funksiyanı dərhal işə salır, call isə yeni funksiya yaradır",
      "apply yalnız object-lər üçün işləyir",
      "Heç bir fərq yoxdur"
    ],
    correctAnswer: 0,
    explanation: "call və apply funksiyanı dərhal müəyyən context ilə çağırır, bind isə həmin context ilə yeni funksiya qaytarır."
},
{
    id: 87,
    question: "React-də key prop-u nə üçün vacibdir?",
    category: "react",
    difficulty: "medium",
    options: [
      "List elementlərinin unikal identifikasiyası üçün",
      "Component-lərin stilini dəyişmək üçün",
      "Event handle etmək üçün",
      "State yaratmaq üçün"
    ],
    correctAnswer: 0,
    explanation: "key React-in elementlərin dəyişməsini düzgün izləməsi üçün lazımdır, performansı artırır."
},
{
    id: 88,
    question: "HTML-də <meta charset=\"UTF-8\"> nə üçün istifadə olunur?",
    category: "html",
    difficulty: "easy",
    options: [
      "Səhifənin simvol kodlaşdırmasını göstərmək üçün",
      "SEO üçün keyword əlavə etmək üçün",
      "CSS faylını daxil etmək üçün",
      "JavaScript faylını daxil etmək üçün"
    ],
    correctAnswer: 0,
    explanation: "<meta charset=\"UTF-8\"> səhifənin simvol kodlaşdırmasını UTF-8 olaraq təyin edir, çoxdilli dəstək üçün vacibdir."
},
{
    id: 89,
    question: "CSS-də inline, internal və external style fərqi nədir?",
    category: "css",
    difficulty: "medium",
    options: [
      "inline elementin özündə style, internal <style> tagında, external ayrıca CSS faylda yazılır",
      "Heç bir fərq yoxdur",
      "external yalnız JavaScript ilə işləyir",
      "internal yalnız mobile cihazlarda işləyir"
    ],
    correctAnswer: 0,
    explanation: "inline style atribut ilə, internal <style> tag ilə, external isə ayrıca .css faylından link ilə qoşulur."
},
{
    id: 90,
    question: "JavaScript-də closure nədir?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "Funksiya daxilində yaranan və xarici scope-dan dəyişənlərə çıxışı saxlayan funksiya",
      "DOM elementinin bağlanması",
      "Loop-un bitməsi",
      "Array metodu"
    ],
    correctAnswer: 0,
    explanation: "Closure bir funksiya daxilində yaradılan başqa bir funksiyanın xarici scope-dakı dəyişənlərə çıxışını təmin edir."
},
{
    id: 91,
    question: "React-də controlled və uncontrolled component fərqi nədir?",
    category: "react",
    difficulty: "medium",
    options: [
      "controlled state-i React tərəfindən idarə olunur, uncontrolled DOM tərəfindən",
      "uncontrolled daha sürətlidir",
      "controlled yalnız class component-lərdə işləyir",
      "Heç bir fərq yoxdur"
    ],
    correctAnswer: 0,
    explanation: "Controlled component-lərin dəyəri React state ilə idarə olunur, uncontrolled isə DOM-un öz dəyərini saxlayır."
},
{
    id: 92,
    question: "HTML-də <canvas> elementi nə üçün istifadə olunur?",
    category: "html",
    difficulty: "medium",
    options: [
      "Dinamik qrafika və şəkil çəkmək üçün",
      "Form məlumatı saxlamaq üçün",
      "Audio faylları oynatmaq üçün",
      "Video əlavə etmək üçün"
    ],
    correctAnswer: 0,
    explanation: "<canvas> JavaScript vasitəsilə qrafika və animasiya yaratmaq üçün istifadə olunur."
},
{
    id: 93,
    question: "CSS Grid-də grid-template-columns property-si nə edir?",
    category: "css",
    difficulty: "medium",
    options: [
      "Sütunların sayını və ölçüsünü təyin edir",
      "Sətirlərin sayını təyin edir",
      "Elementləri mərkəzləşdirir",
      "Flex yönünü təyin edir"
    ],
    correctAnswer: 0,
    explanation: "grid-template-columns grid layout-da sütunların ölçülərini və sayını təyin edir."
},
{
    id: 94,
    question: "JavaScript-də this açar sözü nəyi ifadə edir?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "Hal-hazırda işləyən obyektin kontekstini",
      "Həmişə window obyektini",
      "Funksiyanın adını",
      "Heç bir mənası yoxdur"
    ],
    correctAnswer: 0,
    explanation: "this istifadə olunan yerə görə konteksti bildirir (global, object method, class və s.)."
},
{
    id: 95,
    question: "React-də Fragment nə üçün istifadə olunur?",
    category: "react",
    difficulty: "easy",
    options: [
      "DOM-a əlavə div yaratmadan çoxlu element qaytarmaq üçün",
      "State idarə etmək üçün",
      "Routing idarə etmək üçün",
      "API sorğuları üçün"
    ],
    correctAnswer: 0,
    explanation: "Fragment (<>...</>) əlavə wrapper div olmadan bir neçə element qaytarmağa imkan verir."
},
{
    id: 96,
    question: "HTML-də <iframe> elementi nə üçün istifadə olunur?",
    category: "html",
    difficulty: "medium",
    options: [
      "Başqa veb səhifəni cari səhifə içində göstərmək üçün",
      "Şəkil göstərmək üçün",
      "Video oynatmaq üçün",
      "CSS faylını daxil etmək üçün"
    ],
    correctAnswer: 0,
    explanation: "<iframe> başqa veb səhifəni indiki səhifəyə embed etmək üçün istifadə olunur."
},
{
    id: 97,
    question: "CSS-də transform: scale(2) nə edir?",
    category: "css",
    difficulty: "easy",
    options: [
      "Elementi 2 dəfə böyüdür",
      "Elementi 2 dəfə kiçildir",
      "Elementi sola çəkir",
      "Elementi döndərir"
    ],
    correctAnswer: 0,
    explanation: "scale(2) elementin ölçüsünü 2 dəfə artırır."
},
{
    id: 98,
    question: "JavaScript-də fetch API nə üçün istifadə olunur?",
    category: "javascript",
    difficulty: "medium",
    options: [
      "Serverə HTTP sorğuları göndərmək üçün",
      "DOM elementlərini dəyişmək üçün",
      "Browser cache-i təmizləmək üçün",
      "CSS stillərini idarə etmək üçün"
    ],
    correctAnswer: 0,
    explanation: "fetch API asinxron olaraq serverə HTTP request göndərməyə və cavab almağa imkan verir."
},
{
    id: 99,
    question: "React-də lazy loading nə üçün istifadə olunur?",
    category: "react",
    difficulty: "medium",
    options: [
      "Kod hissələrini yalnız lazım olanda yükləyib performansı artırmaq üçün",
      "Komponentləri tez-tez yenidən render etmək üçün",
      "State yaratmaq üçün",
      "API sorğularını sürətləndirmək üçün"
    ],
    correctAnswer: 0,
    explanation: "Lazy loading böyük komponentləri yalnız lazım olan anda yükləyərək tətbiqin ilkin yüklənmə sürətini artırır."
},
{
    id: 100,
    question: "HTML-də data-* atributları nə üçün istifadə olunur?",
    category: "html",
    difficulty: "medium",
    options: [
      "Elementlərə xüsusi məlumat (custom data) saxlamaq üçün",
      "CSS stillərini dəyişmək üçün",
      "JavaScript kodu daxil etmək üçün",
      "Meta məlumat göstərmək üçün"
    ],
    correctAnswer: 0,
    explanation: "data-* atributları HTML elementlərində əlavə xüsusi məlumat saxlamağa imkan verir və JavaScript ilə oxuna bilər."
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
