import React, { useState } from "react";
import { useGlobalContext } from "../data/context";

const Search = () => {
  const { query, searchFunc, searchFunc2, showResults } = useGlobalContext();
  const [typed, setTyped] = useState('')
  // let typed = '';

  // const typing = (e) => {
  //   typed = e.target.value;
  //   searchFunc(typed);
  // };

  // const submitFunc = (e1) => {
  //   e1.preventDefault();
  //   e1.target.addEventListener("keypress", (eve) => {
  //     if (eve.key === "Enter") {
  //       typed = document.getElementById("search").value;
  //       searchFunc2(typed);
  //       // showResults(1);
  //     }
  //   });
  // };

  return (
    <div className="search w-full pt-6 px-4 md:pt-10 md:pb-1 flex justify-center">
      <form
        className="w-4/5 md:w-4/5 flex gap-2"
        onSubmit={e => {
          e.preventDefault()
          e.target.addEventListener("keypress", (ev) => {
            if (ev.key === "Enter") {
              searchFunc2(typed)
            }
          })
        }}>
        <input
          type="text"
          className="py-3 px-5 text-sm bg-gray-600 focus:bg-gray-900/40 text-gray-300 w-full rounded-xl outline-none border border-gray-600 focus:border-gray-500 bg-transparent focus:bg-gray-600 focus:text-white"
          placeholder="Type something here"
          id="search"
          // value={query}
          value={typed}
          onChange={(e) => {
            setTyped(e.target.value)
          }}
        />
        {/* <button className="px-4 py-2 bg-gray-100 rounded text-black font-semibold" onClick={submitFunc}>Search</button> */}
      </form>
    </div>
  );
};

export default Search;
