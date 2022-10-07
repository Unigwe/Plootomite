import React from "react";

const Button = ({ styles }) => (
  <a href="#" target="_blank">
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-black-gradient rounded-[10px] outline-none ${styles}`}>
    Get me started, already
  </button></a>
);

export default Button;