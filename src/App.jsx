import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./page/MainPage";
import { CommentsPage } from "./page/Comments";
import { Header } from "./components/navigation/Header";
import { ToDos } from "./page/ToDo";
import { Footer } from "./components/navigation/Footer";
function App() {
  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Comments" element={<CommentsPage />} />
          <Route path="/ToDo" element={<ToDos />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
