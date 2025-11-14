import { useState } from "react";
import "../styles/cookieClicker.css";
import cookieImage from "../assets/cookie.png";

export const CookieClicker = () => {
  const [score, setScore] = useState(0);

  return (
    <section className="cookieClicker">
      <h2>Cookie Clicker</h2>
      <p>Score: {score}</p>
      <button onClick={() => setScore(score + 1)}>
        <img src={cookieImage} alt="Cartoon Cookie" />
      </button>
    </section>
  );
};
