import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
import { useTheme } from './components/ThemeContext';
const Home=lazy(()=>import('./components/Home'));
const About=lazy(()=>import('./components/About'));
const Post=lazy(()=>import('./components/Posts'));
const Contact=lazy(()=>import('./components/Contact'));
const NotFound=lazy(()=>import('./components/NotFound'));

function App(){
  const {theme,toggleTheme}=useTheme();
  return(
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/post">Post</Link> | <Link to="/contact">Contact</Link>
          <button onClick={toggleTheme} style={{marginLeft: '20px'}}>
            Switch to {theme==='light'?'Dark':'Light'} Mode
          </button>
        </nav>
        <Suspense fallback={<p>Loading..</p>}>
           <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/post" element={<Post/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
           </Routes>
        </Suspense>
      </div>
  );
}
export default App;