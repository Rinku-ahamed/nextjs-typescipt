"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Slider1 from "../../public/assets/slider1.jpg";
import Slider2 from "../../public/assets/slider2.jpg";
import Slider3 from "../../public/assets/slider3.jpg";
import Image from "next/image";
const BannerSlider = () => {
  return (
    <div>
      <Carousel showArrows={true}>
        <div>
          <Image
            src={Slider1}
            width={800}
            height={400}
            className="w-full h-[250px] md:h-[400px] object-cover object-top"
            alt="banner"
          />
        </div>
        <div>
          <Image
            src={Slider2}
            width={1100}
            height={400}
            className="w-full h-[250px] md:h-[400px] object-cover object-top"
            alt="banner"
          />
        </div>
        <div>
          <Image
            src={Slider3}
            width={1100}
            height={400}
            className="w-full h-[250px] md:h-[400px] object-cover object-top"
            alt="banner"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerSlider;
