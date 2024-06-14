import { useState } from 'react';
import { produce } from 'immer';

function ArrayOfObjects() {
  const [bugs, setBugs] = useState([
    { id: 1, title: 'bug01', fixed: false },
    { id: 2, title: 'bug02', fixed: false },
  ]);

  // handle update object with spread operator
  // const handleClick = () => {
  //   setBugs(bugs.map((bug) => (bug.id === 2 ? { ...bug, fixed: true } : bug)));
  // };

  // handle update object with Immer
  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 2);
        if (bug) {
          bug.fixed = true;
        }
      })
    );
  };

  return (
    <div>
      <button onClick={handleClick}>change tags</button>
      <div>
        {bugs.map((bug) => (
          <div key={bug.id}>
            {bug.id}
            {bug.title}
            {bug.fixed === true ? 'true' : 'false'}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArrayOfObjects;
