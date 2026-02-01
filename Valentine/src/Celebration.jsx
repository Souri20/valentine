import "./Celebration.css";
import love from "./assets/love.JPG";
   // ✅ corrected path

function Celebration() {
  return (
    <div className="celebration-container">
      <h1 className="celebration-text">🎉 Hurray! 🎉</h1>
      <img
        src={love}
        alt="Heart"
        className="celebration-image"
      />
      <p className="celebration-message">You will be my Valentine Appi 💖</p>
    </div>
  );
}

export default Celebration;