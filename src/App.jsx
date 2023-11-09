import React, { useState } from 'react';
import './App.css';

function App() {
  const [userOption, setUserOption] = useState('');
  const [result, setResult] = useState(null);

  const options = ['piedra', 'papel', 'tijera'];

  function getRandomOption() {
    return options[Math.floor(Math.random() * 3)];
  }

  function jugar() {
    setResult(null);

    // Convertir las opciones a minúsculas para comparar sin distinguir mayúsculas y minúsculas
    const userOptionLowerCase = userOption.toLowerCase();
    const optionMac = getRandomOption();

    if (!options.includes(userOptionLowerCase)) {
      alert('Opción invalida. Por favor, elige entre piedra, papel o tijera.');
      return;
    }

    if (userOptionLowerCase === 'tijera' && optionMac === 'papel') {
      setResult(`¡Ganaste! La máquina eligió ${optionMac}`);
    } else if (userOptionLowerCase === 'tijera' && optionMac === 'piedra') {
      setResult(`¡Perdiste! La máquina eligió ${optionMac}`);
    } else if (userOptionLowerCase === 'papel' && optionMac === 'tijera') {
      setResult(`¡Perdiste! La máquina eligió ${optionMac}`);
    } else if (userOptionLowerCase === 'papel' && optionMac === 'piedra') {
      setResult(`¡Ganaste! La máquina eligió ${optionMac}`);
    } else if (userOptionLowerCase === 'piedra' && optionMac === 'papel') {
      setResult(`¡Perdiste! La máquina eligió ${optionMac}`);
    } else if (userOptionLowerCase === 'piedra' && optionMac === 'tijera') {
      setResult(`¡Ganaste! La máquina eligió ${optionMac}`);
    } else if (userOptionLowerCase === optionMac) {
      setResult(`¡Empate! La máquina eligió ${optionMac}`);
    }

    // Limpiar el input después de cada jugada
    setUserOption('');
  }

  return (
    <div className='container'>
      <h1>Mi Juego</h1>
      <h3>Ingrese una opcion</h3>
      <ul>
        <li>Piedra</li>
        <li>Papel</li>
        <li>Tijera</li>
      </ul>

      <input
        id='input_option_user'
        value={userOption}
        onChange={(e) => setUserOption(e.target.value)}
        type='text'
        placeholder='Escribe aqui ... '
      />

      <button className='mx-3 btn btn-primary' onClick={jugar}>
        JUGAR
      </button>

      {result && <p>{result}</p>}
    </div>
  );
}

export default App;
