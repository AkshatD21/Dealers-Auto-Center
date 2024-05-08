// src/BigCard.jsx
import React from "react";
import SmallCard from "./SmallCard";
import carImage1 from "./assets/car1.jpeg";
import carImage2 from "./assets/car2.jpeg";
import carImage3 from "./assets/car3.jpeg";
import carImage4 from "./assets/car4.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faPlus } from "@fortawesome/free-solid-svg-icons";


function BigCard() {
  return (
    <div className="bg-white border-gray-300 border rounded-lg p-6 mx-auto max-w-7xl">
      <div className="flex justify-between mb-4">
        <button className="bg-white-400">
          
        </button>
        <button className="bg-orange-400 text-white px-2 py-1 rounded-lg">
          <FontAwesomeIcon icon={faBookmark} /> From My favourites
        </button>
        <button className="bg-orange-400 text-white px-2 py-1 rounded-lg">
          <FontAwesomeIcon icon={faPlus} /> Add
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <SmallCard
          image={carImage1}
          carName="Nissan 2019"
          distance="16,232 mi"
          money="$743/mo"
          days="84"
        />
        <SmallCard
          image={carImage2}
          carName="Polo 2018"
          distance="11,232 mi"
          money="$443/mo"
          days ="24"
        />
        <SmallCard
          image={carImage3}
          carName="Brezza"
          distance="11,232 mi"
          money="$543/mo"
          days="84"
        />
        <SmallCard
          image={carImage4}
          carName="Swift 2020"
          distance="11,232 mi"
          money="$543/mo"
          days="24"
        />
      </div>
    </div>
  );
}

export default BigCard;
