import "./App.css";
import Crud from "./Components/Crud";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Back.css";
import { Button } from "bootstrap";

function App() {
  function setupAnimation() {
    const style = `
      body {
        margin: 0;
        padding: 0;
        background-color: #f0f0f0; /* Replace with your desired body background color */
      }

      .b-container {
        position: relative;
        width: 100%;
        height: 250px;
        overflow: hidden;
        background-image: url("/public/b.png");
        background-size: cover;
      }

      .b-image {
        display:inline-block !important;
        position: absolute;
        top: 0;
        left: 100%; /* Initial position outside the container */
        width: 250px;
        height: 250px;
        animation: slideRightToLeft 5s linear infinite;
        animation-delay: 1s;
      }

      @keyframes slideRightToLeft {
        0% {
          left: 100%;
        }
        100% {
          left: -250px; /* The width of the image */
        }
      }
    `;

    const styleElement = document.createElement("style");
    styleElement.textContent = style;
    document.head.appendChild(styleElement);

    document.addEventListener("DOMContentLoaded", function () {
      function startAnimation() {
        const bImage = document.querySelector(".b-image");

        function playAnimation() {
          bImage.style.animation = "slideRightToLeft 15s ease-in-out";
          setTimeout(() => {
            bImage.style.animation = "";
            setTimeout(playAnimation, 1000); // Start animation again after 10 seconds
          }, 15000); // Reset animation after 15 seconds (playtime)
        }

        playAnimation();
      }

      startAnimation();
    });
  }
  // setupAnimation();
  return (
    <>
      <Crud />
      <button onClick={setupAnimation}>button</button>
    </>
  );
}

export default App;
