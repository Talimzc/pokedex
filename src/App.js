import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import PokemonPage from "./pages/PokemonPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
