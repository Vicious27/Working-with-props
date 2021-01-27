import React from "react";

const Practice1 = () => {
  const id = 27;
  const username = "Vicious Ways";
  return (
    <div className="practice">
      <User id={id} username={username} />
    </div>
  );
};

const User = props => {
  return (
    <p>
      {props.username} [{props.id}]
    </p>
  );
};

export default Practice1;
