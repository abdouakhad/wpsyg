import React from "react";

const AboutCard = ({ number, title, text }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-md h-full">
      <div className="text-xl md:text-3xl font-extrabold text-noir">
        {number}
      </div>
      <div className="text-noir text-lg md:text-2xl font-bold tracking-tighter uppercase">
        {title}
      </div>
      <div className="text-noir">
        <p className="leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default AboutCard;
