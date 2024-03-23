import Header from '../components/layout/Header';
import MainItem from '../components/commons/MainItem';
import Maincategory from '../components/layout/Maincategory';
import WritingButton from '../components/commons/Button';

const Home = () => {
  return (
    <>
      <Header />
      <Maincategory />
      <MainItem />
      <WritingButton isCommunity={false} />
    </>
  );
};

export default Home;
