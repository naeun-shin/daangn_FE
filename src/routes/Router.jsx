import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Notipage from '../pages/Notipage';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/noti' element={<Notipage />} />
    </Routes>
  );
};

export default Router;
