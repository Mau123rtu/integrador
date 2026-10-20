
import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <header className="navbar">
        <NavLink to="/" className="brand">
          PurpleSpace ✦
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </>
  );
}

export default App;
