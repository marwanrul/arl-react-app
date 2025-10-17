import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import viteLogo from "/vite.svg";

function App() {
  return (
    <>
      <div className="title-wrapper">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>ARL React App</h1>
      </div>
      <div className="link-wrapper">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
