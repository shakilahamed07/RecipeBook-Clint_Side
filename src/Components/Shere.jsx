import React from "react";
import Marquee from "react-fast-marquee";

const Shere = () => {
  const imageLinks = [
    "https://www.kitchentreaty.com/wp-content/themes/kitchentreaty2020/mobile-header/logo.png",
    "https://beingnutritious.com/wp-content/uploads/2023/03/Logo-mobile-400x140-1.jpg",
    "https://www.cacfp.org/wp-content/uploads/sites/1980/2019/04/NCA-Logo-2024-768x329.png",
    "https://www.bowlofdelicious.com/wp-content/uploads/2021/09/mobile-400.jpg",
  ];

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center mb-3">Our Sponspors</h1>
      <p className="mx-auto text-center text-gray-500 mb-5 max-w-[600px] px-3">
        Our sponsors are the backbone of our success, providing essential
        support and resources. Their generous contributions help us grow,
        innovate, and reach new heights together. We deeply appreciate them.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-20  mb-20 mt-20">
        <Marquee>
          {imageLinks.map((imgLink, idx) => (
            <img
              key={idx}
              className="w-50 h-20 grayscale-90 mx-10 inline-block"
              src={imgLink}
              alt=""
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Shere;
