import React from "react";
import { useGlobalContext } from "../data/context";

const Search = () => {
  const { query, searchFunc, searchFunc2 } = useGlobalContext();

  let typed = null;

  const typing = (e) => {
    typed = e.target.value;
    searchFunc(typed);
  };

  const submitFunc = (e1) => {
    e1.preventDefault();

    e1.target.addEventListener("keypress", (eve) => {
      if (eve.key === "Enter") {
        eve.preventDefault();
        typed = document.getElementById("search").value;
        searchFunc2(typed);
      }
    });
  };

  return (
    <div className="search p-6 md:p-10 flex justify-center">
      <form className="w-full md:w-4/5 flex gap-2" onSubmit={submitFunc}>
        <input
          type="text"
          className="py-3 px-5 text-sm text-gray-300 w-full rounded outline-none border border-gray-500 focus:border-gray-300 bg-transparent focus:text-white"
          placeholder="Type something here"
          id="search"
          value={query}
          onChange={typing}
        />
        {/* <button className="px-4 py-2 bg-gray-100 rounded text-black font-semibold" onClick={submitFunc}>Search</button> */}
      </form>
    </div>
  );
};

export default Search;
