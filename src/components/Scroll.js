import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "auto",
        border: "2px solid white",
        height: "800px",
        marginTop: "10px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
