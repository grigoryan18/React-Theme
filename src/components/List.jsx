import React from "react";

export default function List({isDark}) {

  const textColorStyle = {color: isDark ? "white" : "#292a2d"}; 
  return (
    <div className="bg-white w-full h-full flex items-center justify-between transition-all"
    style={{background: isDark ? "#292a2d" : null}} 
    > 
      <div className="p-12 w-[500px]">
        <p className="tracking-wide pb-10 font-thin transition-all" style={textColorStyle}>Welcome To Our School</p>
        <h1 className="pb-10 font-extrabold text-5xl transition-all" style={textColorStyle}>
          Best Place To Learn Graphic
          <br/> 
          <span className="text-pink-400">Design!</span>
        </h1>
        <button className="text-white border-0 px-3.5 py-2 rounded-lg text-xs bg-pink-400">
          JOIN US NOW!
        </button>
      </div>
      <div className="w-[500px] p-7">
        <img
          src="https://templatemo.com/templates/templatemo_573_eduwell/assets/images/banner-right-image.png"
          alt=""
        />
      </div>
    </div>
  );
}
