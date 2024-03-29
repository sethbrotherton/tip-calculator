import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Form from "./components/Form";
import StyleContextProvider, { StyleContext } from "./context/StyleContext";

function App() {
  return (
    <StyleContextProvider>
      <StyleContext.Consumer>
        {context => {
          console.log("context", context);
          return (
            <div className={context.backgroundColor + " App"}>
              <header className="App-header">QOMPLX CHALLENGE</header>
              <div class="container-fluid">
                <h1>TIP CALCULATOR</h1>
                <div class="card">
                  <div className="card-body">
                    <Form setBackgroundColor={context.setBackgroundColor} />
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </StyleContext.Consumer>
    </StyleContextProvider>
  );
}

export default App;
