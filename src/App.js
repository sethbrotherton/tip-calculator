import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">QOMPLX CHALLENGE</header>
      <div class="container-fluid">
        <h1>TIP CALCULATOR</h1>
        <div class="card">
          <div className="card-body">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
