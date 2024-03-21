import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home/Home';
import UserMain from '../pages/user/UserMain';
import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';
import Mypage from '../pages/mypage/MypageMain';


const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<UserMain />} />
        <Route paht="/mypage" element={<Mypage />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  );
};

export default Router;