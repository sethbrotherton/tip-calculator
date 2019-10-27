import React, { Component, createContext } from "react";

export const StyleContext = createContext();

class StyleContextProvider extends Component {
  state = {
    backgroundColor: ""
  };

  setBackgroundColor = value => {
    let color = "";
    let parsedValue = parseFloat(value);
    if (parsedValue >= 25) {
      color = "green";
    } else if (parsedValue >= 20) {
      color = "yellow";
    } else if (parsedValue < 20) {
      color = "red";
    }
    this.setState({
      backgroundColor: color
    });
  };

  render() {
    return (
      <StyleContext.Provider
        value={{
          ...this.state,
          setBackgroundColor: this.setBackgroundColor
        }}
      >
        {this.props.children}
      </StyleContext.Provider>
    );
  }
}

export default StyleContextProvider;
