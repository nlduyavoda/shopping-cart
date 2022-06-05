import { useRef, useState } from "react";
import { useQuery } from "react-query";
import "./App.scss";
import { inputPutCard } from "./type";
import { useCardMutation } from "./useMutation";
import { MockInputCard } from "./utils";
const host = "http://localhost:8000/";

export type Card = {
  id: number;
  name: string;
  description: string;
  image: string;
};
const fetchAPI = () => {
  const data = fetch(host)
    .then((res) => res.json())
    .then((res) => res);
  return data;
};

function App() {
  const { data: cardData } = useQuery(["get-cards"], fetchAPI);
  const { postCard_test, resetCard_test } = useCardMutation();
  const [state, setState] = useState<Card | null>();
  const activeRef = useRef(null);

  const handleSelectectedCard = (card: Card) => {
    if (state) {
      setState(null);
    } else {
      setState(card);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="list-card">
          {cardData &&
            cardData.map((card: Card, idx: number) => {
              return (
                <div
                  ref={activeRef}
                  className="card"
                  key={idx}
                  onClick={() => handleSelectectedCard(card)}
                >
                  <div
                    className={`card_image ${
                      state?.id === card.id && "active"
                    }`}
                  >
                    <div className="tag-price">
                      <span>{card.id}</span>
                    </div>
                    <img
                      style={{ height: "100%", width: "100%" }}
                      src={card.image}
                      alt={card.name}
                    />
                  </div>

                  <div
                    className={`card_body ${state?.id === card.id && "active"}`}
                  >
                    <div className="title">{card.name.toUpperCase()}</div>
                    <div className="description">{card.description}</div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="btn-options">
          {!state?.id && (
            <>
              <button
                className="btn-add"
                onClick={() => postCard_test(MockInputCard)}
              >
                add a random loki !!
              </button>

              <button className="btn-add" onClick={() => resetCard_test(host)}>
                reset all card
              </button>
            </>
          )}

          {state?.id && (
            <>
              <Form card={state} cardData={cardData} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

export const Form = ({
  card: card,
  cardData: cardData,
}: {
  card: Card;
  cardData: Card[];
}) => {
  const { updateCard_test } = useCardMutation();
  const [state, setState] = useState<{ name: string; description: string }>({
    name: card.name,
    description: card.description,
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
            id: card.id,
            card: state,
          })
        }
      >
        edit
      </button>
    </div>
  );
};
