import React, { Suspense } from "react";
import Twitter from "./assets/Twitter";
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
        <Twitter />
      </a>
      <Footer />
    </>
  );
}

export default App;
