import { useDispatch, useSelector } from "react-redux";
import defaultAvatar from "../../images/sauron.jpg";
import authSelectors from "../../redux/auth/auth-selectors";
import { logOut } from "../../redux/auth/auth-operation";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={styles.userMenu}>
      <img src={defaultAvatar} alt="" width="32" className={styles.avatar} />
      <span>The Ring has awoken, {name}! </span>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={styles.logoutBtn}
      >
        I have to leave...
      </button>
    </div>
  );
}
