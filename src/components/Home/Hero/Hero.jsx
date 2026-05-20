import { useState, useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isImageFading, setIsImageFading] = useState(false);
  const [rotation, setRotation] = useState(0);

  const slides = [
    {
      backgroundImage: "/hero-background.jpg",
      mobileImage: "/hero-mobile-img.png",
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
      mobileImage: "/mobile-img-2.png",
      heading: (
        <>
          Where <span className="heading-span">Fashion</span> Meets Feminity
        </>
      ),
      paragraph: "Discover trending products, pre-order exclusives, and book trusted services — all in one place.",
    },
    {
      backgroundImage: "/hero-background-3.jpg",
      mobileImage: "/mobile-img-3.png",
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
      mobileImage: "/mobile-img-4.png",
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
      // Start fade out for text and image
      setIsFading(true);
      setIsImageFading(true);
      
      // After fade out, change content
      setTimeout(() => {
        setCurrentIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % slides.length;
          return newIndex;
        });
        

        setRotation((prevRotation) => prevRotation + 90);
        
        // After content change, fade in
        setTimeout(() => {
          setIsFading(false);
          setIsImageFading(false);
        }, 100);
      }, 300);
      
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
            <div 
              className="ellipse" 
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.5s ease-in-out"
              }}
            >
              {/* Four images positioned around the ellipse */}
              <div className="ellipse-image image-1">
                <img
                  className={`mobile-img ${isImageFading ? "image-fade-out" : "image-fade-in"}`}
                  src={slides[0].mobileImage}
                  alt="mobile view 1"
                />
              </div>
              <div className="ellipse-image image-2">
                <img
                  className={`mobile-img ${isImageFading ? "image-fade-out" : "image-fade-in"}`}
                  src={slides[1].mobileImage}
                  alt="mobile view 2"
                />
              </div>
              <div className="ellipse-image image-3">
                <img
                  className={`mobile-img ${isImageFading ? "image-fade-out" : "image-fade-in"}`}
                  src={slides[2].mobileImage}
                  alt="mobile view 3"
                />
              </div>
              <div className="ellipse-image image-4">
                <img
                  className={`mobile-img ${isImageFading ? "image-fade-out" : "image-fade-in"}`}
                  src={slides[3].mobileImage}
                  alt="mobile view 4"
                />
              </div>
            </div>
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