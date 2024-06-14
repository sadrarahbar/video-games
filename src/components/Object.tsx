import { useState } from 'react';

function Object() {
  const [drink, setDrink] = useState({
    title: 'absolute',
    price: 5,
  });

  const handleClick = () => {
    setDrink({
      ...drink,
      price: ++drink.price,
    });
  };

  return (
    <div>
      <button onClick={handleClick}> click Me</button>
      <h1>{drink.title}</h1>
      <h2>{drink.price}</h2>
    </div>
  );
}

export default Object;
