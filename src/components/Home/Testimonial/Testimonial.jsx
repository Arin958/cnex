import "./Testimonial.css"

export default function Testimonial() {
    return (
          <section className="testimonial-section section" id="testimonial">
        <div className="container">
          <div className="section-heading-container testimonial-heading">
            <div className="heading-container">
              <h6 className="primary-heading">Testimonial</h6>
              <h2 className="sub-heading">
                What our <span className="heading-span">Customer Say</span>
              </h2>
            </div>
            <div className="swiper-button-container">
              <div className="swiper-button-next">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
              <div className="swiper-button-prev">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
            </div>
          </div>
          <div className="testimonial-container">
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="slide-container">
                    <div className="slide-img">
                      <img
                        src="/testimonial-1.jpg"
                        alt="testimonial-1"
                        className="slider-img"
                        width="496px"
                      />
                    </div>

                    <div className="slide-content">
                      <div className="profile-img">
                        <img
                          src="/testimonial-profile.png"
                          alt="profile-img"
                          width="38px"
                          height="45px"
                        />
                      </div>
                      <div className="comment">
                        <div className="comment-container">
                          <p className="slide-paragraph">
                            “They did an amazing work for our home”
                          </p>

                          <p className="slide-para">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Voluptatem earum assumenda, voluptas
                            exercitationem animi nemo.
                          </p>
                        </div>

                        <div className="address">
                          <p className="name-address primary-heading">
                            JOHN CARTER, NEW YORK
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-container">
                    <div className="slide-img">
                      <img
                        src="/testimonial-1.jpg"
                        alt="testimonial-1"
                        className="slider-img"
                        width="496px"
                      />
                    </div>

                    <div className="slide-content">
                      <div className="profile-img">
                        <img
                          src="/testimonial-profile.png"
                          alt="profile-img"
                          width="38px"
                          height="45px"
                        />
                      </div>
                      <div className="comment">
                        <div className="comment-container">
                          <p className="slide-paragraph">
                            “They did an amazing work for our home”
                          </p>

                          <p className="slide-para">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Voluptatem earum assumenda, voluptas
                            exercitationem animi nemo.
                          </p>
                        </div>

                        <div className="address">
                          <p className="name-address primary-heading">
                            JOHN CARTER, NEW YORK
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-container">
                    <div className="slide-img">
                      <img
                        src="/testimonial-1.jpg"
                        alt="testimonial-1"
                        className="slider-img"
                        width="496px"
                      />
                    </div>

                    <div className="slide-content">
                      <div className="profile-img">
                        <img
                          src="/testimonial-profile.png"
                          alt="profile-img"
                          width="38px"
                          height="45px"
                        />
                      </div>
                      <div className="comment">
                        <div className="comment-container">
                          <p className="slide-paragraph">
                            “They did an amazing work for our home”
                          </p>

                          <p className="slide-para">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Voluptatem earum assumenda, voluptas
                            exercitationem animi nemo.
                          </p>
                        </div>

                        <div className="address">
                          <p className="name-address primary-heading">
                            JOHN CARTER, NEW YORK
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="slide-container">
                    <div className="slide-img">
                      <img
                        src="/testimonial-1.jpg"
                        alt="testimonial-1"
                        className="slider-img"
                        width="496px"
                      />
                    </div>

                    <div className="slide-content">
                      <div className="profile-img">
                        <img
                          src="/testimonial-profile.png"
                          alt="profile-img"
                          width="38px"
                          height="45px"
                        />
                      </div>
                      <div className="comment">
                        <div className="comment-container">
                          <p className="slide-paragraph">
                            “They did an amazing work for our home”
                          </p>

                          <p className="slide-para">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Voluptatem earum assumenda, voluptas
                            exercitationem animi nemo.
                          </p>
                        </div>

                        <div className="address">
                          <p className="name-address primary-heading">
                            JOHN CARTER, NEW YORK
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}