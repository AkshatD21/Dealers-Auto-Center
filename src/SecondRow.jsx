import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faSackDollar,
  faCube,
  faCircle,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

function SecondRow({ image, carName, distance, money, days }) {
  return (
    <>
      <div className="border border-gray-400 h-48 xs:h-auto flex flex-col items-center justify-center">
        <img src={image} alt="Vehicle" className="h-14 m-4" />
        <p className="text-lg font-bold">{carName}</p>
      </div>
      <div className="border border-gray-400 h-48 xs:h-auto flex items-start justify-center pt-6">
        <p className="text-sm px-2">
          4x4 300 hp 3.5L <br /> Gas, M/T Hard <br /> Top Cloth
        </p>
      </div>
      <div className="border border-gray-400 h-48 xs:h-auto flex flex-col justify-start items-center pt-6">
        <p className="text-sm font-bold">$35,603</p>
        <p className="text-sm font-bold text-orange-300 mt-2 sm:mt-10">
          $34,603 <br /> DACV
        </p>
      </div>
      <div className="border border-gray-400 h-48 xs:h-auto flex items-start justify-center pt-6">
        <p className="text-sm font-bold">{distance}</p>
      </div>
      <div className="border border-gray-400 h-48 xs:h-auto flex items-start justify-center pt-6">
        <p className="text-sm font-bold">{money}</p>
      </div>
      <div className="border border-gray-400 h-48 xs:h-auto flex items-start justify-center pt-6">
        <p className="text-sm text-center font-bold">
          {days} Days
          <br /> in market
        </p>
      </div>
      <div className="border border-gray-400 h-48 xs:h-auto flex flex-col justify-start items-center pt-6 xs:w-full">
        <div className="flex items-center gap-4">
          <button className="bg-green-400 text-xs px-1 py-1 text-white rounded-lg">
            (892) 545-5467
          </button>
          <FontAwesomeIcon
            icon={faEnvelope}
            size="xs"
            style={{ color: "#ff7300" }}
          />
        </div>
        <p className="text-xs font-bold underline mt-4">
          1764, MC Donald, TX USA
        </p>

        <div className="flex gap-2 mt-2">
          <button className="bg-gray-300 text-xs w-8 text-white rounded-lg ">
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              style={{ color: "#ffbf52" }}
            />
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              style={{ color: "#ffbf52" }}
            />
            <FontAwesomeIcon
              icon={faCircle}
              size="2xs"
              style={{ color: "#ffbf52" }}
            />
          </button>
          <p className="text-xs">Contact the seller now</p>
        </div>
        <div className="flex items-center mt-2">
          <button className="bg-gray-300 text-xs text-black w-32 h-4 rounded-l">
            Hi Kumar, available?
          </button>
          <button className="bg-orange-300 text-xs text-white w-6 h-4 rounded-r">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <button className="bg-orange-400 text-xs text-white px-1 py-1 rounded-lg">
            <FontAwesomeIcon icon={faCube} /> Send Offer
          </button>
          <button className="bg-orange-400 text-xs text-white px-2 py-1 rounded-lg">
            <FontAwesomeIcon icon={faSackDollar} /> Add
          </button>
        </div>
      </div>
    </>
  );
}

export default SecondRow;
