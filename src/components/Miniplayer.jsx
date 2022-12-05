import React, { useRef } from "react";
import {
  BsFillPauseCircleFill,
  BsFillPlayCircleFill,
  BsSkipBackwardCircleFill,
  BsSkipForwardCircleFill,
} from "react-icons/bs";
import { useGlobalContext } from "../data/context";

const Miniplayer = () => {
  const { vidID, items, link, duration } = useGlobalContext();

  const audioRef = useRef();

  const handlePlay = () => {
    audioRef.current.play();
  };
  const handlePause = () => {
    audioRef.current.pause();
  };

  return (
    <>
      <div className="bg-zinc-900 h-fit py-4 w-full fixed bottom-0 left-0 px-4 md:px-16 lg:px-16">
        {items.map((item) => {
          if (vidID === item.id.videoId) {
            return (
              <div key={items.indexOf(item)}>
                <h2 className="font-bold text-lg text-blue-50 w-full mx-auto text-center my-2">
                  {item.snippet.title}
                </h2>
                {/* <h6 className="text-blue-300">{link}</h6> */}
                <audio src={link} ref={audioRef} />
              </div>
            );
          }
          return "";
        })}

        <div className="slider-container flex text-cyan-700 w-full justify-between px-2 md:px-16 lg:px-16 mt-4">
          <p className="font-semibold text-sm">00:00</p>
          <input
            type="range"
            min="0"
            max="100"
            className="seeker-slider w-full mx-2"
            onChange={null}
          />
          <p className="font-semibold text-sm">{(duration / 60).toFixed(2)}</p>
        </div>

        <div className="flex w-full gap-2 justify-center mx-auto py-4">
          <BsSkipBackwardCircleFill className="w-12 h-12 text-cyan-600 hover:text-white hover:shadow-md hover:shadow-cyan-500 rounded-full" />
          <BsFillPlayCircleFill
            className="w-12 h-12 text-cyan-600 hover:text-white hover:shadow-md hover:shadow-cyan-500 rounded-full"
            onClick={handlePlay}
          />
          <BsFillPauseCircleFill
            className="w-12 h-12 text-cyan-600 hover:text-white hover:shadow-md hover:shadow-cyan-500 rounded-full"
            onClick={handlePause}
          />
          <BsSkipForwardCircleFill className="w-12 h-12 text-cyan-600 hover:text-white hover:shadow-md hover:shadow-cyan-500 rounded-full" />
        </div>
      </div>
    </>
  );
};

export default Miniplayer;
