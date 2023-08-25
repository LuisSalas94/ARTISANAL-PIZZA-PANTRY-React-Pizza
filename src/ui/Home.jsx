import HomeContent from "../features/home/HomeContent";
import HomeContent2 from "../features/home/HomeContent2";
import HomeFeature from "../features/home/HomeFeature";
import HomeHeader from "../features/home/HomeHeader";
import HomeStats from "../features/home/HomeStats";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeFeature />
      <HomeContent />
      <HomeStats />
      <HomeContent2 />
    </>
  );
};

export default Home;
