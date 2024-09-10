// import Dashboard from "./Dashboard";

import Header from "./Header";

const TvScreen = () => {
  return (
    <>
      <Header />
      <section className="tvsection">
        <div className="container">
          <div className="col-sm-12 text-center p-4">
            <div className="tvText">
              <h1> Enjoy on your TV</h1>
              <p>
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
            </div>

            <div className="video">
              <iframe
                className="videoFrame"
                // width="60%"
                // height="400"
                src="https://www.youtube.com/embed/GV3HUDMQ-F8?autoplay"
                title="Netflix New Logo Animation 2019"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* <Dashboard /> */}
    </>
  );
};

export default TvScreen;
