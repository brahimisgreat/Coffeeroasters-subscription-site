import "./Whychoose.css";
import bean from "../../../assets/home/desktop/icon-coffee-bean.svg";
import gift from "../../../assets/home/desktop/icon-gift.svg";
import truck from "../../../assets/home/desktop/icon-truck.svg";

export const Whychoose = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="why flex flex-col items-center px-7 pt-16 gap-6 md:px-1 md:h- ">
        <h3 className="text-3xl font-black">Why choose us?</h3>
        <p className="opacity-80 text-center md:w-9/12">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>

      <div className="flex flex-col items-center w-full   absolute top-80 gap-6 md:top-1/2  ">
        <div className="greensquare flex flex-col w-10/12 items-center justify-center gap-6 text-center px-10 rounded-lg h-96  text-white bg-teal-600 md:h-44 md:flex-row  ">
          <img src={bean} className="ant" />
          <div className="flex flex-col gap-4">

          <h4 className="text-2xl font-black mt-6 md:text-left">Best quality</h4>
          <p className="opacity-80 md:text-left">
            Discover an endless variety of the world’s best artisan coffee from
            each of our roasters.
          </p>
          </div>
        </div>

        <div className="greensquare flex flex-col  w-10/12 items-center justify-center gap-6 text-center px-10 rounded-lg h-96  text-white bg-teal-600 md:h-44 md:flex-row">
          <img src={gift} />
          <div>
          <h4 className="text-2xl font-black mt-6 md:text-left">Exclusive benefits</h4>
          <p className="opacity-80 md:text-left">
            Special offers and swag when you subscribe, including 30% off your
            first shipment.
          </p>
          </div>
        </div>

        <div className="greensquare flex flex-col  w-10/12 items-center justify-center gap-6 text-center px-10 rounded-lg h-96  text-white bg-teal-600 md:h-44 md:flex-row ">
          <img src={truck} className="" />
          <div>
          <h4 className="text-2xl font-black mt-6 md:text-left ">Free shipping</h4>
          <p className="opacity-80 md:text-left">
            We cover the cost and coffee is delivered fast. Peak freshness:
            guaranteed.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};
