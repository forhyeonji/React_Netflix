import React from 'react'
import Login from '../page/Login'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
  let authenticate = useSelector(state => state.auth.authenticate)
  console.log("로그인",authenticate);
  return authenticate == true?<ProductDetail/>:<Navigate to="/login" />;
}

export default PrivateRoute