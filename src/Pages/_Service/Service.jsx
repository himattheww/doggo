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
        "Kami menawarkan layanan grooming profesional untuk menjaga penampilan dan kesehatan bulu anjing Anda. Dari mandi, potong kuku, hingga pemotongan rambut, kami memberikan perawatan yang terbaik.",
    },
    {
      img: dogtraining,
      title: "Layanan Pelatihan",
      type: "Training",
      description:
        "Paket pelatihan khusus yang disesuaikan dengan kebutuhan dan tingkat keterampilan anjing Anda. Dari pelatihan dasar hingga pelatihan lanjutan, kami membantu anjing Anda menjadi lebih patuh dan terampil.",
    },
    {
      img: doghealth,
      title: "Layanan Perawatan Kesehatan",
      type: "Health",
      description:
        "Kami memberikan perawatan kesehatan yang komprehensif untuk menjaga kesehatan dan kesejahteraan anjing Anda. Layanan termasuk pemeriksaan kesehatan rutin, vaksinasi, dan perawatan medis lainnya.",
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
