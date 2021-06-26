import React from "react";

const SetTimer = (props) => {
  const { type, title, count, lengthHandler } = { ...props.data };

  return (
    <div className="session">
      <h2 id={`${type}-label`}>{title}</h2>
      <div className="session-btn">
        <button id={`${type}-increment`} onClick={() => lengthHandler(1)}>
          <i className="fa fa-plus"></i>
        </button>
        <div id={`${type}-length`}>{count}</div>
        <button id={`${type}-decrement`} onClick={() => lengthHandler(0)}>
          <i className="fa fa-minus"></i>
        </button>
      </div>
    </div>
  );
};
export default SetTimer;
