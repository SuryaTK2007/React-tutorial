import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Posts from './components/Posts';
function App(){
  return(
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/post">Post</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/post" element={<Posts/>}/>
        </Routes>
      </div>
  );
}
export default App;