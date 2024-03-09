import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const InfiniteMovingCardsDemo = () => {
  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden py-14 md:py-24">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

const testimonials = [
  {
    name: "f1",
    image: "/fausti2.jpg",
  },
  {
    name: "f2",
    image: "/fausti4.jpg",
  },
  {
    name: "f4",
    image: "/img17.jpg",   
  },
  {
    name: "f3",
    image: "/img6.jpg",
  },
  {
    name: "f5",
    image: "/img12.jpg",
    
  },
  {
    name: "f6",
    image: "/fausti3.jpg",
  }
];
export default InfiniteMovingCardsDemo;
