import "./Ourcollection.css";
import gran from "../../../assets/home/desktop/image-gran-espresso.png";
import planalto from "../../../assets/home/desktop/image-planalto.png";
import piccollo from "../../../assets/home/desktop/image-piccollo.png";
import danche from "../../../assets/home/desktop/image-danche.png";

export const Ourcollection = () => {
  return (
    <section className="collection text-center flex flex-col gap-4 lg:border border-black ">
      <div className="oc relative lg:w-full">
        <h2 className="collective text-black md:text-8xl lg:w-full  ">our collection</h2>
        <div className="buddy lg:w-full" />
      </div>

      <div className="flex flex-col gap-12 md:items-center lg:flex-row ">
        <div className="text-black flex flex-col  text-center  md:items-center md:flex-row  lg:flex-col lg:gap-16">
          <img className="md:w-64" src={gran} alt="our collection" />
          <div className="flex flex-col gap- md:text-left lg:text-center  ">
            <h4 className="text-2xl font-black">Gran Espresso</h4>
            <p className=" md:w-72">
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>
          </div>
        </div>

        <div className="text-black flex flex-col text-center md:items-center md:flex-row lg:flex-col  ">
        <div className="text-black flex flex-col  text-center  md:items-center md:flex-row  lg:flex-col lg:gap-16">
          <img className="md:w-64" src={planalto} alt="our collection" />
          <div className="flex flex-col gap-4 md:text-left lg:text-center">
            <h4 className="text-2xl font-black">Planalto</h4>
            <p className="md:w-72">
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </p>
          </div>
          </div>
        </div>

        <div className="text-black flex flex-col  text-center md:flex-row  lg:flex-col">
        <div className="text-black flex flex-col  text-center  md:items-center md:flex-row  lg:flex-col lg:gap-16">
          <img className="md:w-64" src={piccollo} alt="our collection" />
          <div className="flex flex-col gap-4 md:text-left lg:text-center">
            <h4 className="text-2xl font-black">Piccollo</h4>
            <p className="md:w-72">
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry{" "}
            </p>
          </div>
          </div>
        </div>

        <div className="text-black flex flex-col  text-center md:flex-row lg:flex-col">
        <div className="text-black flex flex-col  text-center  md:items-center md:flex-row  lg:flex-col lg:gap-16">
          <img className="md:w-64" src={danche} alt="our collection" />
          <div className="flex flex-col gap-4 md:text-left lg:text-center ">
            <h4 className="text-2xl font-black">Danche</h4>
            <p className="md:w-72">
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};
