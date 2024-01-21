import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate, useParams } from "react-router-dom";
import useMovie from "../../../hooks/useMovie";
import useBlockRightClick from "../../../hooks/useBlockRightClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const Watch = () => {
  const navigate = useNavigate();
  const movieId = useParams().movieId;
  const movieRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [volume, setVolume] = React.useState(1);

  useBlockRightClick(movieRef);

  const { data, error, isLoading } = useMovie(movieId);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data...</p>;
  }

  const handlePlayPause = () => {
    const video = movieRef.current;

    if (video) {
      if (video.paused) {
        video
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Error playing video:", error);
          });
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVolumeChange = (value) => {
    const video = movieRef.current;
    setVolume(value);
    if (video) {
      video.volume = value;
    }
  };

  return (
    <>
      <div className="h-screen w-screen bg-black">
        <div className="fixed w-full h-full p-4 z-10 flex flex-col justify-between gap-8 bg-opacity-70">
          <div className="flex justify-between items-center">
            <ArrowLeftIcon
              onClick={() => navigate("/browse")}
              className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
            />
            <p className="text-white text-1xl md:text-3xl font-bold">
              {data?.title || "Loading..."}
            </p>
          </div>
          <div className="flex justify-between text-white">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                className="w-10 h-10 transition cursor-pointer hover:opacity-80"
                onClick={handlePlayPause}
              />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => handleVolumeChange(e.target.value)}
                className="w-32 h-5 bg-gray-300 appearance-none rounded-full mr-4"
              />
              <FontAwesomeIcon icon={faVolumeUp} className="text-white" />
            </div>
          </div>
        </div>
        <div className={`h-full w-full relative`}>
          <video
            ref={movieRef}
            className={`h-full w-full absolute top-0 left-0 object-cover`}
            controls={false}
            autoPlay
            muted={true}
            autoSave="autoSave"
            src={data?.videoUrl}
          ></video>
        </div>
      </div>
    </>
  );
};

export default Watch;
