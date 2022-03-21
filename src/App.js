// Router 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// MUI
import { CssBaseline } from "@mui/material";

// pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
