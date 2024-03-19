import React from 'react';
// import { Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Maincategory from './components/layout/Maincategory';
import MainItem from './components/layout/MainItem';
import WritingButton from './components/commons/Button';

const App = () => {
  return (
    <div>
      <Header />
      <Maincategory />
      <MainItem />
      <MainItem />
      <MainItem />
      <MainItem />
      <MainItem />
      <WritingButton />
    </div>
  );
};

export default App;
