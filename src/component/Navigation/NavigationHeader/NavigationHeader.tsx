import MenuIcon from "../../IconMenu";
import "./index.scss";

const NavigationHeader = ({
  ...props
}: {
  isOpen: boolean;
  isCloseNav: () => void;
}) => {
  return (
    <div className="navHeader">
      <MenuIcon isOpen={!props.isOpen} onClick={props.isCloseNav} />
    </div>
  );
};

export default NavigationHeader;
