// src/App.jsx
import { Routes, Route } from "react-router-dom";
import HomePage from "./modules/home/pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
