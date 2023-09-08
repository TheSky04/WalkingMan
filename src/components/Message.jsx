import React from "react";

function Message({ message }) {
  return (
    <div
      style={{
        color: "rgba(255,255,255,0.7)",
        textAlign: "center",
        fontSize: "1.5rem",
      }}
    >
      {message}
    </div>
  );
}

export default Message;
