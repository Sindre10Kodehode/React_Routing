
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between pl-4 pr-4 bg-teal-600 font-Ubuntu">
        <img
          src="/public/metranspback.png"
          alt=""
          className="h-20 pl-2"
        />
        <h1 className="text-4xl">Sindre Tofte Giske</h1>

        <nav className="flex justify-end gap-4 p-2 pl-4 pr-4 bg-teal-500 rounded-full">
          <Link to="/">Home</Link>
          <Link to="/Comments">Kommentarer</Link>
          <Link to="/ToDo">Gjøremål</Link>
        </nav>
      </header>
    </>
  );
};
