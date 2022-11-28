import React from "react";
import thumbnail from "../img/thumbnail.jpg";
import { useGlobalContext } from "../data/context";

const Results = () => {
  const { activity, type, isLoading, key } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-2 p-2 w-3/4 mx-auto mb-8">
        <h1 className="text-white font-bold text-2xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 p-2 w-3/4 mx-auto mb-8">
      <div className="w-full flex flex-col mx-auto md:flex-row lg:flex-row gap-6 justify-between border rounded border-gray-500 p-6">
        <picture className="w-full md:w-1/2 lg:w-1/2">
          <img
            src={thumbnail}
            alt="dummy-thumbnail"
            className="w-full object-fill h-full"
          />
        </picture>

        <div className="flex flex-col text-white justify-between gap-4">
          <h2 className="title font-bold">{activity}</h2>
          <h6 className="channel text-sm">Channel type: {type}</h6>
          <h6 className="channel text-sm">Key ID: {key}</h6>
        </div>
      </div>
    </div>
  );
};

export default Results;
