import { paginateAPI } from "constant";
import { useQuery } from "react-query";
import { CardType } from "type";
import { CardDetail } from "./cardDetail";
import "./index.scss";

const ListCard = ({
  isOpen,
}: {
  isOpen: Boolean;
  onSelectedCard: (card: any) => void;
}) => {
  const currentPage = 1;
  const { data: paginationRes } = useQuery(
    ["paginate-cards", currentPage],
    () => paginateAPI(currentPage)
  );

  return (
    <div className={`list-card${isOpen ? " active" : ""}`}>
      {paginationRes?.cards &&
        paginationRes.cards.map((card: CardType) => {
          return <CardDetail card={card} key={card.id} />;
        })}
    </div>
  );
};

export default ListCard;
