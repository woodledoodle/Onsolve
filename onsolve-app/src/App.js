import React, { Component } from "react";

class Onsolve extends Component {
  render() {
    return <h1>Daily Logs</h1>
  }
}






//This exposes the Hello class to other files which import from the App.js file. The default keyword means that any import that's name doesn't match a named export will automatically revert to this. Only one default is allowed per file.

export default Onsolve;