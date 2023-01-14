import React, { useState } from "react";
import Image from "next/image";
const ImageItem = ({ name, src, date, description }) => {
  const [hovered, setHovered] = useState(false);
  const handleHovered = () => {
    setHovered(!hovered);
  };
  return (
    <>
      <div className="relative bg-white p-2 rounded ">
        <div className=" flex justify-center">
          <Image
            src={src}
            width="260"
            height="260"
            objectFit="cover"
            // objectPosition="center"
            className="w-full"
            alt={name}
          />
          {/* <div className='flex justify-between text-pink opacity-75'>
            <p className='truncate'>{name}</p>
            <p className='truncate'>{date}</p>
          </div>
          {hovered && (
            <div className='transition transform duration-1000 hover:scale-100 scale-75  absolute top-0 bg-pink w-full h-full rounded flex justify-center items-center text-center opacity-90'>
              {description} description
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default ImageItem;
