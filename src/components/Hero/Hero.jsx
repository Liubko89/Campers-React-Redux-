import css from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={css.heroSection}>
      <div className={css.titleWrapper}>
        <h1 className={css.title}>Campervan or RV Rental in Ukraine</h1>
        <p className={css.description}>
          Rent a campervan or RV and experience the wonders of Ukraine. Hidden
          beaches, sheer cliff faces, wonderful mountains, and unforgettable
          cuisine are all waiting for you when you start your adventure from
          Carpathians.
        </p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <h2 className={css.itemTitle}>Quick and easy booking</h2>
          <p className={css.itemDescription}>
            The process is swift, easy, and can be completed online. Simply
            enter your travel dates, pickup and drop-off locations, and find
            your perfect adventure on wheels.
          </p>
        </li>
        <li className={css.item}>
          <h2 className={css.itemTitle}>Nº 1 road trip provider in Ukraine</h2>
          <p className={css.itemDescription}>
            Over 6.000 RVs, motorhomes, and campervans for rental across +30
            locations in Ukraine. Start dreaming and travel with us!
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Hero;
