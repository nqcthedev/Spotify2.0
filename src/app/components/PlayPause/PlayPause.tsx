import React, { FC } from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

interface PlayPauseProps {
  isPlaying: boolean;
  activeSong: string;
  song: string;
  handlePlay: () => void;
  handlePause: () => void;
}

const PlayPause: FC<PlayPauseProps> = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
  );

export default PlayPause;
