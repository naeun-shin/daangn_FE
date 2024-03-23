import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Intro from '../pages/Intro';
import UserMain from '../pages/user/UserMain';
// import Footer from '../components/layout/Footer';
import MypageMain from '../pages/mypage/MypageMain';
import Notipage from '../pages/Notipage';
import Home from '../pages/home';
import Community from '../pages/Community';
import CommunityCreate from '../pages/community/CommunityCreate';
import CommunityDetail from '../pages/community/CommunityDetail';
import SellPage from '../pages/Sellpage';
import DetailPage from '../pages/SellDetailPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route
          path="/auth"
          element={<UserMain />}
        />
        <Route path="/home" element={<Home />} />
        <Route
          path="/noti"
          element={<Notipage />}
        />
        <Route
          path="/community"
          element={<Community />}
        />
        <Route
          path="/communityCreate"
          element={<CommunityCreate />}
        />
        <Route
          path="/CommunityDetail/:id"
          element={<CommunityDetail />}
        />
        <Route
          path="/mypage"
          element={<MypageMain />}
        />
        <Route
          path="/Sellpage"
          element={<SellPage />}
        />
        <Route
          path="/detail/:id"
          element={<DetailPage />}
        />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
