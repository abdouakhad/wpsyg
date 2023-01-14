import React from "react";
import EventCounter from "./EventCounter";
import MainEventPage from "./MainEventPage";
import AboutEvent from "./AboutEvent";
import Speakers from "./Speakers";
const EventContainer = () => {
  return (
    <div>
      <MainEventPage />
      {/* <EventCounter /> */}
      <AboutEvent />
      <Speakers />
    </div>
  );
};

export default EventContainer;
