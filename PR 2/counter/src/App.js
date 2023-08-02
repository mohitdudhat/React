import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import "./Counter.css";
import buttonSound from "./button-sound.mp3";
function App() {
  const [no, setNo] = useState(0);
  const add = () => {
    setNo(no + 1);
    playSound();
  };
  const reset = () => {
    setNo(0);
    playSound();
  };
  const minus = () => {
    setNo(no - 1);
    playSound();
  };
  useEffect(() => {
    console.log("updated");
  }, [no]);
  const playSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };
  return (
    <>
      <h1>{no}</h1>
      <div className="centered-container">
        <div style={{ width: "80%", textAlign: "center" }}>
          <div className="buttons">
            <button onClick={() => add()} className="custom-btn btn-2">
              +
            </button>
            <button onClick={() => reset()} className="custom-btn btn-2">
              Reset
            </button>
            <button onClick={() => minus()} className="custom-btn btn-2">
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
