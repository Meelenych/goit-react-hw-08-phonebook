import { useSelector } from "react-redux";
import UserMenu from "./UserMenu.js";
import AuthNav from "./AuthNav";
import authSelectors from "../../redux/auth/auth-selectors";
import Navigation from "./Navigation.js";
import styles from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    //   <div className={styles.headerBackground}>

    <header style={styles.header}>
      <div className={styles.headerPositioning}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}
