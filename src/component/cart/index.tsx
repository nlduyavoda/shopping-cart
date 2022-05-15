export default function Cart({
  number,
  pokemon = [],
}: {
  number: number;
  pokemon: any;
}) {
  console.log("pokemon :>> ", pokemon);
  return <div>cart: {number}</div>;
}
