import React from "react"
import Nav from "./components/Nav"
import Search from "./components/Search"
import Results from "./components/Results"
import Fetched from "./components/Fetched"
import Miniplayer from "./components/Miniplayer"

function App() {
  return (
    <div className="bg-gray-800 h-screen flex flex-col items-center bg-no-repeat bg-fixed">
      <Nav />
      <div className="px-0 md:px-6 lg:px-6 w-full md:w-4/5 lg:w-4/5 h-full mt-12 md:mt-16 lg:mt-16">
        <Search />
        <Results />
        <Fetched />
        <Miniplayer />
      </div>
    </div>
  );
}

export default App;
