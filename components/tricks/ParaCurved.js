import React from "react";

import classes from "./ParaCurved.module.css";
const ParaCurved = () => {
  return (
    <div className="container">
      <div className="contenu ">
        <div className={`${classes.hero} flex py-5`}>
          <div className={`${classes.content} px-3 `}>
            <span className="font-bold text-3xl text-noir">Who we are?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParaCurved;
