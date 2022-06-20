import { useState } from "react";
import "./App.scss";
import { Form } from "./component/form";
import { Navigation } from "./component/nav";
import { CardPage } from "./pages/card";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      {/* <Form/> */}
      {/* <Navigation isOpen={isOpen} isCloseNav={closeNav} /> */}
      {/* <CardPage isOpen={!isOpen} /> */}
      {/* <button className="test-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "click to close nav" : "click to open nav"}
      </button> */}
    </div>
  );
}

export default App;
