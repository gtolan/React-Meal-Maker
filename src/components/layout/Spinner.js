import React from "react";
import spinner from "./spinner.gif";

export default () => {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: "100px", magin: "auto", display: "block" }}
      />
    </div>
  );
};
