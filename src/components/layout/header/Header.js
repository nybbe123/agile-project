import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerLeft}>
        <span className={style.logo}>WEBLY</span>
      </div>
      <nav className={style.headerRight}>
        <ul className={style.navLinks}>
          <li className={[style.navItems, style.navMarginRight].join(" ")}>
            SERVICES
          </li>
          <li className={[style.navItems, style.navMarginRight].join(" ")}>
            ABOUT US
          </li>
          <li className={[style.navItems, style.navMarginRight].join(" ")}>
            CONTACT
          </li>
          <li className={style.navItems}>LOGIN</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
