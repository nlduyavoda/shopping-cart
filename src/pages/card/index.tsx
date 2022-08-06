import { useRef, useState } from "react";
import { useQuery } from "react-query";
import { paginateAPI } from "../../api";
import { Pagination } from "../../component/pagination";
import { Card } from "../../type";
import "./index.scss";

export const CardPage = ({ isOpen }: { isOpen: Boolean }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: paginationRes } = useQuery(
    ["paginate-cards", currentPage],
    () => paginateAPI(currentPage)
  );
  const activeRef = useRef(null);
  const [state, setState] = useState<Card | null>();
  const handleChangeCurrentPage = (newCurrentPage: number) => {
    setCurrentPage(newCurrentPage);
  };
  const handleSelectectedCard = (card: Card) => {
    if (state) {
      setState(null);
    } else {
      setState(card);
    }
  };

  return (
    <div className={`cards ${isOpen ? "active" : ""}`}>
      <div className="list-card">
        {paginationRes?.cards &&
          paginationRes?.cards.map((card: Card, idx: number) => {
            return (
              <div
                ref={activeRef}
                className="card"
                key={idx}
                onClick={() => handleSelectectedCard(card)}
              >
                <div
                  className={`card_image ${state?.id === card?.id && "active"}`}
                >
                  <div className="tag-price">
                    <span>{card?.id}</span>
                  </div>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={card?.image}
                    alt={card?.name}
                  />
                </div>

                <div
                  className={`card_body ${state?.id === card?.id && "active"}`}
                >
                  <div className="title">{card?.name.toUpperCase()}</div>
                  <div className="description">{card?.description}</div>
                </div>
              </div>
            );
          })}
        {paginationRes?.totalPage && currentPage && (
          <Pagination
            isOpen={isOpen}
            input={currentPage}
            totalPages={paginationRes?.totalPage}
            onSetCurrentPage={handleChangeCurrentPage}
          />
        )}
      </div>
    </div>
  );
};
