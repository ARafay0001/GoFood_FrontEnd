import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FoodCard from "../Components/FoodCard";
import Carousel from "../Components/Carousel";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="flex flex-wrap">
        <FoodCard/>
        <FoodCard/>
        <FoodCard/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
