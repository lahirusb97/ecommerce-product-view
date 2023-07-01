import React, { useState, useEffect } from "react";
import imgb1 from "../assets/ProductImg/imgb1.jpg";
import imgb2 from "../assets/ProductImg/imgb2.jpg";
import imgb3 from "../assets/ProductImg/imgb3.jpg";
import imgb4 from "../assets/ProductImg/imgb4.jpg";
import imgb5 from "../assets/ProductImg/imgb5.jpg";
import imgbw from "../assets/ProductImg/imgbw.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import DetailBox from "./DetailBox";
export default function ImgBox() {
  const imgList = [imgb1, imgb2, imgb3, imgb4, imgb5, imgbw];
  const colors = ["blue", "black", "white"];
  const sizes = [39, 40, 41, 42, 43];
  const [selectSize, setSelectSize] = useState(0);

  const [curentImg, setCurrentImg] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectColor, setSelectColor] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleDropdownSelect = (eventKey) => {
    setActiveItem(eventKey);
    // Do something with the selected item
  };
  var settings = {
    infinite: true,
    slidesToShow: windowWidth < 490 ? 1 : 4,
    slidesToScroll: 1,
    arrows: windowWidth < 490 ? false : true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="max-w-7xl flex b1000:flex-row flex-col justify-center">
      <div className="xsm:max-w-lg w-full m-auto ">
        <img
          className="xsm:max-w-lg  w-full xsm:block hidden "
          src={imgList[curentImg]}
        />
        <div>
          <Slider {...settings}>
            {imgList.map((e, i) => (
              <div
                onClick={() => {
                  setCurrentImg(i);
                }}
                key={"s" + i}
              >
                <img className="w-full object-contain px-1 bg-white" src={e} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <DetailBox />
    </div>
  );
}
