import React from 'react';
import Options from './Options';

export default function OrderEntry() {
  return (
    <>
    <Options optionsType='scoops' />
    <Options optionType='toppings' />
    </>
  );
}
