import Header from "./Header";
import "./style.css";

const TvScreen = () => {
  return (
    <>
      <Header />
      <section className="tvsection">
        <div className="container">
          <div className="col-sm-12 text-center p-4">
            <div className="tvText">
              <h1>Enjoy on your TV</h1>
              <p>
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
            </div>

            <div className="video">
              <iframe
                className="videoFrame"
                src="https://www.youtube.com/embed/GV3HUDMQ-F8?autoplay"
                title="Netflix New Logo Animation 2019"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TvScreen;
