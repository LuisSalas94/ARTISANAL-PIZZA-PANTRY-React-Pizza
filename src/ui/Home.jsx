import HomeContent from "../features/home/HomeContent";
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
    </>
  );
};

export default Home;
