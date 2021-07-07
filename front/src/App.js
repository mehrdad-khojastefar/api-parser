import "./App.css";
import React from "react";
import Form from "./components/Form";
import MyLabel from "./components/MyLabel";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  async componentDidMount() {
    await fetch("http://localhost:9000/testApi", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ apiResponse: data });
        console.log("success: " + data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    return (
      <div className="App">
        <Form data={this.state.apiResponse} />
      </div>
    );
  }
}

export default App;
