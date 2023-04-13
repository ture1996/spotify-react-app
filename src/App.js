import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainSpotify } from "./pages/MainSpotify";
import { Layout } from "./layouts/Layout";
import { PlayerSpotify } from "./pages/PlayerSpotify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainSpotify />} />
          <Route path="/:type/:id/:tracks?" element={<PlayerSpotify />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
