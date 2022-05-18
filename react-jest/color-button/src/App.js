import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  return (
    <div>
      <button style={{backgroundColor: buttonColor}} onClick={ () => setButtonColor('blue')}>
        {buttonColor === 'red' ? 'Change to blue' : 'Change to red'}
      </button>
    </div>
  );
}

export default App;
