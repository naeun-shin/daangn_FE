import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from '../pages/main';
import UserMain from '../pages/user/UserMain';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MypageMain from '../pages/mypage/MypageMain';
import Notipage from '../pages/Notipage';


const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/noti' element={<Notipage />} />
        <Route path="/auth" element={<UserMain />} />
        <Route path="/mypage" element={<MypageMain />} />
      </Routes>
      <Footer />
    </BrowserRouter >
  );
};

export default Router;