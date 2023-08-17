import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import "./App.css";
import airman1 from "./images/Group.png";
import airman2 from "./images/Group1.png";
import SeatingAstro from './images/seatingAstro.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay,Pagination,Navigation } from 'swiper/modules';

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
        <div className="position-relative explore-box connect-box mx-auto">
          <img className="seating-astro" src={SeatingAstro} alt="Seating Astronaut" />
        </div>
        <div className="position-relative explore-box technology-box mx-auto my-5">
        </div>
        <div className="position-relative explore-box learn-box mx-auto my-5">
        </div>
      </section>

      {/* -------------- Course Offer Section ----------- */}

      <section className="offer-course-section mt-5">

      </section>

      <Footer />
    </div>
  );
}
