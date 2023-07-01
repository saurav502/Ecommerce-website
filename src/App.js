import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Product from './components/Product';
import Products from './components/Products';
import CategoryProducts from './components/CategoryProducts';
import Cart from './components/Cart';
import Contact from './components/Contact';
import LoginForm from './components/LoginForm';


function App() {
  const [authenticated, setAuthenticated] = useState(false);

  // Check if the user is already authenticated on initial load
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (isAuthenticated) {
      setAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    // Set the authenticated status in local storage
    localStorage.setItem('authenticated', 'true');
    setAuthenticated(true);
  };
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path='/contact' element={<Contact/>}/>
        {!authenticated && (
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
        )}
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
