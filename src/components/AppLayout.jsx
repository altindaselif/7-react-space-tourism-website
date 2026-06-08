import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import styles from "./AppLayout.module.css";

function AppLayout() {
  const location = useLocation();
  let bgClass = "homeBody";

  if (location.pathname === "/destination") {
    bgClass = "destinationBody";
  } else if (location.pathname === "/crew") {
    bgClass = "crewBody";
  } else if (location.pathname === "/technology") {
    bgClass = "technologyBody";
  }

  return (
    <div className={`${styles.appContainer}  ${styles[bgClass]}`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
