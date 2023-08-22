import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import lady from "../images/lady.png";
import './about.css'
import Carousels from "../Carousels/Carousels";


const About = () => {
  return (
    <section>
      <section className="about-container position-relative" style={{ paddingTop: "20px" }} >
        <Navbar />
        <div className="about-heading-section position-absolute" >
          <h1 className="text-center about-heading"> We Educate About </h1>
          <h1 className="text-center about-subheading" >  WEB3 </h1>
          <p className="text-center"> Learn, Innovate, Transform <br /> Web 3 Education Redefining the Future! </p>
        </div>
      </section>
      {/* ---------- RoadMap Section ------------------- */}
      <section className="about-video-section" >
        <div className="m-auto  about-video-div ">
          <div className=" about-video-subdiv position-relative" >
            <img className="about-video w-100 h-100" src={lady} />
          </div>
        </div>
        <div className="about-roadmap">
          <h1 className="about-roadmap-title text-center mt-5">Progressing from <span className="text-color">0</span> to <span className="text-color">0.1</span></h1>
          <div className="roadmap m-auto d-flex">
            <div className="roadmap-container road-lft-div">
              <div className="roadmap-portion portion-lft1 portion1">
                <button className="roadmap-portion-btn">October 21</button>
                <h3 className="roadmap-portion-title lft-title">Vidhyaverse Begins
                  <div className="roadmap-indicator lft-ind"><div className="roadmap-inner-indicator"></div></div>
                </h3>
                <p className="roadmap-portion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
              </div>
              <div className="roadmap-portion portion-lft1 portion2">
                <button className="roadmap-portion-btn">October 21</button>
                <h3 className="roadmap-portion-title lft-title">Vidhyaverse Begins
                  <div className="roadmap-indicator lft-ind"><div className="roadmap-inner-indicator"></div></div>
                </h3>
                <p className="roadmap-portion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" viewBox="0 0 6 958" fill="none">
              <path d="M3 0.113249L0.113249 3L3 5.88675L5.88675 3L3 0.113249ZM2.99996 957.209L5.88671 954.322L2.99996 951.435L0.113207 954.322L2.99996 957.209ZM2.5 3L2.49996 954.322L3.49996 954.322L3.5 3L2.5 3Z" fill="#2D2D2D" />
            </svg>
            <div className="roadmap-container roadmap-rgt-div">
              <div className="roadmap-portion portion-rgt portion3">
                <button className="roadmap-portion-btn">October 21</button>
                <h3 className="roadmap-portion-title rgt-title">
                  <div className="roadmap-indicator rgt-ind"><div className="roadmap-inner-indicator"></div></div>
                  Vidhyaverse Begins</h3>
                <p className="roadmap-portion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
              </div>
              <div className="roadmap-portion portion-rgt portion4">
                <button className="roadmap-portion-btn ">October 21</button>
                <h3 className="roadmap-portion-title rgt-title">
                  <div className="roadmap-indicator rgt-ind"><div className="roadmap-inner-indicator"></div></div>

                  Vidhyaverse Begins</h3>
                <p className="roadmap-portion-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------ Carousel Secion ----------------- */}
      <section className="carousel-section">
        <h3 className="about-carousel-title text-center">We are Trusted by the best!</h3>
        <Carousels />
      </section>
      {/* ------------- Core Value Section -------------- */}
      <section className="core-section-section my-5">
        <h1 className="text-center core-value-title mb-5">Our <span className="core-value-subtitle">CoreValues</span></h1>
        <div className="core-value-row m-auto">
          <div class="card core-section-card">
            <div class="card-body">
              {/* <h5 class="card-title">Special title treatment</h5> */}
              {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div class="card core-section-card">
            <div class="card-body">
              {/* <h5 class="card-title">Special title treatment</h5> */}
              {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
          <div class="card core-section-card">
            <div class="card-body">
              {/* <h5 class="card-title">Special title treatment</h5> */}
              {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
      </section>
      {/* ------------------- Stellar Section ------------------- */}
      <section className="stellar-section mx-auto d-flex justify-content-between">
        <h1 className="steller-tittle">Our <span className="steller-subtittel">Stellar</span> Team</h1>
        <div className="steller-gallery">
          <div className="steller-gallery-div ">
            <div className="stellar-card"></div>
            <div className="stellar-card"></div>
            <div className="stellar-card"></div>

            <div className="stellar-card"></div>
            <div className="stellar-card"></div>
            <div className="stellar-card"></div>

            <div className="stellar-card"></div>
            <div className="stellar-card"></div>
            <div className="stellar-card"></div>

            <div className="stellar-card"></div>
            <div className="stellar-card"></div>
            <div className="stellar-card"></div>
          </div>
          <p className="steller-gallery-content mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.</p>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default About;
