import { useDispatch } from "react-redux";
import { SAGA_ADD_TO_CART } from "saga/action";
import { cartSlice } from "saga/reducer";
import { CardType } from "type";
import "./index.scss";

export const CardDetail = ({ card }: { card: CardType }) => {
  const dispatch = useDispatch();
  const mockPrice = 130;
  const handleOnClick = (value: number) => {
    return;
  };
  return (
    <div className="card">
      <div className="tag-price">
        <span>{card?.id}</span>
      </div>
      <div className="card_image">
        <h1>image</h1>
      </div>

      <div className="card_body">
        <div className="title">{card?.name.toUpperCase()}</div>
        <div className="description">{card?.description}</div>
        <div>
          <p>price: {mockPrice}</p>
          <button onClick={() => handleOnClick(mockPrice)}>buy</button>
        </div>
      </div>
    </div>
  );
};
