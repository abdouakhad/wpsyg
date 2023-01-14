import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import GalleryPageContainer from "../../components/pages/gallery";
import allGallery from "../../data/gallery.json";
import HeadTag from "../../components/layout/HeadTag";
import { getFolders, mapImageResources, search } from "../../lib/cloudinary";
const GalleryPage = ({
  images: defaultImages,
  nextCursor: defaultNextCursor,
  totalCount: defaultTotalCount,
  folders: defaultFolders,
}) => {
  return (
    <Fragment>
      <HeadTag name="Gallery" />
      <GalleryPageContainer
        nextCursor={defaultNextCursor}
        totalCount={defaultTotalCount}
        defaultFolders={defaultFolders}
        defaultImages={defaultImages}
      />
    </Fragment>
  );
};

export default GalleryPage;

export async function getStaticProps() {
  const results = await search({
    expression: 'folder=""',
  });
  const {
    resources,
    next_cursor: nextCursor,
    total_count: totalCount,
  } = results;

  const images = mapImageResources(resources);
  const { folders } = await getFolders();
  const gallery = folders.map((folder) => {
    return {
      title: folder.name,
      images: images.filter((image) => image.title.includes(folder.name)),
    };
  });
  return {
    props: {
      images: images || null,
      nextCursor: nextCursor || false,
      totalCount: totalCount || null,
      folders,
    },
  };
}
