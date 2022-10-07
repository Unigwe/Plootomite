import React from "react";

const Button1 = ({ styles }) => (
  <a href="#" target="_blank">
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-black-gradient rounded-[10px] outline-none ${styles}`}>
    Browse our knowledgebase
  </button></a>
);

export default Button1;