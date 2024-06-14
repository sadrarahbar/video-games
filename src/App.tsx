// import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
import Like from './components/Like';
import ListGroup from './components/ListGroup';
// import ListGroup from './components/ListGroup';
import { useState } from 'react';
import Object from './components/Object';
import CustomerInfo from './components/CustomerInfo';
import Array from './components/Array';
import ArrayOfObjects from './components/ArrayOfObjects';
import NavBar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState(['laptop', 'mobile']);
  // let items = ['tehran', 'saveh', 'hamedan', 'shiraz'];

  // const [alertState, setAlertState] = useState(false);

  // const onClick = () => {
  //   console.log('clicked');
  // };

  return (
    // <div>
    //   <ListGroup items={items} heading='cties'></ListGroup>
    //   <ListGroup items={items} heading='contries'></ListGroup>
    // </div>
    // <div>
    //   <Alert>
    //     Hello <h1>World</h1>
    //   </Alert>
    // </div>
    // <div>
    //   <Button color='secondary' onClick={onClick}>
    //     submit
    //   </Button>
    //   <Button color='warning' onClick={onClick}>
    //     cancle
    //   </Button>
    // </div>

    // <div>
    //   <ListGroup items={items} heading='cties'></ListGroup>
    //   <ListGroup items={items} heading='contries'></ListGroup>

    //   {alertState && (
    //     <Alert onClose={() => setAlertState(false)}>Hello World</Alert>
    //   )}
    //   <Button color='secondary' onClick={() => setAlertState(true)}>
    //     submit
    //   </Button>
    // </div>

    // <div>
    //   <Like size="50" onClick={()=>console.log('clicked')}/>
    // </div>

    <div>
      {/* <Object /> */}
      {/* <CustomerInfo /> */}
      {/* <Array /> */}
      {/* <ArrayOfObjects /> */}
      <NavBar cartItemsCount={cartItems.length}></NavBar>
      <Cart cartItems={cartItems} onClear={()=>setCartItems([])}></Cart>
   
    </div>
  );
}

export default App;
