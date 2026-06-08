import { useState } from "react";
import data from "../data.json";
import styles from "./Technology.module.css";
import PageTitle from "../components/PageTitle";

function Technology() {
  const [selectedTech, setSelectedTech] = useState("Launch vehicle");

  const currentData = data.technology.find(
    (tech) => tech.name === selectedTech,
  );

  return (
    <main className={`main-grid ${styles.techMainGrid}`}>
      <PageTitle number="03" text="SPACE LAUNCH 101" />

      <div className={styles.techContentContainer}>
        <div className={styles.techIndicators}>
          {data.technology.map((tech, i) => (
            <button
              key={tech.name}
              className={`${styles.techIndicator} ${
                selectedTech === tech.name ? styles.active : ""
              }`}
              data-name={tech.name}
              type="button"
              aria-label={`View ${tech.name}`}
              onClick={() => setSelectedTech(tech.name)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className={styles.techInfos}>
          <h5 className={styles.techContentPreTitle}>The terminology...</h5>
          <h1 className={styles.techContentTitle}>{currentData.name}</h1>
          <p className={styles.techContentText}>{currentData.description}</p>
        </div>
      </div>
      <div className={styles.techImgContainer}>
        <picture>
          <source
            className={styles.techImgSource}
            srcSet={currentData.images.landscape}
            media="(max-width: 48em)"
          />
          <img
            className={styles.techImg}
            src={currentData.images.portrait}
            alt={currentData.name}
            loading="lazy"
          />
        </picture>
      </div>
    </main>
  );
}

export default Technology;
