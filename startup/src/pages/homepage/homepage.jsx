import React from "react";
import FeaturedBooks from "../../components/featured-books/featured-books";
import FeaturedTeachers from "../../components/featured-teachers/featured-teachers";
import HeroImage from "../../components/hero-img/hero-img";
import Testimonials from "../../components/testimonials/testimonials";
import "./homepage.css";

function HomePage() {
    const sendToLocalStorage = (e)=>{
        e.preventDefault();
        document.querySelector('#form').reset();
    }
  return (
    <div>
      <HeroImage />
      <FeaturedBooks />
      <FeaturedTeachers />
      <Testimonials />
      <div className="animated">
        <h1 className="featured-games-title">Contact me, I won't bite!</h1>
      </div>
      <hr />
      <main className="main-cont-contact">
        <div className="container-contact">
          <div className="header-contact">
            <h2>Sign in</h2>
          </div>
          <form id="form" className="form-contact" onSubmit={(e)=>sendToLocalStorage(e)}>
            <div className="form-control">
              <label htmlFor="username">Name</label>
              <input type="text" id="username" />
            </div>
            <div className="form-control">
              <label htmlFor="text">Email</label>
              <input type="text" id="text" />
            </div>
            <div className="form-control">
              <label htmlFor="text">Message</label>
              <input type="text" id="text" />
            </div>
            <button type="submit" className="log-btn">
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
