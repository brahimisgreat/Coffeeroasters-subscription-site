import "./Ourcollection.css";
import gran from '../../../assets/home/desktop/image-gran-espresso.png'
import planalto from '../../../assets/home/desktop/image-planalto.png'
import piccollo from '../../../assets/home/desktop/image-piccollo.png'
import danche from '../../../assets/home/desktop/image-danche.png'

export const Ourcollection = () => {
  return (
    <section className="collection text-center flex flex-col gap-4">
      <div className="oc relative">
        <h2 className="text-black">our collection</h2>
        <div className="buddy" />
      </div>
      <div className="flex flex-col gap-12" >
        <div className="text-black flex flex-col gap-4 text-center">
          <img src={gran} alt="our collection" />
          <h4 className="text-2xl font-black">Gran Espresso</h4>
          <p className="">Light and flavorful blend with cocoa and black pepper for an intense experience</p>
        </div>
        <div className="text-black flex flex-col gap-4 text-center">
          <img src={planalto} alt="our collection" />
          <h4 className="text-2xl font-black">Planalto</h4>
          <p className="">Brazilian dark roast with rich and velvety body, and hints of fruits and nuts</p>
        </div>
        <div className="text-black flex flex-col gap-4 text-center">
          <img src={piccollo} alt="our collection" />
          <h4 className="text-2xl font-black">Piccollo</h4>
          <p className="">Mild and smooth blend featuring notes of toasted almond and dried cherry </p>
        </div>
        <div className="text-black flex flex-col gap-4 text-center">
          <img src={danche} alt="our collection" />
          <h4 className="text-2xl font-black">Danche</h4>
          <p className="">Ethiopian hand-harvested blend densely packed with vibrant fruit notes</p>
        </div>
      </div>
   </section>
  );
};
