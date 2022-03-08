import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* IMPORTATION DES PAGES */
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
