import { useState } from "react";
import Applications from "./components/Applications";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App h-[1000px]">
      <Navbar />
      <div className="sm:w-[85%] py-10 mx-5 sm:mx-auto">
        <Hero />
        <Applications />
      </div>
    </div>
  );
}

export default App;
