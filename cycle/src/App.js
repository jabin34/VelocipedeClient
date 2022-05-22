import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Header from './Shared/Header';
import Blog from './Blog/Blog';
import Login from './Login/Login';
import Portfolio from './Portfolio/Portfolio';
import Registration from './Login/Registration';

function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
