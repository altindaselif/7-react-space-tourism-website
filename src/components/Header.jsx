import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useState, useEffect, useRef } from "react";

const navItems = [
  { number: "00", title: "Home", path: "/" },
  { number: "01", title: "Destination", path: "/destination" },
  { number: "02", title: "Crew", path: "/crew" },
  { number: "03", title: "Technology", path: "/technology" },
];

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navRef = useRef(null);
  const openBtnRef = useRef(null);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }
  }, [isMobileNavOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMobileNavOpen &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        openBtnRef.current &&
        !openBtnRef.current.contains(e.target)
      ) {
        setIsMobileNavOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileNavOpen]);

  return (
    <header className={styles.headerContainer}>
      <Link
        className={styles.headerLogoLink}
        to="/"
        aria-label="Space Tourism Homepage"
      >
        <img
          className={styles.headerLogoImg}
          src="./images/shared/logo.svg"
          alt="Space Tourism"
          aria-hidden="true"
        />
      </Link>

      <div className={styles.headerLine}></div>

      <button
        className={styles.headerMenuOpenButton}
        type="button"
        aria-label="Open Menu"
        onClick={() => setIsMobileNavOpen(true)}
      >
        <img
          className={styles.headerMenuOpenIcon}
          src="./images/shared/icon-hamburger.svg"
          alt=""
          aria-hidden="true"
        />
      </button>

      <nav
        className={`${styles.headerNavbar} ${
          isMobileNavOpen ? styles.active : ""
        }`}
      >
        <button
          className={styles.navbarMenuCloseButton}
          type="button"
          aria-label="Close Menu"
          onClick={() => setIsMobileNavOpen(false)}
        >
          <img
            className={styles.navbarMenuCloseIcon}
            src="./images/shared/icon-close.svg"
            alt=""
            aria-hidden="true"
          />
        </button>

        <ul className={styles.navbarLinkContainer}>
          {navItems.map((item) => (
            <li key={item.number} className={styles.navbarItem}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navbarLink} ${styles.active}`
                    : styles.navbarLink
                }
                onClick={() => setIsMobileNavOpen(false)}
              >
                <span className={styles.linkNumber}>{item.number}</span>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
