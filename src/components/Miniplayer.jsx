import React, { useRef, useState } from "react";
import {
  BsFillPauseCircleFill,
  BsFillPlayCircleFill,
  BsSkipBackwardCircleFill,
  BsSkipForwardCircleFill,
} from "react-icons/bs";
import { useGlobalContext } from "../data/context";

const Miniplayer = () => {
  const { vidID, items, link, duration } = useGlobalContext();

  const [playBtn, setPlayBtn] = useState(0)
  const [duration2, setDuration2] = useState(0) // total duration of the song
  const [currentTime, setCurrentTime] = useState(0) // current time of the song in seconds
  const [totalMins, setTotalMins] = useState(0)
  const [totalSecs, setTotalSecs] = useState(0)
  const [curMins, setCurMins] = useState(0)
  const [curSecs, setCurSecs] = useState(0)
  const [percentage, setPercentage] = useState(0) // percentage of the seeker in audio player

  const audioRef = useRef();

  const handlePlay = () => {
    setPlayBtn(1)
    audioRef.current.play();
  };
  const handlePause = () => {
    setPlayBtn(0)
    audioRef.current.pause();
  };

  const onChange = (ev) => {
    audioRef.current.currentTime = (audioRef.current.duration / 100) * ev.target.value
  }

  const getCurrDuration = (ev) => {
    const percent = ((ev.currentTarget.currentTime / ev.currentTarget.duration) * 100).toFixed(2)
    const timeseek = ev.currentTarget.currentTime // in seconds format here
    setPercentage(Number(percent))
    // convert time to minutes and hours
    // console.log(timeseek)
    setCurrentTime(timeseek)

    let tmins = Math.floor(ev.currentTarget.duration / 60) < 10 ? `0${Math.floor(ev.currentTarget.duration / 60)}` : Math.floor(ev.currentTarget.duration / 60)
    let tsecs = Math.floor(ev.currentTarget.duration % 60) < 10 ? `0${Math.floor(ev.currentTarget.duration % 60)}` : Math.floor(ev.currentTarget.duration % 60)

    setTotalMins(tmins)
    setTotalSecs(tsecs)

    let mins = Math.floor(timeseek / 60) < 10 ? `0${Math.floor(timeseek / 60)}` : Math.floor(timeseek / 60)
    let secs = Math.floor(timeseek % 60) < 10 ? `0${Math.floor(timeseek % 60)}` : Math.floor(timeseek % 60)
    setCurMins(mins)
    setCurSecs(secs)
  }

  return (
    <>
      <div className="bg-zinc-900 h-fit py-4 w-full fixed bottom-0 left-0 px-4 md:px-16 lg:px-16">
        {items.map((item) => {
          if (vidID === item.id.videoId) {
            return (
              <div key={items.indexOf(item)}>
                {/* <h2 className="font-bold text-lg text-blue-50 w-full mx-auto text-center my-2">
                  {item.snippet.title}
                </h2> */}
                <audio src={link} ref={audioRef}
                  onLoadedData={ev => {
                    // console.log(ev.target.duration)
                    setDuration2(ev.target.duration.toFixed(2))
                  }}
                  onTimeUpdate={getCurrDuration}
                />
              </div>
            );
          }
          return null;
        })}

        <div className="slider-container flex text-cyan-700 w-full justify-between px-2 md:px-16 lg:px-16 mt-4">
          <p className="font-semibold text-sm">{curMins}:{curSecs}</p>
          <input
            type="range"
            min="0"
            max="100"
            step="0.01"
            value={percentage || 0}
            className="seeker-slider w-full mx-2"
            onChange={onChange}
          />
          {/* <p className="font-semibold text-sm">{(duration / 60).toFixed(2)}</p> */}
          <p className="font-semibold text-sm">{totalMins}:{totalSecs}</p>
        </div>

        <div className="flex w-full gap-2 justify-center mx-auto py-4">
          <BsSkipBackwardCircleFill className="w-12 h-12 text-cyan-600 hover:text-white hover:shadow-md hover:shadow-cyan-500 rounded-full" />
          {playBtn === 0 ?
            <BsFillPlayCircleFill
              className="w-12 h-12 text-cyan-600 hover:text-white hover:shadow-md hover:shadow-cyan-500 rounded-full"
              onClick={handlePlay}
            /> :
            <BsFillPauseCircleFill
              className="w-12 h-12 text-cyan-600 hover:text-white hover:shadow-md hover:shadow-cyan-500 rounded-full"
              onClick={handlePause}
            />
          }
          <BsSkipForwardCircleFill className="w-12 h-12 text-cyan-600 hover:text-white hover:shadow-md hover:shadow-cyan-500 rounded-full" />
        </div>
      </div>
    </>
  );
};

export default Miniplayer;
