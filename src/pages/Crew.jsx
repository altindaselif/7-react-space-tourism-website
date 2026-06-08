import { useState } from "react";
import data from "../data.json";
import styles from "./Crew.module.css";
import PageTitle from "../components/PageTitle";

function Crew() {
  const [selectedCrew, setSelectedCrew] = useState("Douglas Hurley");

  const currentData = data.crew.find((crew) => crew.name === selectedCrew);

  return (
    <main className={`main-grid ${styles.crewMainGrid}`}>
      <PageTitle number="02" text="MEET YOUR CREW" />

      <div className={styles.crewContentContainer}>
        <h5 className={styles.crewContentPreTitle}>{currentData.role}</h5>
        <h1 className={styles.crewContentTitle}>{currentData.name}</h1>
        <p className={styles.crewContentText}>{currentData.bio}</p>
        <div className={styles.crewIndicators}>
          {data.crew.map((crew) => (
            <button
              key={crew.name}
              className={`${styles.crewIndicator} ${
                selectedCrew === crew.name ? styles.active : ""
              }`}
              data-name={crew.name}
              type="button"
              aria-label={`View ${crew.name}`}
              onClick={() => setSelectedCrew(crew.name)}
            ></button>
          ))}
        </div>
      </div>
      <div className={styles.crewImgContainer}>
        <img
          className={styles.crewImg}
          src={currentData.images.webp}
          alt={currentData.name}
          loading="lazy"
        />
      </div>
    </main>
  );
}

export default Crew;
