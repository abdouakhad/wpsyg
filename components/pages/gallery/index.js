import React, { useEffect } from "react";
import { Fragment } from "react";
import HeadTag from "../../../components/layout/HeadTag";
import SearchImage from "./search";
import Image from "next/image";
import ImageItem from "./ImageItem";
import { useState } from "react";
import { mapImageResources } from "../../../lib/cloudinary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const GalleryPageContainer = ({
  data,
  defaultFolders,
  defaultNextCursor,
  defaultTotalCount,
  defaultImages,
}) => {
  const [activeFolder, setActiveFolder] = useState();
  const [link, setLink] = useState("Gallery/2_days_Python_basics");
  const [images, setImages] = useState(defaultImages);

  function handleOnFolderClick(e) {
    const folderPath = e.target.dataset.folderPath;
    setActiveFolder(folderPath);
    // setNextCursor(undefined);
    setImages([]);
    // setTotalCount(0);
  }
  useEffect(() => {
    (async function run() {
      const results = await fetch("/api/search", {
        method: "POST",
        body: JSON.stringify({
          expression: `folder="${activeFolder || ""}"`,
        }),
      }).then((r) => r.json());

      const {
        resources,
        next_cursor: nextPageCursor,
        total_count: updatedTotalCount,
      } = results;

      const images = mapImageResources(resources);

      setImages(images);
      // setNextCursor(nextPageCursor);
      // setTotalCount(updatedTotalCount);
    })();
  }, [activeFolder]);
  console.log(link);
  return (
    <Fragment>
      <HeadTag name="Gallery" />
      <main className=" min-h-[500px] relative ">
        <div className="">
          <Image
            src="/team/team.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            alt="group"
          />
          <div className="absolute w-full h-full bg-black opacity-40"> </div>
        </div>
      </main>
      <div className="bg-pink py-8 px-4">
        <h1 className="text-white md:text-2xl text-center text-xl font-black container mx-auto mb-8">
          Gallery
        </h1>

        {/* <ul
          onClick={handleOnFolderClick}
          className="grid mb-8 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4 container mx-auto"
        >
          {defaultFolders?.map((folder) => {
            const isActive = folder.path === activeFolder;
            return (
              <li
                data-active-folder={isActive}
                className={`${
                  isActive
                    ? "bg-white hover:bg-white/80  text-black"
                    : "bg-black hover:bg-black/50  text-white"
                } transition transform duration-1000 ease-in-out  rounded `}
                key={folder.path}
              >
                <button
                  className="block capitalize p-4 border rounded w-full h-full"
                  data-folder-path={folder.path}
                  onClick={() => setLink(folder.path)}
                >
                  {folder.name.replaceAll("_", " ")}
                </button>
              </li>
            );
          })}
        </ul> */}
        <div className=" grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4 container mx-auto transition transform duration-1000 ease-in-out">
          {images?.slice(0, 8)?.map((d) => (
            // <p key={d.id}>{d.name}</p>
            <ImageItem
              key={d.id}
              // name={d.title}
              description={d.description}
              date={d.date}
              src={d.image}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default GalleryPageContainer;
