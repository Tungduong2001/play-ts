import React from "react";

const Button = ({ content, onButtonClick, type }: any) => {
  return (
    <div
      className={`Button ${content === "0" ? "zero" : ""} ${type || ""}`}
      onClick={onButtonClick(content)}
    >
      {content}
    </div>
  );
};

export default Button;
