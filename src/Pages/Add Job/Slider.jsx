/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";


const Slider = ({items}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, [items.length]);
    return (
        <div>
             <div className="relative h-[70vh] rounded-md overflow-hidden w-full">
      <div className="flex" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className=" p-4 m-2 rounded-md">{item}</div>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default Slider;