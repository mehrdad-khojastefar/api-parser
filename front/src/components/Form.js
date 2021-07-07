import React from "react";
import MyLabel from "./MyLabel";

function Form(props) {
  return (
    <div className="box-model">
      <h1>User Form</h1>
      <MyLabel label="Name" data={props.data.name} />
      <MyLabel label="Last Name" data={props.data.lastname} />
      <MyLabel label="Birth Date" data={props.data.birth} />
    </div>
  );
}

export default Form;
