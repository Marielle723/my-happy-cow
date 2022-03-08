import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* IMPORTATION DES PAGES */
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Place from "./pages/Place";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place/:id" element={<Place />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
