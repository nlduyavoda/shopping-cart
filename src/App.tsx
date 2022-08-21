import Navigation from "component/Navigation";
import { useState } from "react";
import "./App.scss";
import ListCard from "./pages/card";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCard, setSelectedCard] = useState();

  const handleSelectedCard = (card: any) => setSelectedCard(card);

  const closeNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Navigation
        isOpen={isOpen}
        isCloseNav={closeNav}
        selectedCard={selectedCard}
      />
      <ListCard isOpen={!isOpen} onSelectedCard={handleSelectedCard} />
    </div>
  );
}

export default App;
