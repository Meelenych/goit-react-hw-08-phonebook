import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import defaultAvatar from "../../images/avatar.png";
import { authSelectors } from "../../redux/auth/auth-selectors";
import { authOperations } from "../../redux/auth/auth-operations";

console.log(authSelectors, authOperations);

export default function UserMenu() {
	const dispatch = useDispatch();
	const name = useSelector(authSelectors.getUserName);
	const avatar = defaultAvatar;

	return (
		<div>
			<img src={avatar} alt="" width="35" />
			<span>Welcome, {name}</span>
			<button type="button" onClick={() => dispatch(authOperations.logOut())}>
				Log out
			</button>
		</div>
	);
}
