import { Routes, Route, Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useTheme } from './components/ThemeContext';
import './App.css';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Posts = lazy(() => import('./components/Posts'));
const Contact = lazy(() => import('./components/Contact'));
const NotFound = lazy(() => import('./components/NotFound'));
const Todo = lazy(() => import('./components/Todo'));

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme}>
      <nav className={theme}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/posts">Posts</Link> | <Link to="/contact">Contact</Link> | <Link to="/todo">Todo</Link>
        <button onClick={toggleTheme} style={{ marginLeft: '20px' }}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </nav>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;