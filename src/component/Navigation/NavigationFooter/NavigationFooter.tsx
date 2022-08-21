import SignInIcon from "../../icons/signinIcon";
import "./NavigationFooter.scss";

const NavigationFooter = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="navFooter">
      <div className="footerWrapper">
        {/* <div className="footerIcon"> */}
        <div className={`footerIcon ${!isOpen ? "small" : ""}`}>
          <SignInIcon />
        </div>
        <div className={`footerTitle${!isOpen ? "-hidden" : ""}`}>
          <h3>Log out!</h3>
        </div>
      </div>
    </div>
  );
};

export default NavigationFooter;
