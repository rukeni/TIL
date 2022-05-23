import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ScoopOption from './ScoopOptions';

export default function Options({optionType}) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3030/${optionType}`)
    .then(response => {
      setItems(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

  const optionItems = items.map(item => (
    <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath} />
  ))

  return <Row>{optionItems}</Row>
}