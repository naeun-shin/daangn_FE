import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Notipage from '../pages/Notipage';
import SellPage from '../pages/Sellpage';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/noti' element={<Notipage />} />
      <Route path='/Sellpage' element={<SellPage />} />
    </Routes>
  );
};

export default Router;
