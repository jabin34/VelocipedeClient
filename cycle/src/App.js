
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Header from './Shared/Header';
import Blog from './Blog/Blog';
import Login from './Login/Login';
import Portfolio from './Portfolio/Portfolio';
import Registration from './Login/Registration';
import Purchase from './Purchase/Purchase';
import RequiredAuth from './RequiredAuth/RequiredAuth';
import Dashboard from './Dasboard/Dashboard';
import MyProfile from './Dasboard/MyProfile';
import MyOrder from './Dasboard/UserSide/MyOrder';
import AddReview from './Dasboard/UserSide/AddReview';
import AddProduct from './Dasboard/AdminSide/AddProduct';
import ManageOrder from './Dasboard/AdminSide/ManageOrder';
import MakeAdmin from './Dasboard/AdminSide/MakeAdmin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/purchase/:id" element={<RequiredAuth><Purchase/></RequiredAuth>} />
          <Route path="/dashboard" element={<RequiredAuth><Dashboard/></RequiredAuth>} >
            <Route  index element ={<MyProfile/>}/>
            <Route  path="order" element ={<MyOrder/>}/>
            <Route  path="review" element={<AddReview/>}/>
            <Route  path='addProduct' element ={<AddProduct/>}/>
            <Route  path='manageOrder' element ={<ManageOrder/>}/>
            <Route  path='makeAdmin' element ={<MakeAdmin/>}/>
            


          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
