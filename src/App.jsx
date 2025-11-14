import React from "react";
import "./App.css";
import { CookieClicker } from "./components/cookieClicker";
import { Users } from "./components/userData";
// import CatFacts from './components/CatFacts/CatFacts';

function App() {
  return (
    <>
      <CookieClicker />
      <Users />
    </>
  );
}

export default App;
