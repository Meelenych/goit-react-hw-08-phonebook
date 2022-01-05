import { useDispatch } from "react-redux";
import { useState } from "react";
import { authOperations } from "../../redux/auth/auth-operations";

export default function LoginForm() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case "email":
				return setEmail(value);
			case "password":
				return setPassword(value);
			default:
				return;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(authOperations.logIn({ email, password }));

		setEmail("");
		setPassword("");
	};

	return (
		<div>
			<h1>Login page</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Email
					<input
						type="text"
						name="email"
						value={email}
						onChange={handleChange}
					/>
				</label>

				<label>
					Password
					<input
						type="text"
						name="password"
						value={password}
						onChange={handleChange}
					/>
				</label>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
