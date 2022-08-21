import { useEffect, useRef, useState } from "react";
import "./index.scss";

const toggleModal = (props: any, state: any) => {
  if (state) {
    props.current.classList.remove("active");
    props.current.classList.add("inactive");
    props.current.addEventListener("animationend", () => {});
  } else {
    props.current.classList.add("active");
    props.current.classList.remove("inactive");
  }
};

const MenuIcon = ({ ...props }: any) => {
  const [toggle, setActive] = useState(props.isOpen);
  const middleItem = useRef(null);
  const containerRef = useRef(null);

  const handleToglge = () => {
    setActive(!toggle);
    if (containerRef) {
      toggleModal(containerRef, toggle);
    }
  };

  useEffect(() => {
    toggleModal(containerRef, toggle);
  }, [toggle]);

  return (
    <div className="MenuIcon" onClick={props.onClick}>
      <div
        className="menu-icon-container"
        onClick={handleToglge}
        ref={containerRef}
      >
        <div className="iconBar top"></div>
        <div className="iconBar middle" ref={middleItem}></div>
        <div className="iconBar bottom"></div>
      </div>
    </div>
  );
};

export default MenuIcon;
