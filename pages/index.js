import FirstPage from "../components/pages/homepage/page1";
import { Fragment, useEffect, useState } from "react";
import HeadTag from "../components/layout/HeadTag";
import { search, mapImageResources } from "../lib/cloudinary";
export default function Home({}) {
  return (
    <Fragment>
      <HeadTag name="Home" />
      <div className="">
        <FirstPage />
      </div>
    </Fragment>
  );
}
