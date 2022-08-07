import { useRef } from "react";
import { Form } from "../form";
import { RightIcon, LeftIcon } from "../icons";
import "./Navigation.scss";
import { handleToggleModal } from "./toggleModal";

const Navigation = ({
  isOpen,
  isCloseNav,
  selectedCard,
}: {
  isOpen: boolean;
  isCloseNav: () => void;
  selectedCard?: any;
}) => {
  const titleRef = useRef<HTMLDivElement>(null);
  return (
    <div className={`navigation ${isOpen ? "active" : ""}`}>
      <div className="toggleWrapper">
        <div ref={titleRef} className="title">
          <h2>Bonjour !</h2>
        </div>
        <div className={`btnToggle ${isOpen ? "active" : ""}`}>
          <button
            onClick={() => {
              isCloseNav();
              handleToggleModal(titleRef, isOpen, "title");
            }}
          >
            {isOpen ? <LeftIcon /> : <RightIcon />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div>
          <div className="btnsWrapper">
            <button onClick={() => {}}>add a random loki !!</button>
            <button onClick={() => {}}>reset all card</button>
          </div>
          {!!selectedCard && <Form selectedCard={selectedCard} />}
        </div>
      )}
    </div>
  );
};

export default Navigation;
