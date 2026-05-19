import "./Hero.css"

export default function Hero() {
  return (
    <>
      <section className="banner-section" id="hero">
        <div className="banner-container">
          <div className="left-side banner_container_left_side">
            <h1 className="heading">
              <span className="heading-span">Experience</span> the Future of Female
              Commerce with <span className="heading-span"> Cnex </span>
            </h1>
            <p className="paragraph">
              Order, Preorder, and Book - Your Ultimate Destination for Female
              Products and Services
            </p>
            <div className="button-container">
              <a href="/google" className="hero_link">
                <img
                  width="200px"
                  src="/appdownload-img.png"
                  alt="apple store"
                  className="app-download-img"
                />
              </a>
              <a href="/google" className="hero_link">
                <img
                  width="200px"
                  src="/googledownload.png"
                  alt="google play"
                  className="app-download-img"
                />
              </a>
            </div>
          </div>

          <div className="right-side banner_container_right_side">
            <img
              className="banner-img"
              src="/hero-mobile-img.png"
              alt="banner-img"
            />
          </div>
        </div>
      </section>

      <div className="facts">
        <div className="facts-container">
          <div className="fact1">
            <h2 className="fact-heading">200+</h2>
            <p className="fact-paragraph">Client Worldwide</p>
          </div>
          <div className="fact2">
            <h2 className="fact-heading">100+</h2>
            <p className="fact-paragraph">Client Satisfaction</p>
          </div>
          <div className="fact3">
            <h2 className="fact-heading">99k+</h2>
            <p className="fact-paragraph">Number of Sales</p>
          </div>
          <div className="fact4">
            <h2 className="fact-heading">24H</h2>
            <p className="fact-paragraph">Team Support</p>
          </div>
        </div>
      </div>
    </>
  );
}
