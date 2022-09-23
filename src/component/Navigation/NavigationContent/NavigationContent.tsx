import { useEffect, useRef } from "react";
import { addCard } from "constant";
import { MockInputCard, optionsDefaultValues } from "../../../utils";
import { Form } from "../../form";
import Options from "../../menu/options";
import "./index.scss";

const handleToggle = (navRef: any, isOpen: boolean) => {
  if (!isOpen) {
    navRef.current.classList.remove("show");
    navRef.current.classList.add("fade");
    navRef.current.addEventListener("animationend", () => {
      console.log("object");
      navRef.current.classList.remove("fade");
    });
  } else {
    navRef.current.classList.add("show");
    navRef.current.classList.remove("fade");
  }
};

const NavigationContent = ({
  ...props
}: {
  selectedCard: any;
  isOpen: boolean;
}) => {
  const navRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    handleToggle(navRef, props.isOpen);
  }, [props.isOpen]);
  return (
    <div className="NavigationContent" ref={navRef}>
      <Options label="Selector-1" options={optionsDefaultValues} />

      <div className="btnsWrapper">
        <button
          onClick={() =>
            addCard("http://localhost:8001", JSON.stringify(MockInputCard))
          }
        >
          add a random loki !!
        </button>
        <button onClick={() => {}}>reset all card</button>
      </div>
      {!!props.selectedCard && <Form selectedCard={props.selectedCard} />}
    </div>
  );
};

export default NavigationContent;
