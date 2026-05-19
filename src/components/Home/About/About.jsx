import "./About.css"

export default function About() {
    return (
          <section className="about-section" id="about">
        <div className="section-heading-container">
          <h6 className="primary-heading">About Us</h6>
          <h2 className="sub-heading">
            <span className="heading-span">Pioneering Female</span>-Centric
            Solutions for the Modern Woman
          </h2>
        </div>
        <div className="about-img-grid">
          <div className="about-img-1 about-img">
            <img src="/grid-img1.jpg" alt="grid-img1" className="grid-img" />
          </div>
          <div className="about-img-2 about-img">
            <img src="/grid-img2.jpg" alt="grid-img2" className="grid-img" />
          </div>
          <div className="about-img-3 about-img">
            <img src="/grid-img3.jpg" alt="grid-img3" className="grid-img" />
          </div>
          <div className="about-img-4 about-img">
            <img src="/grid-img4.jpg" alt="grid-img4" className="grid-img" />
          </div>
          <div className="about-img-5 about-img">
            <img src="/grid-img5.jpg" alt="grid-img5" className="grid-img" />
          </div>
          <div className="about-img-6 about-img">
            <img src="/grid-img6.jpg" alt="grid-img6" className="grid-img" />
          </div>
          <div className="about-img-7 about-img">
            <img src="/grid-img7.jpg" alt="grid-img7" className="grid-img" />
          </div>
          <div className="about-img-8 about-img">
            <img src="/grid-img8.jpg" alt="grid-img8" className="grid-img" />
          </div>
        </div>
          <div className="story-content">
            <p className="story-paragraph">
              At the beginning, it was just the two of them, working out of a
              small office space. They were determined to provide personalized
              service to their clients and build lasting relationships. They
              worked tirelessly, often working long hours and weekends to ensure
              that their clients' needs were met.
            </p>
            <div className="button-container">
              <button className="btn">Get in touch</button>
            </div>
          </div>
      </section>
    )
}