import styles from "./HeaderMenu.module.scss";

function HeaderMenu() {
  return (
    <ul className={`${styles.menuContainer} card p-20`}>
      <li>Wishlist</li>
      <li>Connection</li>
    </ul>
  );
}

export default HeaderMenu;
