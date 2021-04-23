import React from "react";
import "./styles.css";

import DisplayCount from "./DisplayCount";
import ButtonCount from "./ButtonCount";

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>My Redux counter</h2>
        <DisplayCount />
        <ButtonCount />
      </div>
    );
  }
}

export default App;
