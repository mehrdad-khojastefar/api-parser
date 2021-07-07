import React from "react";
import MyLabel from "./MyLabel";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [], dataLoaded: false };
  }

  loadData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data, dataLoaded: true });
      })
      .catch((err) => {
        console.log("Error : " + err);
        this.setState({ dataLoaded: false });
      });
  };

  loadButton = () => {
    if (!this.state.dataLoaded) {
      return (
        <div className="btn btn-warning" onClick={this.loadData}>
          Load Personnel Data
        </div>
      );
    }
  };

  loadText = () => {
    if (!this.state.dataLoaded) {
      return 'The Data Shown Below Were Fetched From "localhost:9000/testApi"';
    } else {
      return 'The Data Shown Below Were Fetched From "https://jsonplaceholder.typicode.com/users"';
    }
  };

  render() {
    return (
      <div className="card-container card text-center">
        <div className="card-header">Users Informations</div>
        <div className="card-body">
          <h5 className="card-title">{this.loadText()}</h5>
          <div className="data-container card-text">
            <p>Name : {this.props.data.name}</p>
            <p>Last Name : {this.props.data.lastname}</p>
            <p>Birth Date : {this.props.data.birth}</p>
          </div>
          {this.state.users.map((element) => {
            return (
              <div className="data-container card-text">
                <hr className="card-divider" />
                <p>Name : {element.name}</p>
                <p>Last Name : {element.username}</p>
                <p>email : {element.email}</p>
              </div>
            );
          })}
          {this.loadButton()}
        </div>
        <div className="card-footer text-muted">
          Developed with ❤️ by{" "}
          <a href="https://t.me/mehrdadkhojastefar">mehrdad</a>
        </div>
      </div>

      // <div className="card text-center">
      //   <h1>User Form</h1>
      //   <MyLabel label="Name" data={props.data.name} />
      //   <MyLabel label="Last Name" data={props.data.lastname} />
      //   <MyLabel label="Birth Date" data={props.data.birth} />
      // </div>
    );
  }
}

export default Form;
