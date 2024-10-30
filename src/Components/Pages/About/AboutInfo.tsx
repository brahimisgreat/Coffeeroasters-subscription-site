import "./Aboutinfo.css";

export const AboutInfo = () => {
  return (
    <div className="aboutinfo flex items-center justify-center md:justify-start  ">
      <div className="flex flex-col items-center gap-6  md:ml-16 md:items-start ">
        <h2 className="text-3xl font-bold md:text-4xl">Abouts Us</h2>{" "}
        <p className=" opacity-80 text-center md:w-3/5 md:text-left lg:w-1/3 ">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </div>
  );
};
