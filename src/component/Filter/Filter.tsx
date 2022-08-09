import { useEffect, useRef, useState } from "react";
import { UpIcon } from "../icons";
import "./Filter.scss";

const toggleVisibleComponent = (
  isToggle: boolean,
  ref: { current: HTMLDivElement | null }
) => {
  if (isToggle) {
    ref.current?.classList.add("fade");
    ref.current?.classList.remove("show");

    ref.current?.addEventListener("animationend", () => {
      ref.current?.classList.remove("fade");
    });
  } else {
    ref.current?.classList.add("show");
    ref.current?.classList.remove("fade");
  }
};

const Options = ({ isShow }: { isShow: boolean }) => {
  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    toggleVisibleComponent(isShow, bodyRef);
  }, [isShow]);
  return (
    <div className="body" ref={bodyRef}>
      <div className="bodyWrapper">
        <div className="item">
          <div className="checkboxWrapper">
            <input type="checkbox" />
          </div>
          <div className="labelCheckbox">text</div>
        </div>
        <div className="item">
          <div className="checkboxWrapper">
            <input type="checkbox" />
          </div>
          <div className="labelCheckbox">text</div>
        </div>
        <div className="item">
          <div className="checkboxWrapper">
            <input type="checkbox" />
          </div>
          <div className="labelCheckbox">text</div>
        </div>
      </div>
    </div>
  );
};

const Fillter = () => {
  const [isShow, setShow] = useState(false);
  return (
    <div className="filterWrapper">
      <div className="header" onClick={() => setShow(!isShow)}>
        <div className="text">Text</div>
        <div className="icon">{isShow ? "up" : "down"}</div>
      </div>
      <Options isShow={isShow} />
    </div>
  );
};
export default Fillter;
