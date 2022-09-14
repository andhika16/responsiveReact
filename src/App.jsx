import { useState } from "react";
import Applications from "./components/Applications";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <div className="App h-[1000px]">
        <Navbar />

        <Hero />
        <Applications />
        <Review />
        <SignUp />
      </div>
    </>
  );
}

export default App;
