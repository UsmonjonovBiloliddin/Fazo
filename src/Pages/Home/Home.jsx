import React from "react";
import {
  Brands,
  Cheaper,
  Header_Slider,
  Main_slider,
  Popular_categories,
  Recommend,
  Suggestions,
} from "../../index";

const Home = () => {
  return (
    <div className="Home">
      <Header_Slider />
      <Suggestions />
      <Popular_categories />
      <Main_slider />
      <Cheaper />
      <Recommend />
      <Brands />
    </div>
  );
};

export default Home;
