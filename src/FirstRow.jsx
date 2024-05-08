import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function FirstRow() {
  return (
    <>
      <div className="border border-gray-400 font-bold h-10 xs:h-auto flex items-center justify-center gap-1">
        Select Vehicle
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <div className="border border-gray-400 h-10 font-bold xs:h-auto flex items-center justify-center">
        Specification
      </div>
      <div className="border border-gray-400 h-10 font-bold xs:h-auto flex items-center justify-center">
        Price
      </div>
      <div className="border border-gray-400 h-10 font-bold xs:h-auto flex items-center justify-center">
        Odometer
      </div>
      <div className="border border-gray-400 h-10 font-bold xs:h-auto flex items-center justify-center">
        Est. Mo*
      </div>
      <div className="border border-gray-400 h-10 font-bold xs:h-auto flex items-center justify-center">
        Listed
      </div>
      <div className="border border-gray-400 h-10 font-bold xs:h-auto flex items-center justify-center xs:w-48">
        Contact Direction
      </div>
    </>
  );
}

export default FirstRow;
