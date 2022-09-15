import { useState } from "react";
import Applications from "./components/Applications";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Review from "./components/Review";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <Hero />
        <Applications />
        <Review />
        <SignUp />
        <Footer />
      </div>
    </>
  );
}

export default App;
