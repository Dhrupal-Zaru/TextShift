import "./App.css";
import Navbar from "./Componants/Navbar";
import Text from "./Componants/Text";
import About from "./Componants/About";
import React, { useState } from "react";
import Alert from "./Componants/Alert";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#373b43";
      setAlert("Dark mode anabled!");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      setAlert("Light mode anabled!");
    }
  };
  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <ToastContainer />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Text mode={mode} />} />
        <Route path="/About" element={<About mode={mode} />} />
      </Routes>
    </Router>
    // <>
    // <Navbar mode={mode} toggleMode={toggleMode}/>
    // <Alert alert={alert}/>
    // <ToastContainer />
    // <Text mode={mode}/>
    // <About mode={mode}/>
    // </>
  );
}

export default App;
