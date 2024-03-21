import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from '../pages/Intro';
import UserMain from '../pages/user/UserMain';
import Footer from '../components/layout/Footer';
import MypageMain from '../pages/mypage/MypageMain';
import Notipage from '../pages/Notipage';
import Home from '../pages/Home'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path='/noti' element={<Notipage />} />
        <Route path="/auth" element={<UserMain />} />
        <Route path="/mypage" element={<MypageMain />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  );
};

export default Router;
