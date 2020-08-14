import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Counters from "./components/Counters";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Movies />
      </div>
    </React.Fragment>
  );
}

export default App;
