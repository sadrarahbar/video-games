interface Props {
  cartItems: string[];
  onClear: () => void;
}

function Cart({ cartItems, onClear }: Props) {
  return (
    <div>
      <h3>cart:</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClear}>clear</button>
    </div>
  );
}

export default Cart;
