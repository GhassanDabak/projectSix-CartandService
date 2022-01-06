import React from "react";
import FeaturedGames from "../../components/featured-games/featured-games";
import FeaturedRooms from "../../components/featured-rooms/featured-rooms";
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
      <FeaturedGames />
      <FeaturedRooms />
      <Testimonials />
      <div className="animated">
        <h1 className="featured-games-title">Contact me, I won't bite!</h1>
      </div>
      <hr />
      <main class="main-cont-contact">
        <div class="container-contact">
          <div class="header-contact">
            <h2>Sign in</h2>
          </div>
          <form id="form" className="form-contact" onSubmit={(e)=>sendToLocalStorage(e)}>
            <div class="form-control">
              <label for="username">Name</label>
              <input type="text" id="username" />
            </div>
            <div class="form-control">
              <label for="text">Email</label>
              <input type="text" id="text" />
            </div>
            <div class="form-control">
              <label htmlFor="text">Message</label>
              <input type="text" id="text" />
            </div>
            <button type="submit" class="log-btn">
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
