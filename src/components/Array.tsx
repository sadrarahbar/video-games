import { useState } from 'react';

function Array() {
  const [tags, setTags] = useState(['sadra', 'amir', 'mohsen']);

  const handleClick = () => {
    // Add
    setTags([...tags, 'ahmad']);

    // Remove
    setTags(tags.filter((tag) => tag !== 'sadra'));

    // Update
    setTags(tags.map((tag) => (tag === 'sadra' ? 'reza' : tag)));
  };

  return (
    <div>
      <button onClick={handleClick}>change tags</button>
      <div>
        {tags.map((tag) => (
          <h1>{tag}</h1>
        ))}
      </div>
    </div>
  );
}

export default Array;
