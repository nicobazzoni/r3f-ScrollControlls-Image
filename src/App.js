import React, { Suspense } from "react";
import twitter from "./assets/twitter.svg";
import Images from "./components/Images";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Images />
      </Suspense>
      <Header />
      <a
        href="https://twitter.com/NowMoDesign/"
        style={{ position: "absolute", bottom: 40, left: "4vw", width: 50 }}
      >
        <img src={twitter} alt="logo" />
      </a>
      <Footer />
    </>
  );
}

export default App;
