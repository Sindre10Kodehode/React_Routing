import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between pl-4 pr-4 bg-teal-600">
        <img src="/public/metranspback.png" className="h-20 pl-2" />
        <img src="/src/assets/react.svg" className="animate-spin-slow h-14" />
        <h1 className="p-8 text-4xl font-medium">
          Dette er en nettside laget med REACT
        </h1>
        <img src="/src/assets/react.svg" className="h-14 animate-spin-slow" />

        <nav className="flex justify-end gap-4 p-2 pl-4 pr-4 bg-teal-500 rounded-full">
          <Link to="/">Home</Link>
          <Link to="/Comments">Kommentarer</Link>
          <Link to="/ToDo">Gjøremål</Link>
        </nav>
      </header>
    </>
  );
};
