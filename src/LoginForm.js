import React from "react";
import "./App.css";


const LoginForm = () => {
  const username = "Vicious ways";
  const id = "2789";
  const date = "01/26/2021";
  return (
    <div className="LoginForm" id="form">
      <User
        username={username}
        id={id}
        date={date} />
    </div>
  );
}


const User = props => {
  return (
    <h2>
      {props.username} <hr></hr> {props.id} <hr></hr> {props.date}
    </h2>
  );
}

export default LoginForm;