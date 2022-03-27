import logo from "./logo.svg";
import "./App.css";
import Month from "./components/Month";
import { getMonth } from "./util";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      {/* <Navbar /> */}
      <Month month={getMonth()} />
    </>
  );
}

export default App;
