import RegLogMenu from "../RegLogMenu/RegLogMenu";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth/auth-selectors";

export default function AppBar() {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

	return <header>{isLoggedIn ? <UserMenu /> : <RegLogMenu />}</header>;
}
