import logo from "./logo.svg";
import "./App.css";
import { getMonth } from "./util";
import dayjs from "dayjs";
import NoWorkResult from "postcss/lib/no-work-result";
import { Fragment } from "react";
function App() {
  console.table(getMonth());
  return (
    <div className="grid grid-cols-7 gap-2 m-3 ">
      {getMonth()
        .flat()
        .map((el, i) => (
          <div className="p-2 bg-gray-300">
            {i < 7 ? <div>{el.format("ddd")} </div> : ""}
            <p key={i}>{el.format("DD")}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
