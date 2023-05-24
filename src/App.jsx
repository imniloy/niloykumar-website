import React from "react";

import "./App.css";
import OverViewPage from "./pages/OverViewPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<OverViewPage />} />
    </Routes>
  );
}

export default App;
