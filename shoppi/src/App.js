
import './App.css';
import Cart from './components/cart/Cart';
import Contact from './components/contact/Contact';
import LoginPage from './components/login/LoginPage';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Register from './components/register/Register';
import Footer from './components/footer/Footer';
import Shop from './components/dashboard/Shop';
import Home from './components/dashboard/Home';
import AboutUs from './components/aboutUs/AboutUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/shop" element={<Shop/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
