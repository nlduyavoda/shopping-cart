import { useEffect, useState } from "react";
import { handleCheck } from "../../api/controller";
import "./index.scss";
export const Pagination = ({
  isOpen,
  input,
  totalPages,
  onSetCurrentPage,
}: {
  isOpen: Boolean;
  input: number | 1;
  totalPages: number;
  onSetCurrentPage: any;
}) => {
  const [state, setState] = useState<number[]>();
  // const [currentPage, setCurrentPage] = useState(input);
  useEffect(() => {
    const data = handleCheck(input, totalPages);
    console.log("data :>> ", data);
    setState(data);
  }, [input, totalPages, input]);

  return (
    <div className={`pagination ${!isOpen ? "active" : ""}`}>
      <button
        disabled={input === 1}
        className="item"
        onClick={() => onSetCurrentPage(1)}
      >
        first
      </button>
      <button
        disabled={input === 1}
        className="item"
        onClick={() => onSetCurrentPage(input - 1)}
      >
        prev
      </button>
      <div className="list">
        {state &&
          totalPages > 0 &&
          state.map((item, index) => {
            return (
              <div
                className={`item ${item === input && "active"}`}
                key={index}
                onClick={() => onSetCurrentPage(item)}
              >
                {item}
              </div>
            );
          })}
      </div>

      <button
        disabled={input === totalPages}
        className="item"
        onClick={() => onSetCurrentPage(input + 1)}
      >
        next
      </button>
      <button
        disabled={input >= totalPages - 1}
        className="item"
        onClick={() => onSetCurrentPage(totalPages - 1)}
      >
        end
      </button>
    </div>
  );
};
