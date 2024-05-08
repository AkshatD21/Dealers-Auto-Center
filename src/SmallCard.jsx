import React from "react";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";

function SmallCard({ image, carName, distance, money, days }) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg sm:grid sm:grid-cols-7 gap-0 sm:border-r-[1px] border-r-[#fff]">
      {/* First Row */}
      <FirstRow />

      {/* Second Row */}
      <SecondRow
        image={image}
        carName={carName}
        distance={distance}
        money={money}
        days={days}
      />
    </div>
  );
}

export default SmallCard;
