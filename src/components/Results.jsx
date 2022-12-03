import React from "react";
import thumbnail from "../img/thumbnail.jpg";
import { useGlobalContext } from "../data/context";

const Results = () => {
  const { isLoading, items, error } = useGlobalContext();

  const fetchMusic = (ev) => {
    let vID = ev.currentTarget.id;
    console.log(vID);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-2 p-2 w-3/4 mx-auto mb-8">
        <h1 className="text-gray-300 font-bold text-2xl">Loading...</h1>
      </div>
    );
  }

  if (error === true) {
    return (
      <div className="flex flex-col gap-2 p-2 w-3/4 mx-auto mb-8">
        <h1 className="text-gray-400 font-bold text-2xl">API fetch error or No results available!</h1>
      </div>
    )
  }

  return (
    <>
      {items.map((content) => {
        return (
          <div
            className="flex flex-col gap-2 p-2 w-3/4 mx-auto mb-0"
            // key={content.id.videoId}
            key={items.indexOf(content)}
            id={items.indexOf(content)}
            // id={content.id.videoId}
            onClick={fetchMusic}
          >
            <div className="w-full flex flex-col mx-auto bg-gray-900 md:flex-row lg:flex-row gap-6 justify-between border rounded border-gray-500 p-6">
              <picture className="w-full md:w-1/2 lg:w-1/2">
                <img
                  // src={content.snippet.thumbnails.medium.url}
                  src={thumbnail}
                  alt="video-thumbnail"
                  className="w-full object-cover h-full"
                />
              </picture>

              <div className="flex flex-col text-white justify-between gap-4 w-full md:w-1/2 lg:w-1/2">
                <h2 className="title font-bold text-lg">
                  {/* {content.snippet.title} */}
                  {content.Description}
                </h2>
                <h6 className="channel text-sm font-semibold">
                  {/* {content.snippet.channelTitle} */}
                  {content.API}
                </h6>
                <h6 className="channel text-sm">
                  {/* Published At : {content.snippet.publishTime} */}
                  Published At : {content.Category}
                </h6>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Results;
