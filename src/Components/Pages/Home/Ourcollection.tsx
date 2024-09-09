import "./Ourcollection.css";

export const Ourcollection = () => {
  return (
    <section className="our-collection">
      <div className="our-collection-title">
        <h1 className="  w-full text-center   text-4xl font-black ">
          Our collection
        </h1>
      </div>

      <div>
        <img src={""} alt="" />
        <h2 className="text-black">Gran Espresso</h2>
        <p>
          Light and flavorful blend with cocoa and black pepper for an intense
          experience
        </p>
      </div>

      <div>
        <img src={""} alt="" />
        <h2>Planalto</h2>
        <p>
          Brazilian dark roast with rich and velvety body, and hints of fruits
          and nuts
        </p>
      </div>

      <div>
        <img src={""} alt="" />
        <h2>Piccollo</h2>
        <p>
          Mild and smooth blend featuring notes of toasted almond and dried
          cherry
        </p>
      </div>

      <div>
        <img src={""} alt="" />
        <h2>Danche</h2>
        <p>
          Ethiopian hand-harvested blend densely packed with vibrant fruit notes
        </p>
      </div>
    </section>
  );
};
