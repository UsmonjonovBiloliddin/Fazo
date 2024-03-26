import React from "react";

const input = ({type ,id , state , setState }) => {
  return (
    <div className="input">
    <input
      type={type}
      id={id}
      value={state}
      onChange={(e) => setState(e.target.value)}
    />
  </div>
  );
};

export default input;
