
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import "./Slider.css"
import "./Testimonial.css";
import { testimonials } from '../../../data/testimonials/testimonial';
import {  MoveLeftIcon, MoveRightIcon } from 'lucide-react';

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
              <MoveRightIcon style={{ width: '20px', height: '20px' }} />
            </div>
            <div className="swiper-button-prev">
              <MoveLeftIcon style={{ width: '20px', height: '20px' }} />
            </div>
          </div>
        </div>
        <div className="testimonial-container">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Navigation]}
            grabCursor={true}
            touchRatio={1.2}
            resistanceRatio={0.85}
            simulateTouch={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 24,
                centeredSlides: false,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 28,
              },
              1100: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="slide-container">
                  <div className="slide-img">
                    <img
                      src={testimonial.image}
                      alt={`testimonial-${testimonial.id}`}
                      className="slider-img"
                      width="496px"
                    />
                  </div>

                  <div className="slide-content">
                    <div className="profile-img">
                      <img
                        src={testimonial.profileImg}
                        alt="profile-img"
                        width="38px"
                        height="45px"
                      />
                    </div>
                    <div className="comment">
                      <div className="comment-container">
                        <p className="slide-paragraph">
                          {testimonial.comment}
                        </p>

                        <p className="slide-para">
                          {testimonial.description}
                        </p>
                      </div>

                      <div className="address">
                        <p className="name-address primary-heading">
                          {testimonial.name}, {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}