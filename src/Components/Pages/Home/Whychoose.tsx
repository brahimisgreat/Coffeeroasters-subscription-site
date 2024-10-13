import "./Whychoose.css";
import bean from "../../../assets/home/desktop/icon-coffee-bean.svg";
import gift from "../../../assets/home/desktop/icon-gift.svg";
import truck from "../../../assets/home/desktop/icon-truck.svg";

export const Whychoose = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="why flex flex-col items-center px-7 pt-16 gap-6">
        <h3 className="text-3xl font-black">Why choose us?</h3>
        <p className="opacity-80 text-center ">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>

      <div className="flex flex-col  w-72  absolute top-80 gap-6">
        <div className="flex flex-col items-center justify-center gap-6 text-center px-10 rounded-lg h-96  text-white bg-teal-600">
          <img src={bean} className="" />
          <h4 className="text-2xl font-black mt-6">Best quality</h4>
          <p className="opacity-80">
            Discover an endless variety of the world’s best artisan coffee from
            each of our roasters.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 text-center px-10 rounded-lg h-96  text-white bg-teal-600">
          <img src={gift} />
          <h4 className="text-2xl font-black mt-6">Exclusive benefits</h4>
          <p className="opacity-80">
            Special offers and swag when you subscribe, including 30% off your
            first shipment.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 text-center px-10 rounded-lg h-96  text-white bg-teal-600">
          <img src={truck} />
          <h4 className="text-2xl font-black mt-6">Free shipping</h4>
          <p className="opacity-80">
            We cover the cost and coffee is delivered fast. Peak freshness:
            guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
};
