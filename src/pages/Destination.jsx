import { useState } from "react";
import data from "../data.json";
import styles from "./Destination.module.css";
import PageTitle from "../components/PageTitle";

function Destination() {
  const [selectedDest, setSelectedDest] = useState("Moon");

  const currentData = data.destinations.find(
    (dest) => dest.name === selectedDest,
  );

  return (
    <main className={`main-grid ${styles.destMainGrid}`}>
      <PageTitle number="01" text="PICK YOUR DESTINATION" />

      <div className={styles.destImgContainer}>
        <img
          className={styles.destImg}
          src={currentData.images.webp}
          alt={`${currentData.name} Picture`}
          loading="lazy"
        />
      </div>

      <div className={styles.destContentContainer}>
        <ul className={styles.destNavbar}>
          {data.destinations.map((dest) => (
            <li key={dest.name} className={styles.destNavbarItem}>
              <button
                className={`${styles.destNavbarButton} ${
                  selectedDest === dest.name ? styles.active : ""
                }`}
                type="button"
                onClick={() => setSelectedDest(dest.name)}
              >
                {dest.name}
              </button>
            </li>
          ))}
        </ul>

        <h1 className={styles.destContentTitle}>{currentData.name}</h1>
        <p className={styles.destContentText}>{currentData.description}</p>

        <div className={styles.destStatsContainer}>
          <div className={styles.destStatContainer}>
            <p className={styles.destStatTitle}>Avg. distance</p>
            <p className={`${styles.destStatValue} ${styles.destStatDistance}`}>
              {currentData.distance}
            </p>
          </div>
          <div className={styles.destStatContainer}>
            <p className={styles.destStatTitle}>Est. travel time</p>
            <p className={`${styles.destStatValue} ${styles.destStatTravel}`}>
              {currentData.travel}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Destination;
