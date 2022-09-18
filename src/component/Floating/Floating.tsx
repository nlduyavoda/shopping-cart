import { darkOrange } from "../../utils/style";
import "./Floating.scss";
const Floating = ({ children }: any) => {
  const defaultStyle = {
    background: darkOrange,
  };
  return (
    <div className="floatingWrapper" style={defaultStyle}>
      {children}
    </div>
  );
};

export default Floating;
