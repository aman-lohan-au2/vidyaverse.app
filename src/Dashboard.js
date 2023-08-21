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

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';

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
          slidesPerView={4}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="mySwiper">
          <SwiperSlide className="dashboard-swiper">
            <svg xmlns="http://www.w3.org/2000/svg" width="140" viewBox="150 3 280 73" fill="none">
              <path d="M269.525 73.1189H275.256V51.7167H269.525V73.1189ZM269.525 48.379H275.256V43.2893H269.525V48.379Z" fill="url(#paint0_linear_215_1378)" />
              <path d="M278.948 80.1286H284.679V70.7H284.763C285.985 72.5355 287.966 73.7455 291 73.7455C296.562 73.7455 300.354 69.3649 300.354 62.4394C300.354 55.7641 296.688 51.1333 290.958 51.1333C288.008 51.1333 285.985 52.5101 284.595 54.3874H284.468V51.7175H278.948V80.1286ZM289.778 69.0311C286.365 69.0311 284.553 66.4863 284.553 62.6062C284.553 58.7681 285.985 55.7224 289.567 55.7224C293.107 55.7224 294.539 58.5594 294.539 62.6062C294.539 66.6531 292.685 69.0311 289.778 69.0311Z" fill="url(#paint1_linear_215_1378)" />
              <path d="M311.786 73.7455C317.179 73.7455 320.887 71.1588 320.887 66.8616C320.887 61.8553 316.884 60.8541 313.261 60.1032C310.184 59.4773 307.319 59.3103 307.319 57.4748C307.319 55.9312 308.794 55.0966 311.027 55.0966C313.471 55.0966 314.946 55.9312 315.199 58.2257H320.382C319.96 53.9286 316.8 51.1333 311.112 51.1333C306.181 51.1333 302.305 53.3445 302.305 57.9752C302.305 62.6479 306.097 63.691 309.974 64.442C312.923 65.0259 315.662 65.2346 315.662 67.2789C315.662 68.7808 314.23 69.7403 311.701 69.7403C309.131 69.7403 307.361 68.6557 306.982 66.1941H301.672C302.01 70.7417 305.507 73.7455 311.786 73.7455Z" fill="url(#paint2_linear_215_1378)" />
              <path d="M342.645 73.1191V51.7169H336.914V64.0659C336.914 66.9028 335.271 68.9054 332.574 68.9054C330.13 68.9054 328.992 67.5286 328.992 65.0254V51.7169H323.304V65.9851C323.304 70.6575 326.001 73.7032 330.804 73.7032C333.838 73.7032 335.524 72.5767 336.999 70.6158H337.125V73.1191H342.645Z" fill="url(#paint3_linear_215_1378)" />
              <path d="M346.352 73.1196H352.083V60.6871C352.083 57.8501 353.642 56.0146 355.96 56.0146C358.067 56.0146 359.289 57.266 359.289 59.6859V73.1196H365.02V60.6871C365.02 57.8501 366.495 56.0146 368.896 56.0146C371.003 56.0146 372.225 57.266 372.225 59.6859V73.1196H377.956V58.7264C377.956 54.0537 375.386 51.1333 370.835 51.1333C368.096 51.1333 365.82 52.5518 364.345 54.8881H364.261C363.208 52.6352 361.017 51.1333 358.278 51.1333C355.286 51.1333 353.179 52.6352 351.999 54.5961H351.873V51.7175H346.352V73.1196Z" fill="url(#paint4_linear_215_1378)" />
              <path d="M269.609 36.4619H275.34V6.6323H269.609V36.4619Z" fill="url(#paint5_linear_215_1378)" />
              <path d="M289.352 37.0885C296.052 37.0885 300.645 32.1655 300.645 25.7824C300.645 19.3993 296.052 14.4764 289.352 14.4764C282.652 14.4764 278.059 19.3993 278.059 25.7824C278.059 32.1655 282.652 37.0885 289.352 37.0885ZM289.352 32.7496C285.812 32.7496 283.874 29.9544 283.874 25.7824C283.874 21.6104 285.812 18.7735 289.352 18.7735C292.849 18.7735 294.83 21.6104 294.83 25.7824C294.83 29.9544 292.849 32.7496 289.352 32.7496Z" fill="url(#paint6_linear_215_1378)" />
              <path d="M312.832 43.7637C316.035 43.7637 318.816 43.0128 320.628 41.3439C322.229 39.8837 323.198 37.8394 323.198 34.8356V15.0604H317.678V17.3133H317.594C316.288 15.5193 314.307 14.4764 311.61 14.4764C306.133 14.4764 302.256 18.5649 302.256 24.948C302.256 31.4146 306.975 35.1693 311.779 35.1693C314.518 35.1693 316.161 34.0847 317.426 32.6662H317.552V35.0025C317.552 37.9228 315.993 39.4664 312.748 39.4664C310.093 39.4664 308.872 38.4235 308.408 37.0885H302.719C303.309 41.2604 306.933 43.7637 312.832 43.7637ZM312.748 30.6219C309.799 30.6219 307.86 28.4942 307.86 24.8646C307.86 21.2767 309.799 19.0238 312.706 19.0238C316.161 19.0238 317.847 21.6938 317.847 24.8229C317.847 27.9935 316.372 30.6219 312.748 30.6219Z" fill="url(#paint7_linear_215_1378)" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M211.65 0C234.8 0 253.566 18.5802 253.566 41.5C253.566 64.4198 234.8 83 211.65 83C188.501 83 169.735 64.4198 169.735 41.5C169.735 18.5802 188.501 0 211.65 0ZM210.135 3.10542C205.354 3.77171 200.8 7.57599 197.266 13.9386C196.241 15.7842 195.315 17.8231 194.509 20.0247C199.315 18.8289 204.595 18.1239 210.135 18.0149V3.10542ZM190.967 21.0214C191.969 17.9064 193.196 15.0404 194.611 12.4928C196.363 9.33872 198.442 6.615 200.785 4.52302C188.045 8.18635 178.003 18.1288 174.303 30.7426C176.416 28.4229 179.167 26.3641 182.353 24.6294C184.926 23.2282 187.82 22.0139 190.967 21.0214ZM189.96 24.5288C188.752 29.2872 188.04 34.5143 187.93 40H172.871C173.544 35.2655 177.387 30.7573 183.813 27.258C185.677 26.2429 187.736 25.327 189.96 24.5288ZM190.961 40C191.086 34.0134 191.956 28.3931 193.397 23.4272C198.412 22.0012 204.089 21.1393 210.135 21.0154V27.4954C207.88 33.2129 203.279 37.7675 197.504 40H190.961ZM187.93 43H172.871C173.544 47.7345 177.387 52.2425 183.813 55.742C185.677 56.7571 187.736 57.673 189.96 58.4712C188.752 53.7128 188.04 48.4857 187.93 43ZM193.397 59.5728C191.956 54.6069 191.086 48.9866 190.961 43H197.504C203.279 45.2325 207.88 49.7871 210.135 55.5046V61.9846C204.089 61.8607 198.412 60.9988 193.397 59.5728ZM190.967 61.9786C187.82 60.9861 184.926 59.7718 182.353 58.3706C179.167 56.6359 176.416 54.5771 174.303 52.2574C178.003 64.8711 188.045 74.8137 200.785 78.4769C198.442 76.3849 196.363 73.6613 194.611 70.5071C193.196 67.9596 191.969 65.0936 190.967 61.9786ZM210.135 79.8946C205.354 79.2283 200.8 75.424 197.266 69.0614C196.241 67.2159 195.315 65.1768 194.509 62.9754C199.315 64.171 204.595 64.8761 210.135 64.9851V79.8946ZM222.516 78.4769C224.859 76.3849 226.938 73.6613 228.69 70.5071C230.105 67.9596 231.332 65.0936 232.334 61.9786C235.48 60.9861 238.375 59.7718 240.948 58.3706C244.134 56.6359 246.885 54.5771 248.998 52.2574C245.298 64.8711 235.256 74.8137 222.516 78.4769ZM228.792 62.9754C227.986 65.1768 227.06 67.2159 226.035 69.0614C222.501 75.424 217.948 79.2283 213.166 79.8946V64.9851C218.706 64.8761 223.986 64.171 228.792 62.9754ZM233.341 58.4712C235.565 57.673 237.624 56.7571 239.488 55.742C245.914 52.2425 249.757 47.7345 250.43 43H235.371C235.261 48.4857 234.549 53.7128 233.341 58.4712ZM232.34 43C232.215 48.9866 231.345 54.6069 229.904 59.5728C224.889 60.9988 219.212 61.8607 213.166 61.9846V55.5094C215.42 49.7898 220.022 45.2331 225.799 43H232.34ZM235.371 40H250.43C249.757 35.2655 245.914 30.7573 239.488 27.258C237.624 26.2429 235.565 25.327 233.341 24.5288C234.549 29.2872 235.261 34.5143 235.371 40ZM229.904 23.4272C231.345 28.3931 232.215 34.0134 232.34 40H225.799C220.022 37.7669 215.42 33.2102 213.166 27.4906V21.0154C219.212 21.1393 224.889 22.0012 229.904 23.4272ZM232.334 21.0214C235.48 22.0139 238.375 23.2282 240.948 24.6294C244.134 26.3641 246.885 28.4229 248.998 30.7426C245.298 18.1288 235.256 8.18635 222.516 4.52302C224.859 6.615 226.938 9.33872 228.69 12.4928C230.105 15.0404 231.332 17.9064 232.334 21.0214ZM213.166 3.10542C217.948 3.77171 222.501 7.57599 226.035 13.9386C227.06 15.7842 227.986 17.8231 228.792 20.0247C223.986 18.8289 218.706 18.1239 213.166 18.0149V3.10542Z" fill="url(#paint11_linear_215_1378)" />
              <defs>
                <linearGradient id="paint0_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint2_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint3_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint4_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint5_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint6_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint7_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint8_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint9_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>

                <linearGradient id="paint11_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>

                <linearGradient id="paint23_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint24_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint25_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint26_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint27_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint28_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint29_linear_215_1378" x1="-505.952" y1="41.5005" x2="1889.97" y2="41.5005" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" stop-opacity="0" />
                  <stop offset="0.433531" stop-color="#2D2D2D" />
                  <stop offset="0.567266" stop-color="#2D2D2D" />
                  <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </SwiperSlide>
          <SwiperSlide className="dashboard-swiper">Slide 2</SwiperSlide>
          <SwiperSlide className="dashboard-swiper">Slide 3</SwiperSlide>
          <SwiperSlide className="dashboard-swiper">Slide 4</SwiperSlide>
          <SwiperSlide className="dashboard-swiper">Slide 5</SwiperSlide>
          <SwiperSlide className="dashboard-swiper">Slide 6</SwiperSlide>
          <SwiperSlide className="dashboard-swiper">Slide 7</SwiperSlide>
          <SwiperSlide className="dashboard-swiper">Slide 8</SwiperSlide>
          <SwiperSlide className="dashboard-swiper">Slide 9</SwiperSlide>
        </Swiper>
      </section>

      {/* --------------- Explore Section ------------ */}
      <section className="explore-container mt-5">
        <h1 className="explore-heading text-center">Explore <span className="explore-subheading">Vidyaverse</span></h1>
        <div className="position-relative explore-box connect-box mx-auto px-5 py-4">
          <img className="seating-astro" src={SeatingAstro} alt="Seating Astronaut" />
          <div className="explore-left-div connect-left-box d-flex flex-column justify-content-between pb-5">
            <h3 className="connect-left-box-text"><span className="connect-left-box-subtext">Connect.</span> Grow. Thrive</h3>
            <p className="connect-left-pra-text"> Here at Vidyaverse, Engage with the like-minded WEB3 enthusiast. Connect with more people & Build !!</p>
            <p className="connect-left-pra-text2">Learn new skills for WEB3 Era, Understand the future of it. Upskill your WEB3 Knowledge.</p>
          </div>
          <div className="connect-right-box"></div>
        </div>
        <div className="explore-box technology-box mx-auto my-5 px-5 d-flex justify-content-between">
          <div className="explore-left-div technology-left-box">
            <h3 className="technology-left-box-text mt-4"><span className="technology-left-box-subtext">Explore</span>  WEB3 Technologies</h3>
            <p className="technology-left-pra-text">Find the best Course to learn new technologies in WEB3 Space</p>
            <p className="technology-left-pra-text2">Interested learning? <a href="#">Enroll now</a></p>
            <div className="technology-type-div position-relative">
              <div className="position-absolute technology-type-defi">DeFi</div>
              <div className="position-absolute technology-type-crypto">Cryptocurrency</div>
              <div className="position-absolute technology-type-web3">WEB3 Wallet</div>
              <div className="position-absolute technology-type-decen">Decentralized Storage</div>
            </div>
          </div>
          <div className="technology-right-box position-relative">
            <div className="position-absolute technology-blockchain">Blockchain</div>
            <div className="position-absolute technology-nft">NFTs</div>
            <div className="position-absolute technology-dapps">dApps</div>
            <div className="position-absolute technology-privacy">Privacy Coins</div>
            <div className="position-absolute technology-dex">DEXs</div>


          </div>
        </div>
        <div className="explore-box learn-box mx-auto my-5 px-5 py-4 d-flex justify-content-between">
          <div className="explore-left-div learn-left-box d-flex flex-column justify-content-between">
            <h3 className="learn-left-box-text"><span className="learn-left-box-subtext">Learn</span> and Fun</h3>
            <div>
              <p className="learn-left-box-pra-text">Courses curated such that even a beginner can dive into the WEB3 space easily.</p>
              <button className="learn-btn">View Courses
                <img src={arrowIcon} alt="arrow icon btn" className="mx-2" />
              </button>
            </div>
          </div>
          <div className="learn-right-box position-relative">
            <div className="learn-video-card learn-video-card1">
              <h1>INTRODUCTION TO WEB3</h1>
            </div>
            <div className="learn-video-card learn-video-card2"></div>
            <div className="learn-video-card learn-video-card3"></div>
          </div>
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
