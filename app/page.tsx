
import Booking from "./components/Booking/Booking";

import Map from "./components/Map/Map";

export default function Home() {
  return (
    <div className=''>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="">
          <Booking/>
        </div>
        <div className="col-span-2  order-first md:order-last">
          <Map/>
        </div>

      </div>
    </div>
  );
}
