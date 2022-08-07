import "./index.scss";

export const fetchTodoList = async () => {
  try {
    return await fetch("http://localhost:8001/")
      .then((res) => res.json())
      .then((res) => res);
  } catch (error) {
    console.log("fetch fail");
  }
};

export type Card = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export const Form = ({ selectedCard }: { selectedCard: Card }) => {
  const { name, description } = selectedCard;
  return (
    <div className="form">
      <label>name: </label>
      <input type="name" value={description} />
      <label>description: </label>
      <input type="description" value={name} />
    </div>
  );
};
