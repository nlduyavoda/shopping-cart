import { useState } from "react";
import { Card, inputPutCard } from "../../type";
import { useCardMutation } from "../../useMutation";

export const Form = ({
  ...props
}: {
  card: Card | null;
  cardData: Card[] | [];
}) => {
  const { updateCard_test } = useCardMutation();
  const { card, cardData } = props;
  const [state, setState] = useState<{ name: string; description: string }>({
    name: card?.name || "",
    description: card?.description || "",
  });
  const handleEdit = (cardData: Card[], { id, card }: inputPutCard) => {
    updateCard_test(cardData, { id: id, card: card });
  };

  return (
    <div className="form">
      <label htmlFor="name">name: </label>
      <input
        type="name"
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
      <label htmlFor="description">description: </label>
      <input
        type="description"
        value={state.description}
        onChange={(e) => setState({ ...state, description: e.target.value })}
      />
      {/* <label htmlFor="img">image: </label>
      <input type="img" value={card.name}/> */}
      <button
        className="btn-add"
        onClick={() =>
          handleEdit(cardData, {
            id: card?.id || "",
            card: state,
          })
        }
      >
        edit
      </button>
    </div>
  );
};
