import { NavLink } from "react-router-dom";
import styles from "./RegLogMenu.module.css";

export default function RegLogMenu() {
	return (
		<>
			<nav>
				<NavLink
					end
					to="/"
					className={({ isActive }) =>
						isActive ? styles.activeNavLink : styles.navLink
					}
				>
					Registration
				</NavLink>
				<NavLink
					to="/login"
					className={({ isActive }) =>
						isActive ? styles.activeNavLink : styles.navLink
					}
				>
					Login
				</NavLink>
			</nav>
		</>
	);
}
