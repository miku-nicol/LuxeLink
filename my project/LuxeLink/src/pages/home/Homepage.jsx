import React, { useState,useEffect } from 'react'
import Hero from '../hero/hero';
import ProductList from '../../components/ui/Productlist';
import Service from '../our service/Service';
import About from '../about/About';
import Footer from '../footersec/Footer';
import Signin from '../../pages/auth/Signin';
import Signup from '../../pages/auth/Signup';
import Nav from '../../components/nav/Nav';
import Cart from '../../components/ui/cart';
import CartSidebar from '../../components/ui/cartside';




function Homepage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const removeFromCart = (productId)=>{
    setCart((prevcart) =>
    prevcart.filter((item) => item.id !== productId)
  );
  };
 const addToCart = (product) => {
  setCart((prevCart) => {
    const existingIndex = prevCart.findIndex((item) => item.id === product.id);

    if (existingIndex !== -1) {
      const updatedCart = [...prevCart];
      const existingProduct = updatedCart[existingIndex];
      updatedCart[existingIndex] = {
        ...existingProduct,
        quantity: (existingProduct.quantity || 1) + 1,
      };
      return updatedCart;
    } else {
      return [...prevCart, { ...product, quantity: 1 }];
    }
  })};

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

const changeQuantity = (productId, delta) => {
  setCart((prevCart) =>
    prevCart.map((item) => {
      if (item.id === productId) {
        const newQuantity = Math.max(1, (item.quantity || 1) + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    })
  );
};

  // on first load ,check if the user is already logged in
  useEffect(() =>{
    const storedLogin = localStorage.getItem('isLoggedIn');
    if (storedLogin ==='true') {
      setIsLoggedIn(true);
    }
  },[]);
  // update localStorage whenever login state changes
  useEffect(()=> {
localStorage.setItem('isLoggedIn', isLoggedIn);
  },[isLoggedIn]);
//   useEffect(() => {
//   document.body.style.overflow = (showSignin || showSignup) ? "hidden" : "auto";
// }, [showSignin, showSignup]);

// load cart from localStorage on app start
useEffect(() => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    setCart(JSON.parse(savedCart));
  }
}, []);
// save cart to localStorage every time it updates
useEffect(() => {
  console.log("Saving cart to storage:", cart);
  localStorage.setItem('cart', JSON.stringify(cart));
}, [cart]);
   
  return (

    <>
    <Nav
    cartCount={cartItemCount}
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
    onSigninClick={() => setShowSignin(true)}
    onSignupClick={() => setShowSignup(true)}
    onCartClick={() => setShowCart(true)}
    />
    <Hero/>
    <ProductList setCart={setCart}
    isLoggedIn={isLoggedIn}
    setShowSignup={setShowSignup}
    addToCart={addToCart}
    searchTerm={searchTerm}
    />
    <Service/>
    <About/>
    <Footer/>
    <CartSidebar
    isOpen={showCart}
    onClose={() => setShowCart(false)}
    cart={cart}
    removeFromCart={removeFromCart}
    changeQuantity={changeQuantity}

    />
    
    
    {showSignin && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded shadow-lg relative max-w-md w-full">
      <button onClick={() => setShowSignin(false)}
        className="absolute  right-3 text-gray-500 hover:text-red-500 text-2xl">
 <ion-icon name="close-outline"></ion-icon>
      </button>
      
    <Signin onSwitchToSignup={() =>{
      setShowSignin(false);
      setShowSignup(true);
    }} />
    
    
    </div>
  </div>
)}

{showSignup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded shadow-lg relative max-w-md w-full">
    
    <button onClick={() => setShowSignup(false)}
      className="absolute  right-3 text-gray-500 hover:text-red-500 text-2xl">
      <ion-icon name="close-outline"></ion-icon> 
    </button>
    
    <Signup onSwitchToSignin={() =>{
      setShowSignup(false);
      setShowSignin(true);
    }} />
    </div>
  </div>
)}
    </>
    
  );
}

export default Homepage;