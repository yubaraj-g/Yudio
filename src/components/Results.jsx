import React, { useState } from "react";
// import thumbnail from "../img/thumbnail.jpg";
import { useGlobalContext } from "../data/context";

const Results = () => {
  const { isLoading, items, error, getVideoID, convertVideo, selectedVideo } = useGlobalContext();
  const [hide, setHide] = useState(0)
  // const fetchMusic = (ev) => {
  //   let vID = ev.currentTarget.id;
  //   let vThumb = content.snippet.thumbnails.medium.url;
  //   setHide(1)
  //   console.log(vID);
  //   console.log(vThumb);
  //   getVideoID(vID);
  //   convertVideo(vID);
  // };

  // console.log(isLoading)
  // console.log(items.length)

  const fetch = (object) => {
    // here the selected video details
    const vid = object.id.videoId
    const title = object.snippet.title
    const mediumImg = object.snippet.thumbnails.medium.url // this is the image url
    const channel = object.snippet.channelTitle
    const obj = {
      "selectedVideoId": vid,
      "selectedVideoTitle": title,
      "selectedVideoThumbnail": mediumImg,
      "selectedVideoChannel": channel
    }
    selectedVideo(obj)
    getVideoID(vid)
    convertVideo(vid)
    setHide(1)
  }

  if (isLoading === true && items.length === 0) {
    return (
      <div className="flex flex-col gap-2 p-2 w-3/4 mx-auto mb-8">
        <h1 className="text-gray-300 font-bold text-2xl">Loading...</h1>
      </div>
    );
  }

  if (isLoading === false && items.length === 0) {
    return <div className="hidden"></div>
  }

  if (error === true) {
    return (
      <div className="flex flex-col gap-2 p-2 w-3/4 mx-auto mb-8">
        <h1 className="text-gray-400 font-bold text-2xl">API fetch error or No results available!</h1>
      </div>
    )
  }


  if ((items.length > 0 && isLoading === false) || hide === 0) {
    return (
      <>
        <div className={hide === 1 ? "hidden" : "modal-body w-full h-[80%] overflow-y-auto absolute left-0 mx-auto mt-24"}>
          {items.map((content) => {
            return (
              <div
                className="flex flex-col gap-2 p-2 md:p-3 lg:p-2 w-4/5 md:w-3/5 lg:w-3/5 mx-auto mb-0 cursor-pointer"
                key={items.indexOf(content)}
                id={content.id.videoId}
                onClick={() => {
                  fetch(content)
                }}
              >
                <div className="w-full flex mx-auto h-32 bg-gray-900 md:flex-row lg:flex-row gap-6 justify-between border rounded border-gray-800 p-3">
                  <picture className="w-1/2 md:w-2/5 lg:w-1/5">
                    <img
                      src={content.snippet.thumbnails.medium.url}
                      // src={thumbnail}
                      alt="video-thumbnail"
                      className="w-full object-cover h-full"
                    />
                  </picture>

                  <div className="flex flex-col text-white justify-between w-3/4 md:w-3/5 lg:w-4/5">
                    <h2 className="title font-semibold text-sm lg:hidden" value={content.snippet.title}>
                      {content.snippet.title.slice(0, 40)}
                      {/* {content.Description} */}
                    </h2>
                    <h2 className="hidden md:hidden lg:block font-semibold text-sm" value={content.snippet.title}>
                      {content.snippet.title}
                      {/* {content.Description} */}
                    </h2>
                    <h6 className="channel text-xs font-medium text-gray-300">
                      {content.snippet.channelTitle}
                      {/* {content.API} */}
                    </h6>
                    <h6 className="channel text-xs font-thin md:block lg:block text-gray-400">
                      Published At : {content.snippet.publishTime}
                      {/* Published At : {content.Category} */}
                    </h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default Results;
