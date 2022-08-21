import "./menu.scss";
import PlusIcon from "../icons/PlusIcon";
import MinusIcon from "../icons/MinusIcon";
import Option from "./option";
import { useRef, useState } from "react";
import { toggleModal } from "./toggleModal";

const Options = ({ ...props }) => {
  const modalRef = useRef(null);
  const [isShow, setShow] = useState(false);

  const handleToggle = () => {
    toggleModal(modalRef, isShow);
    setShow(!isShow);
  };

  return (
    <div className="modal">
      <div className="header">
        <div>{props.label}</div>
        <div onClick={handleToggle}>
          <div className={`headerIcon ${isShow && "showIcon"}`}>
            <MinusIcon />
          </div>
          <div className={`headerIcon ${!isShow && "showIcon"}`}>
            <PlusIcon />
          </div>
        </div>
      </div>

      <div className="container" ref={modalRef}>
        {props.options.map((opt: any) => (
          <Option id={opt.id} name={opt.name} />
        ))}
      </div>
    </div>
  );
};

export default Options;
