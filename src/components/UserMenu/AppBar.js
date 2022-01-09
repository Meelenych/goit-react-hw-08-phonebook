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
    <div>
      <div className={styles.headerPositioning}>
        <header style={styles.header}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
      </div>
    </div>
  );
}
