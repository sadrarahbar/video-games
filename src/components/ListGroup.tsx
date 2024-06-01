
function ListGroup() {
  let items = ['tehran', 'saveh', 'hamedan', 'shiraz'];
  // items = [];
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   };
  return (
    <>
      <h1>List</h1>
      {/* {getMessage()} */}
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>} {/* trusy */}
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            key={index}
            className='list-group-item'
            onClick={() => console.log('clicked')}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
