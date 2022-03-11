import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { useState } from "react";

/* IMPORTATION DES PAGES */
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Place from "./pages/Place";

import Signup from "./components/Signup";
import Login from "./components/Login";
import AddListing from "./pages/AddListing";
import SearchScreen from "./pages/SearchScreen";
import Nearby from "./pages/Nearby";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:placeId" element={<Place />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/searchScreen" element={<SearchScreen />} />
        <Route path="/addListing" element={<AddListing />} />
        <Route path="/nearby" element={<Nearby />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
