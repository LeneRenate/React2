import { useState } from "react";
import "../styles/cookieClicker.css";

export const CookieClicker = () => {
  const [score, setScore] = useState(0);

  return (
    <section className="cookieClicker">
      <h2>Cookie Clicker</h2>
      <p>Score: {score}</p>
      <button onClick={() => setScore(score + 1)}>
        <img src="./public/cookie.png" alt="Cartoon Cookie" />
      </button>
    </section>
  );
};
