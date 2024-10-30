import "./PickUrPlan.css";

export const PickUrPlan = () => {
  return (
    <div className="pup rounded-lg py-20   ">
      <div className="hidden k md:relative md:bottom-24 md:flex md:w-2/3  md:justify-between md:left-10 lg:w-4/6 lg:left-28 lg:bottom-16">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="line"></div>
      </div>
      <div className="flex flex-col items-center gap-16 md:flex-row md:w-10/12  md:h-80  md:ml-10  lg:ml-24 lg:w-full">

        <div className="flex flex-col items-center gap-6 w-96  md:items-start md:justify-center h-80  ">
          <h2 className="num text-7xl font-bold  md:w-full ">
            01
          </h2>
          <h3 className="text-3xl font-bold  md:w-5/6">
            Pick your coffee
          </h3>
          <p className="opacity-80 text-center leading-6 md:text-left lg:w-72">
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 w-96 lg:items-start ">
          <h2 className="num text-7xl font-bold md:w-full ">02</h2>
          <h3 className="text-3xl font-bold lg:w-full">Choose the frequency</h3>
          <p className="opacity-80 text-center leading-7 md:text-left lg:w-72">
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 w-96 lg:items-start ">
          <h2 className="num text-7xl font-bold md:w-full ">03</h2>
          <h3 className="text-3xl font-bold lg:w-full">Receive and enjoy</h3>
          <p className="opacity-80 text-center leading-7 md:text-left lg:w-72 ">
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience fddffdsff.
          </p>
        </div>
      </div>
    </div>
  );
};
