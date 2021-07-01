import React from "react";
import img1 from '../../images/Assets/1.jpeg';
import img2 from '../../images/Assets/2.jpeg';
import img3 from '../../images/Assets/3.jpeg';
import img4 from '../../images/Assets/4.jpeg';
import img5 from '../../images/Assets/5.jpeg';
import img6 from '../../images/Assets/6.jpeg';
import img7 from '../../images/Assets/7.jpeg';
import img8 from '../../images/Assets/8.jpeg';
import img9 from '../../images/Assets/9.jpeg';

function Gif({ zIndex = 0, show = true }) {
  if (!show) return null;
  var images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9
  ];
  
  const src = images[Math.floor(Math.random()*images.length)];
  return (
    <img
      style={{
        position: "absolute",
        height: '100%',
        width: '100%',
        top: "0",
        left: "0",
        objectFit: "cover",
        zIndex: zIndex,
      }}
      src={src}
      alt=""
    />
  );
}

export default Gif;
