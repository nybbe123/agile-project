import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerLeft}>
        <span className={style.logo}>WEBLY</span>
      </div>
      <nav className={style.headerRight}>
        <ul className={style.navLinks}>
          <li className={style.navItems}>SERVICES</li>
          <li className={style.navItems}>ABOUT US</li>
          <li className={style.navItems}>CONTACT</li>
          <li className={style.navItems}>LOGIN</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
