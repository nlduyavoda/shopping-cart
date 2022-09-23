import { CardType } from "type";
import "./index.scss";

export const CardDetail = ({ card }: { card: CardType }) => {
  return (
    <div className="card">
      <div className="tag-price">
        <span>{card?.id}</span>
      </div>
      <div className="card_image">
        <img
          src="https://ecdn.game4v.com/g4v-content/uploads/2021/07/game4v-one-punch-man-cu-dam-cua-saitama-2.jpg"
          alt="saitama"
        />
      </div>

      <div className="card_body">
        <div className="title">{card?.name.toUpperCase()}</div>
        <div className="description">{card?.description}</div>
      </div>
    </div>
  );
};
