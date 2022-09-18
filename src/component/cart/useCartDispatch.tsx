import { cartType } from "../../type";

const action = {
  INCREASE: "INCREASE",
  REDUCE: "REDUCE",
};

const CartDispatch = (cart: cartType, carts: cartType[], status: string) => {
  const cartIndex = carts.findIndex(
    (element: cartType) => element.id === cart.id && element.quantity
  );

  const newCarts = carts.map((element: cartType, index) => {
    if (index === cartIndex) {
      switch (status) {
        case action.INCREASE:
          return { ...element, quantity: element.quantity + 1 };

        case action.REDUCE:
          return { ...element, quantity: element.quantity - 1 };
      }
    }
    return element;
  });
  return newCarts;
};
export default CartDispatch;
