// import { Button } from "react-bootstrap";
import HeroSection from "./HeroSection";
import Header from "./Header";
// import TvScreen from "./TvScreen";
const Main = () => {
  return (
    <>
      <section className="mainSection">
        <div className="col-sm-12">
          <Header />
          <HeroSection />
        </div>
        {/* <TvScreen /> */}
      </section>
    </>
  );
};

export default Main;
