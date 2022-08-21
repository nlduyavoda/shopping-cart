import { useRef, useState } from "react";
import "./menu.scss";
import CheckedIcon from "../icons/checkedIcon";

const Option = ({ ...props }) => {
  const checkRef = useRef<HTMLDivElement>(null);
  const [checked, setChecked] = useState(false);
  const handleOnClick = () => {
    setChecked(!checked);
    return checked
      ? checkRef.current?.classList.remove("iconShow")
      : checkRef.current?.classList.add("iconShow");
  };
  return (
    <div className="item" key={props.id}>
      <div onClick={handleOnClick} className="icon" ref={checkRef}>
        <CheckedIcon />
      </div>
      <input type="checkbox" onClick={handleOnClick} />
      <label>{props.name}</label>
    </div>
  );
};

export default Option;
