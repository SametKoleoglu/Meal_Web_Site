import React from "react";
import Home from "./components/Home";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <div>
      <Home/>
      <ScrollToTop smooth/>
    </div>
  );
};

export default App;
