import { useState } from "react";
import Celebration from "./Celebration";
import "./Valentine.css";
import "./App.css"

function Valentine() {
  const [accepted, setAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: "50%", left: "60%" });

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10;
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    setNoButtonPos({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  if (accepted) {
    return <Celebration />;
  }

  return (
    <div className="valentine-container">
      <h1 className="valentine-text">💖 Will you be my Valentine? 💖</h1>
      <div className="button-group">
        <button className="yes-btn" onClick={() => setAccepted(true)}>
          Yes 💕
        </button>
        <button
          className="no-btn"
          style={{ top: noButtonPos.top, left: noButtonPos.left }}
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          onTouchStart={moveNoButton}
        >
          No 💔
        </button>
      </div>
    </div>
  );
}

export default Valentine;