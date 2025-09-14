import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

function getTokenPayload(token) {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
}

export default function Home() {
  const [token, setToken] = useState(null);
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => setToken(localStorage.getItem("token")), []);

  async function load() {
    const res = await fetch("/api/notes", {
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });
    if (!res.ok) return alert("Auth error");
    const data = await res.json();
    setNotes(data.notes || []);
  }

  async function createNote(e) {
    e?.preventDefault();
    const res = await fetch("/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, content }),
    });

    if (res.status === 403) {
      const d = await res.json();
      if (d.error === "PLAN_LIMIT") {
        if (confirm("Free plan limit reached. Upgrade to Pro?")) {
          const payload = getTokenPayload(localStorage.getItem("token"));
          if (payload?.tenantSlug) {
            await fetch(`/api/tenants/${payload.tenantSlug}/upgrade`, {
              method: "POST",
              headers: { Authorization: "Bearer " + localStorage.getItem("token") },
            });
            alert("Upgraded — reload notes");
            load();
            return;
          }
        }
      }
      return alert("Cannot create note");
    }

    setTitle("");
    setContent("");
    load();
  }

  async function del(id) {
    await fetch(`/api/notes/${id}`, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
    });
    load();
  }

  return (
    <div className={styles.container}>
      {!token && (
        <div className={styles.loginLink}>
          <a href="/login">Login</a>
        </div>
      )}
      {token && (
        <>
          <h1 className={styles.title}>Notes</h1>
          <form className={styles.form} onSubmit={createNote}>
            <input
              className={styles.input}
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className={styles.textarea}
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className={styles.buttonGroup}>
              <button type="submit" className={styles.button}>
                Create
              </button>
              <button
                type="button"
                className={`${styles.button} ${styles.logoutBtn}`}
                onClick={() => {
                  localStorage.removeItem("token");
                  setToken(null);
                }}
              >
                Logout
              </button>
            </div>
          </form>

          <button className={styles.button} onClick={load}>
            Load notes
          </button>
          <p>Total notes: {notes.length}</p>
          <ul className={styles.notesList}>
            {notes.map((n) => (
              <li key={n._id} className={styles.noteItem}>
                <h3 className={styles.noteItemTitle}>{n.title}</h3>
                <p className={styles.noteItemContent}>{n.content}</p>
                <button
                  className={`${styles.button} ${styles.deleteBtn}`}
                  onClick={() => del(n._id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
