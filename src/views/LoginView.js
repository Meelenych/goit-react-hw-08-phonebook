import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/auth-operation";

import styles from "../views/Views.module.css";

export default function LoginView() {
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
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>
        Oh, it’s quite simple. If you are a friend, you speak the password, and
        the doors will open...
      </h2>
      <div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={handleChange}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className={styles.viewBtn}>
            I’m coming, Mr. Frodo!
            {/* You shall not pass! */}
          </button>
        </form>
      </div>
    </div>
  );
}
