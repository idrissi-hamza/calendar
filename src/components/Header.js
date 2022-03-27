import React from "react";

function Header() {
  return (
    <header className=" bg-slate-500 flex  items-center ">
      <h1 className="text-lg font-black  text-slate-300 m-3 px-4">Planner</h1>
      <button className="border px-3 py-1 mr-4  border-slate-700 rounded-md hover:bg-slate-600 text-slate-300 ">
        Today
      </button>
      <button className="material-icons-outlined text-gray-200  ">
        chevron_left
      </button>
      <p></p>
      <button className="material-icons-outlined text-gray-200 ">chevron_right</button>
    </header>
  );
}

export default Header;
