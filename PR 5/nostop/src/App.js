import React from "react";
// import ScriptTag from "react-script-tag";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/plugins.css";
import "./css/style.css";
import {
  Header,
  Parallex,
  About,
  Footer,
  Blog,
  Classes,
  Clients,
  Insta,
  Testimonials,
  Video,
} from "./path";

function App() {
  return (
    <div>
      <Header />
      <Parallex />
      <About />
      <Video />
      <Classes />
      <Blog />
      <Testimonials />
      <Clients />
      <Insta />
      <Footer />

      {/* JavaScript Imports */}
    </div>
  );
}

export default App;
