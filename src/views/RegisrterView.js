import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/auth-operation";

import styles from "../views/Views.module.css";

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.signup}>
      <h1 className={styles.title}>Please register here</h1>
      <div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={handleChange}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={handleChange}
            />
          </label>

          <button type="submit">Go where you must go, and hope!</button>
        </form>
      </div>
    </div>
  );
}
