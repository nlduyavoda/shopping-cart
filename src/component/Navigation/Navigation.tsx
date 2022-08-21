import "./index.scss";
import NavigationContent from "./NavigationContent";
import NavigationFooter from "./NavigationFooter";
import NavigationHeader from "./NavigationHeader";

const Navigation = ({
  isOpen,
  isCloseNav,
  selectedCard,
}: {
  isOpen: boolean;
  isCloseNav: () => void;
  selectedCard?: any;
}) => {
  return (
    <div className={`navigation ${isOpen ? "showNavigation" : ""}`}>
      <NavigationHeader isOpen={isOpen} isCloseNav={isCloseNav} />
      <NavigationContent selectedCard={selectedCard} isOpen={isOpen} />
      <NavigationFooter isOpen={isOpen} />
    </div>
  );
};

export default Navigation;
