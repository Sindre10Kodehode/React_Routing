// This is the header component with navbar that should be used instead of the header tag in App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between pl-4 pr-4 bg-teal-600">
        <img
          src="/public/metranspback.png"
          alt=""
          className="h-20 pl-2"
        />
        <h1 className="text-4xl">Sindre Tofte Giske</h1>

        <nav className="flex justify-end gap-4 p-2 pl-4 pr-4 bg-teal-500 rounded-full">
          <Link to="/">Home</Link>
          <Link to="/Comments">JsonComments</Link>
          <Link to="/ToDo">To Do</Link>
        </nav>
      </header>
    </>
  );
};
