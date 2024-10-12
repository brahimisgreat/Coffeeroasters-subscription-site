import "./Ourcollection.css";
import gran from "../../../assets/home/desktop/image-gran-espresso.png";
import planalto from "../../../assets/home/desktop/image-planalto.png";
import piccollo from "../../../assets/home/desktop/image-piccollo.png";
import danche from "../../../assets/home/desktop/image-danche.png";

export const Ourcollection = () => {
  return (
    <section className="collection text-center flex flex-col gap-4">
      <div className="oc relative md:">
        <h2 className="text-black md:text-8xl">our collection</h2>
        <div className="buddy" />
      </div>
      <div className="flex flex-col gap-12 md:items-center ">
        <div className="text-black flex flex-col  text-center md:w-64 md:w-full border-solid border-2 border-indigo-600 ">
          <img src={gran} alt="our collection" />
          <div className="flex flex-col gap-4 md:flex-row md:w-full">
            <h4 className="text-2xl font-black">Gran Espresso</h4>
            <p className="">
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>
          </div>
        </div>
        <div className="text-black flex flex-col gap-4 text-center md:w-64">
          <img src={planalto} alt="our collection" />
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-black">Planalto</h4>
            <p className="">
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </p>
          </div>
        </div>
        <div className="text-black flex flex-col gap-4 text-center md:w-64">
          <img src={piccollo} alt="our collection" />
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-black">Piccollo</h4>
            <p className="">
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry{" "}
            </p>
          </div>
        </div>
        <div className="text-black flex flex-col gap-4 text-center md:w-64">
          <img src={danche} alt="our collection" />
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-black">Danche</h4>
            <p className="">
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
