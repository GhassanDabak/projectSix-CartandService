import SimpleImageSlider from "react-simple-image-slider";
import './testimonials.css'
import quotes from '../../data/quotes/quotes'

function Testimonials() {
  const images = [
    { url: "./images/insp.png" },
    { url: "images/soc.jpg" },
    { url: "images/bill.png" },
  ];

  return (
    <div>
      <h1 className="featured-games-title">Quotes</h1>
      <hr />
      <div className="img-slider-container">
        <SimpleImageSlider className="img-slider"
          width="60%"
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
      </div>
    </div>
  );
}
export default Testimonials;
