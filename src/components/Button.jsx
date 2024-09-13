import React from "react";

function Button({ children, Click }) {
  return (
    <button onClick={Click} style={{
      padding: "10px 20px",
      fontSize: "1.2em",
      borderRadius: "5px",
      cursor: "pointer",
      backgroundColor: "blue",
      color: "white",
      border: "none",
    }}>  
      {children}
    </button>
  );
}

export { Button };
