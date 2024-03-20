import Header from '../components/commons/Header';
import MainItem from '../components/layout/MainItem';
import Maincategory from '../components/layout/Maincategory';
import WritingButton from './components/commons/Button';

const Main = () => {
  return (
    <>
      <Header />
      <Maincategory />
      <MainItem />
      <WritingButton />
    </>
  );
};

export default Main;
