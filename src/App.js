// Router 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// MUI
import { CssBaseline } from "@mui/material";

// pages
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
