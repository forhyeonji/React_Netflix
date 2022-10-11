import { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"; // Navigate는 useNavigate랑 다르다. 이건 Link같은 컴포넌트임
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import ProductPage from './page/ProductPage'
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';


function App() {
  const [authenticate, setAuthenticate] = useState(true);
  const PrivateRoute=()=>{
    return authenticate==true?<UserPage/>:<Navigate to="/login"/>
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
     
    </div>
  );
}

export default App;
