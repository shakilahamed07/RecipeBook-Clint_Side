import React from "react";
import { Slide } from "react-awesome-reveal";
import { useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["make Recipe?", "love Recipe?"],
    loop: 0,
    delaySpeed: 1000,
  });

  return (
    <div className="bg-[url(https://i.ibb.co/xqnMX6TB/Beanar.jpg)] h-[630px] bg-no-repeat bg-cover sm:bg-[0px] bg-[-220px] rounded-xl">
      <div className="sm:ml-20  pt-33 sm:text-start text-center">
        <h1 className="sm:text-6xl text-4xl font-extrabold sm:leading-20 leading-14 text-black">
          <span className="text-primary">Welcome! </span>Are you <br /> {text}
        </h1>

        <Slide triggerOnce>
          <p className="max-w-[500px] text-gray-900  mt-6 mb-9 sm:px-0 px-3">
            Feed your imagination and spark your creativity. From cravings to
            creations, let your ideas flourish and uncover the perfect recipe
            waiting to be discovered.
          </p>
          <button className="py-2 px-5 bg-primary rounded-full text-white">
            Get Started
          </button>
        </Slide>
      </div>
    </div>
  );
};

export default Hero;
