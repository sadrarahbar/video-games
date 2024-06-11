import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
// import ListGroup from './components/ListGroup';

function App() {
  // let items = ['tehran', 'saveh', 'hamedan', 'shiraz'];

  const onClick = () => {
    console.log('clicked');
  };

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
    <div>
      <Button color='secondary' onClick={onClick}>
        submit
      </Button>
      <Button color='warning' onClick={onClick}>
        cancle
      </Button>
    </div>
  );
}

export default App;
