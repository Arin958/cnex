import { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);



  const slides = [
    {
      backgroundImage: "/hero-background.jpg",
      heading: (
        <>
          <span className="heading-span">Experience</span> the Future of Female
          Commerce with <span className="heading-span"> Cnex </span>
        </>
      ),
      paragraph: "Order, Preorder, and Book - Your Ultimate Destination for Female Products and Services",
    },
    {
      backgroundImage: "/hero-background-2.jpg",
      heading: (
        <>
          Where  <span className="heading-span">Fashion</span> Meets Feminity
        </>
      ),
      paragraph: "Discover trending products, pre-order exclusives, and book trusted services — all in one place.",
    },
    {
      backgroundImage: "/hero-background-3.jpg",
      heading: (
        <>
          <span className="heading-span">Shop Smarter</span> with{" "}
          <span className="heading-span"> Cnex </span>
        </>
      ),
      paragraph: "From skincare to wellness, find everything you need to feel confident and beautiful every day.",
    },
    {
      backgroundImage: "/hero-background-4.jpg",
      heading: (
        <>
          <span className="heading-span">Join</span> the{" "}
          <span className="heading-span"> Cnex Community</span> Today
        </>
      ),
      paragraph: "Connect with women worldwide, share experiences, and elevate your lifestyle with premium products.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setIsFading(true);
      
      // After fade out, change content
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % slides.length;
          return newIndex;
        });
        
        // After content change, fade in
        setTimeout(() => {
          setIsFading(false);
        }, 100);
      }, 300);
      
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array - runs once on mount

  return (
    <>
      <section 
        className="banner-section" 
        id="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slides[currentIndex].backgroundImage})`,
        }}
      >
        <div className="banner-container">
          <div className="left-side banner_container_left_side">
            <h1 className={`heading ${isFading ? "fade-out" : "fade-in"}`}>
              {slides[currentIndex].heading}
            </h1>
            <p className={`paragraph ${isFading ? "fade-out" : "fade-in"}`}>
              {slides[currentIndex].paragraph}
            </p>
            <div className={`button-container ${isFading ? "fade-out" : "fade-in"}`}>
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