import React from "react";
import { Light } from "./icons/Light";
import { Dark } from "./icons/Dark";

export default function Header({isDark, handleChangeTheme}) {
  return (
    <div className=" w-full h-[70px] bg-pink-400 flex justify-around items-center text-white rounded-b-full">
      <div className="text-2xl font-medium tracking-wider">
        <a href="#">EduWell</a>
      </div>
      <ul className="flex gap-3.5 font-thin tracking-wide">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Courses</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <button onClick={handleChangeTheme}> 
            {
              isDark ? ( 
                <Light/>
              ) : (
                <Dark/>
              )
            }
          </button>
        </li>
      </ul>
    </div>
  );
}
