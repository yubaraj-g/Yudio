import React from "react"
import Nav from "./components/Nav"
import Search from "./components/Search"
import Results from "./components/Results"
import Fetched from "./components/Fetched"
import Miniplayer from "./components/Miniplayer"
import { useGlobalContext } from './data/context'

function App() {
  const state = useGlobalContext()
  const { selectedVid } = state

  return (
    <div className="bg-gray-800 h-screen flex flex-col items-center bg-no-repeat bg-fixed overflow-hidden">
      <Nav />
      <div className="px-0 md:px-6 lg:px-6 w-full md:w-[60%] lg:w-2/6 h-[80%] md:h-3/5 lg:h-2/3 mt-12 md:mt-16 lg:mt-16 flex flex-col items-center">
        <Search />
        {
          selectedVid.selectedVideoId !== undefined ?
            <Fetched /> :
            <Results />
        }

        <Miniplayer />
      </div>
    </div>
  );
}

export default App;
