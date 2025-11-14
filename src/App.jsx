import "./App.css";
import { CookieClicker } from "./components/cookieClicker";
import { Users } from "./components/userData";
import { CatFacts } from "./components/catFacts";

function App() {
  return (
    <>
      <CookieClicker />
      <CatFacts />
      <Users />
    </>
  );
}

export default App;
