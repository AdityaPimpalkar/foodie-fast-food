import React from "react";
import { toast } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

import Container from "./components/Container";

toast.configure({ position: "bottom-center" });

function App() {
  return (
    <div className="App wrapper">
      <div className="container-fluid">
        <div className="row">
          <Container />
        </div>
      </div>
    </div>
  );
}

export default App;
