import './App.css';
import ListGroup from './components/ListGroup';

function App() {
  let items = ['tehran', 'saveh', 'hamedan', 'shiraz'];

  return (
    <div>
      <ListGroup items={items} heading='cties'></ListGroup>
      <ListGroup items={items} heading='contries'></ListGroup>
    </div>
  );
}

export default App;
