import { useCardMutation } from "../../useMutation";
import { MockInputCard } from "../../utils";
import "./index.scss";
export const Navigation = ({
  isOpen,
  isCloseNav,
}: {
  isOpen: Boolean;
  isCloseNav: () => void;
}) => {
  const { postCard_test, resetCard_test } = useCardMutation();

  return (
    <div className={`navigation ${isOpen ? "active" : ""}`}>
      <button className="field-row" onClick={isCloseNav}>
        close nav
      </button>
      <div className="field-row icon">this is icon</div>
      <div className="field-row buttons">
        <div className="add ">
          <label>icon</label>
          <button onClick={() => {}}>add a random loki !!</button>
        </div>

        <div className="reset">
          <label>icon</label>
          <button onClick={() => {}}>reset all card</button>
        </div>

        {/* {!state?.id && (
         
          </>
        )}

        */}
      </div>
    </div>
  );
};
