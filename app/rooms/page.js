import React from "react";
import Link from "next/link";
import SelectRoom from "@/components/SelectRoom";
import {
  MdArrowBack,
  MdBed,
  MdOutlineWifi,
  MdFreeBreakfast,
  MdOutlineLocalParking,
  MdLiving,
} from "react-icons/md";


const Rooms = () => {
  return (
    <div>
      <SelectRoom bgimage={"url(/images/DeluxeK.jpg)"} roomtype={SingleRoom} price='50' text="Set in Aberdeen, 1.4 km from Aberdeen Art Gallery & Museum,
                              Hannahs Guesthouse provides express check-in and check-out and
                              free WiFi throughout the property. The property is situated 4.5
                              km from Hilton Community Centre, 23 km from Newburgh on Ythan
                              Golf Club and 1.1 km from St Mary's Cathedral. The property is
                              non-smoking and is located 3 km from Beach Ballroom." />
    </div>
   
  );
};

export default Rooms;
