import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main className={styles.homeMainGrid}>
      <div className={styles.homeContentContainer}>
        <h5 className={styles.homeContentPreTitle}>
          So, you want to travel to
        </h5>
        <h1 className={styles.homeContentTitle}>Space</h1>
        <p className={styles.homeContentText}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={styles.homeExploreLinkContainer}>
        <Link
          className={styles.homeExploreLink}
          to="/destination"
          aria-label="Explore space destinations"
        >
          Explore
        </Link>
      </div>
    </main>
  );
}

export default Homepage;
