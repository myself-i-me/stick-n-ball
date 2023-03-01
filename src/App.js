import { useState } from "react";
import "./styles.css";

export default function App() {
  const handle = (event) => {
    if (event.key === "ArrowRight") {
      setPosition(position + 3);
    } else if (event.key === "ArrowLeft") {
      setPosition(position - 3);
    }
  };

  const [position, setPosition] = useState(0);

  const stick = { left: position };
  return (
    <div
      className="App"
      tabIndex={-1}
      onKeyDown={handle}
      style={{ overflow: "hidden" }}
    >
      <div id="stick-one" style={stick}></div>
    </div>
  );
}
