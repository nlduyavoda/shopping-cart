import { useState } from "react";
import { cartType } from "../../type";
import "./index.css";
export default function Cart({
  carts = [],
  onReduce,
}: {
  carts: cartType[];
  onReduce: (cart: cartType) => void;
}) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="carts">
      <div
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        cart: {carts.length}
      </div>
      {carts.length > 0 && (
        <div>
          {carts.map((cart: cartType) => {
            return (
              <div key={cart.id} className="cart">
                <div className="cart-number">{cart.number}</div>
                <div className="cart-name">{cart.name}</div>

                <div>{cart.quantity}</div>
                <div onClick={() => onReduce(cart)}>-</div>
              </div>
            );
          })}
        </div>
      )}
      {/* <div>{pokemon[0].name}</div> */}
    </div>
  );
}
