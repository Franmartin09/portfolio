"use client";

import { useEffect, useState } from 'react';
import anime from 'animejs';

const StarrySky = () => {
  const [dimensions, setDimensions] = useState({ vw: 0, vh: 0 });
  const num = 60;

  useEffect(() => {
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    setDimensions({ vw, vh });

    starryNight();
    shootingStars();
  }, []);

  const starryNight = () => {
    anime({
      targets: "#sky .star",
      opacity: [
        { duration: 700, value: "0" },
        { duration: 700, value: "1" },
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 50 * i,
    });
  };

  const shootingStars = () => {
    anime({
      targets: "#shootingstars .wish",
      easing: "linear",
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [{ duration: 700, value: "1" }],
      width: [{ value: "150px" }, { value: "0px" }],
      translateX: 350,
    });
  };

  const randomRadius = () => Math.random() * 0.7 + 0.6;

  const getRandomX = () => Math.floor(Math.random() * dimensions.vw).toString();

  const getRandomY = () => Math.floor(Math.random() * dimensions.vh).toString();

  return (
    <div id="App" className="fixed inset-0 z-0 pointer-events-none">
      <svg id="sky" className="absolute inset-0 overflow-hidden">
        {[...Array(num)].map((_, y) => (
          <circle
            cx={getRandomX()}
            cy={getRandomY()}
            r={randomRadius()}
            stroke="none"
            strokeWidth="0"
            fill="white"
            key={y}
            className="star"
          />
        ))}
      </svg>
      <div id="shootingstars" className="absolute inset-0 overflow-hidden transform rotate-[120deg]">
        {[...Array(60)].map((_, y) => (
          <div
            key={y}
            className="wish"
            style={{
              left: `${getRandomY()}px`,
              top: `${getRandomX()}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StarrySky;
