import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import "./App.css";
import airman1 from "./images/Group.png";
import airman2 from "./images/Group1.png";
import SeatingAstro from './images/seatingAstro.png'
import arrowIcon from "./images/ArrowLineUpRight.png"
import handshakeImg from './images/Handshake.svg'
import gloabImg from './images/Globe.svg'
import chartBarImg from './images/ChartBar.svg'
import magnifyGImg from './images/MagnifyingGlass.svg'
import bulbImg from './images/Lightbulb.svg'
import currentTestinomialImg from './images/Rectangle 27.png'
import pedingTestinomialImg from './images/Rectangle 31.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default function Dashboard() {
  return (
    <div className="App" >
      <section className="landing-section" style={{ paddingTop: "20px" }}>
        <Navbar />
        <div className="section1data">
          <h1 className="landing-title text-center"> The ultimate space for learning WEB3.</h1>
          <p className="text-center mt-2">Enter the Web3 Era: Learn & Thrive.</p>
          <button className="landing-start-btn  bg-transparent mt-3" >  Get Started </button>
        </div>
        <div className="landing-astronaut1">
          <img src={airman1} alt="Astronaut 1" />
        </div>
        <div className="landing-astronaut2">
          <img src={airman2} alt="Astronaut 2" />
        </div>
      </section >
      {/* -------------- Carousel Section------------- */}
      <section className="landing-carousel mt-5 pt-5">
        <h1 className="landing-carousel-title text-center">Our Team comes from</h1>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </section>

      {/* --------------- Explore Section ------------ */}
      <section className="explore-container mt-5">
        <h1 className="explore-heading text-center">Explore <span className="explore-subheading">Vidyaverse</span></h1>
        <div className="position-relative explore-box connect-box mx-auto px-5 py-4">
          <img className="seating-astro" src={SeatingAstro} alt="Seating Astronaut" />
          <div className="connect-left-box">
            <h3 className="connect-left-box-text"><span className="connect-left-box-subtext">Connect.</span> Grow. Thrive</h3>
          </div>
          <div className="connect-right-box"></div>
        </div>
        <div className="explore-box technology-box mx-auto my-5 px-5 py-4">
          <div className="technology-left-box">
            <h3 className="technology-left-box-text"><span className="technology-left-box-subtext">Explore</span>  WEB3 Technologies</h3>
          </div>
          <div className="technology-right-box"></div>
        </div>
        <div className="explore-box learn-box mx-auto my-5 px-5 py-4">
          <div className="learn-left-box">
            <h3 className="learn-left-box-text"><span className="learn-left-box-subtext">Learn</span> and Fun</h3>
          </div>
          <div className="learn-right-box"></div>
        </div>
      </section>

      {/* -------------- Course Offer Section ----------- */}

      <section className="offer-course-section mt-5 position-relative">
        <div className="offer-course-section1">
          <p className="course-offer-title"> The <span className="courses-text-color">Courses</span> <br />we offer</p>
          <p className="course-offer-text">Embark on a transformative Web3 learning experience. Explore decentralized technologies, collaborate with experts, and unlock limitless possibilities.</p>
          <button className="offer-course-btn d-inline">Enroll Now
            <img src={arrowIcon} alt="arrow icon btn" className="mx-2" />
          </button>
        </div>
        <div className="course-offer-carousel d-flex position-absolute ">
          <div className="course-offer-carousel-card1"></div>
          <div className="course-offer-carousel-card1 mx-4"></div>
        </div>
      </section>

      {/* -------------- Key Section --------------------- */}
      <section className="key-section">
        <h1 className="key-section-title text-center">Key <span className="key-section-subtitle">Numbers</span> to know</h1>
        <div className="key-div-container d-flex justify-content-around align-items-center">
          <div className="key-div d-flex flex-column align-items-center justify-content-center">
            <img className="key-img" src={handshakeImg} alt="Handsacking img" />
            <h1 className="key-head m-0">20+</h1>
            <p className="key-text">years of activity</p>
          </div>
          <div className="key-div d-flex flex-column align-items-center justify-content-center">
            <img className="key-img" src={gloabImg} alt="Handsacking img" />
            <h1 className="key-head m-0">9+</h1>
            <p className="key-text">countries</p>
          </div>
          <div className="key-div d-flex flex-column align-items-center justify-content-center">
            <img className="key-img" src={chartBarImg} alt="Handsacking img" />
            <h1 className="key-head m-0">947+</h1>
            <p className="key-text">organizations supported</p>
          </div>
          <div className="key-div d-flex flex-column align-items-center justify-content-center">
            <img className="key-img" src={magnifyGImg} alt="Handsacking img" />
            <h1 className="key-head m-0">523+</h1>
            <p className="key-text">research partners</p>
          </div>
          <div className="key-div d-flex flex-column align-items-center justify-content-center">
            <img className="key-img" src={bulbImg} alt="Handsacking img" />
            <h1 className="key-head m-0">46+</h1>
            <p className="key-text">startups built</p>
          </div>
        </div>
      </section>

      {/* --------------- Testinomial Section -------------------- */}
      <section className="testinomial-section">
        <h1 className="testinomial-title text-center"><span className="key-section-subtitle">Success</span> stories</h1>
        <section className="testinomial-sub-section d-flex justify-content-around">
          <div className="current-testinomial">
            <img src={currentTestinomialImg} alt="Current testinomial image" />
          </div>
          <div className="current-testinomial-text">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 38" fill="none">
              <path d="M0 38V28.0924H3.30562C6.01793 28.0088 7.92502 27.3399 9.02689 26.0858C10.2135 24.7481 10.8068 22.9087 10.8068 20.5677V16.9307H1.14425V0H22.1222V21.4455C22.1222 26.7965 20.6813 30.8933 17.7995 33.736C14.9177 36.495 11.0611 37.9164 6.22983 38H0ZM29.8778 38V28.0924H33.1834C35.8957 28.0088 37.8028 27.3399 38.9046 26.0858C40.0913 24.7481 40.6846 22.9087 40.6846 20.5677V16.9307H31.022V0H52V21.4455C52 26.7965 50.5591 30.8933 47.6773 33.736C44.7954 36.495 40.9389 37.9164 36.1076 38H29.8778Z" fill="url(#paint0_linear_215_1382)" />
              <defs>
                <linearGradient id="paint0_linear_215_1382" x1="18.3077" y1="41.8" x2="18.3077" y2="-15.7067" gradientUnits="userSpaceOnUse">
                  <stop offset="0.114586" stop-color="#AD00FF" />
                  <stop offset="1" stop-color="#E3A7FF" />
                </linearGradient>
              </defs>
            </svg>
            <p className="current-testinomial-para mt-3">Excellent Mentors to learn from. Easy to understand concepts, overall the best courses.</p>
            <span className="testinomial-feedback-name">- Jay Patel</span>
          </div>
        </section>
        <section className="testinomial-gallery-section mt-3 d-flex justify-content-between">
          <div className="testinomial-gallery-img">
            <img src={pedingTestinomialImg} alt="testinomial image1" />
          </div>
          <div className="testinomial-gallery-img">
            <img src={pedingTestinomialImg} alt="testinomial image2" />
          </div>
          <div className="testinomial-gallery-img">
            <img src={pedingTestinomialImg} alt="testinomial image3" />
          </div>
          <div className="testinomial-gallery-img">
            <img src={pedingTestinomialImg} alt="testinomial image4" />
          </div>
        </section>
      </section>

      {/* ----------------------- FAQ Section -------------- */}
      <section className="faq-section">
        <h1 className="faq-title text-center">Your Questions, <span className="key-section-subtitle">Answered</span></h1>

        <ul className="faq-question-ul p-0">
          <li className="faq-question-li d-flex justify-content-between p-3 list-style-none"><span>What is Web3?</span><span>+</span></li>
          <li className="faq-question-li d-flex justify-content-between p-3 list-style-none"><span>How does Web3 differ from Web2?</span><span>+</span></li>
          <li className="faq-question-li d-flex justify-content-between p-3 list-style-none"><span>What are the key technologies underlying Web3?</span><span>+</span></li>
          <li className="faq-question-li d-flex justify-content-between p-3 list-style-none"><span>How can I get started with Web3 development?</span><span>+</span></li>
          <li className="faq-question-li d-flex justify-content-between p-3 list-style-none"><span>What are some real-world applications and use cases of Web3?</span><span>+</span></li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}
