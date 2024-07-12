import React, { useState, useEffect } from "react";
import "./style.css";
import dogplaying from "../../Assets/Services/DogPlaying/dogplay.jpg";
import doggrooming from "../../Assets/Services/DogGrooming/doggroomingg.jpg";
import dogtraining from "../../Assets/Services/DogTraining/dogtrainingg.jpg";
import doghealth from "../../Assets/Services/DogHealth/doghealthh.jpg";

function Service() {
  const [sliderItems] = useState([
    {
      img: dogplaying,
      title: "Layanan Bermain",
      type: "Playing",
      description:
        "Kami menyediakan area bermain yang aman dan menyenangkan bagi anjing Anda. Dengan fasilitas yang lengkap dan pengawasan yang ketat, anjing Anda akan menikmati waktu bermain yang berkualitas.",
    },
    {
      img: doggrooming,
      title: "Layanan Grooming",
      type: "Grooming",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
    },
    {
      img: dogtraining,
      title: "Layanan Pelatihan",
      type: "Training",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
    },
    {
      img: doghealth,
      title: "Layanan Perawatan Kesehatan",
      type: "Health",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliderItems.length) % sliderItems.length
    );
  };

  return (
    <div id= "services" className="slider">
      <div className="list">
        {sliderItems.map((item, index) => (
          <div
            className={`item ${index === currentIndex ? "active" : ""}`}
            key={index}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <img src={item.img} alt={item.title} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="type">{item.type}</div>
              <div className="description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {sliderItems.map((item, index) => (
          <div
            className={`item ${index === currentIndex ? "active" : ""}`}
            key={index}
          >
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </div>

      <div className="nextPrevArrows">
        <button className="prev" onClick={handlePrev}>
          {"<"}
        </button>
        <button className="next" onClick={handleNext}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Service;
