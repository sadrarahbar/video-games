import { useState } from 'react';
// import styles from './ListGroup.module.css';
import { CiBullhorn } from 'react-icons/ci';

// import './ListGroup.css';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: disc;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background-color: ${(props) => (props.active ? 'blue' : 'none')};
  color: ${(props) => (props.active ? 'white' : 'none')};
`;

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <CiBullhorn color="red" size="50"/>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>} {/* trusy */}
      {/* Css modules */}
      {/* <ul className={styles["list-group"]}> */}
      {/* <ul className={styles.listGroup}> */}
      {/* <ul className={[styles.listGroup, styles.container].join(' ')}> */}
      {/* <ul className={[styles["list-group"], styles.container].join(' ')}> */}
      {/* styled-component */}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
