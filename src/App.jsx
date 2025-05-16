import {Routes, Route, Link} from 'react-router-dom';
import { lazy, Suspense } from 'react';
function App(){
  const Home=lazy(()=>import('./components/Home'));
  const About=lazy(()=>import('./components/About'));
  const Post=lazy(()=>import('./components/Posts'));
  return(
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/post">Post</Link>
        </nav>
        <Suspense fallback={<p>Loading..</p>}>
           <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/post" element={<Post/>}/>
           </Routes>
        </Suspense>
      </div>
  );
}
export default App;