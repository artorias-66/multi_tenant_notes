import { useState } from "react";
import Router from "next/router";
import styles from "../styles/Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    const r = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await r.json();
    if (!r.ok) return alert(data.error || "Login failed");
    localStorage.setItem("token", data.token);
    Router.push("/");
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} onSubmit={submit}>
        <input
          className={styles.input}
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.input}
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>

      <hr className={styles.divider} />

      <div className={styles.testAccounts}>
        <p>
          Test accounts (password: <b>password</b>):
        </p>
        <ul>
          <li>admin@acme.test (Admin)</li>
          <li>user@acme.test (Member)</li>
          <li>admin@globex.test (Admin)</li>
          <li>user@globex.test (Member)</li>
        </ul>
      </div>
    </div>
  );
}
