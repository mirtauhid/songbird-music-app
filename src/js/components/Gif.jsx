import React from "react";

function Gif({ src ,zIndex = 0, show = true }) {
  if (!show) return null;
  
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
