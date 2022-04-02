import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "./components/Layout";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import theme from "./global-styles/theme";
import "./App.css";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<div>Page Not Found!!!</div>} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;

