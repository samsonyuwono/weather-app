import React from "react";

const Form = props => {
  return (
    <div className="form">
      <form onSubmit={props.loadWeather}>
        <input type="text" name="cityid" placeholder="City ID..." />
        <button>Get Weather</button>
      </form>
    </div>
  );
};

export default Form;
