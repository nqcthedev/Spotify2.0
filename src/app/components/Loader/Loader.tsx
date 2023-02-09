import React, { FC } from 'react';
import LoaderIcon from '../../../assets/loader.svg';

interface LoaderProps {
  title: string;
}

const Loader: FC<LoaderProps> = ({ title }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <img src={LoaderIcon} alt="loader" className="w-32 h-32 object-contain" />
      <h1 className="font-bold text-2xl text-white mt-2">
        {title || 'Loading'}
      </h1>
    </div>
  );
};

export default Loader;
