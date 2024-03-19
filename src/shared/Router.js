import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home/Home';
import AuthForm from '../pages/home/AuthForm'
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';


const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthForm />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter >
  );
};

export default Router;