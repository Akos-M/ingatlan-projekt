import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Hirdetesek() {
  const [hirdetesek, setHirdetesek] = useState([]);

  useEffect(() => {
    axios.get('/api/hirdetesek')
      .then(response => {
        setHirdetesek(response.data);
      })
      .catch(error => {
        console.error('Hiba a hirdetések betöltésekor', error);
      });
  }, []);

  return (
    <div>
      <h1>Hirdetések</h1>
      <ul>
        {hirdetesek.map(hirdetes => (
          <li key={hirdetes.id}>
            <h2>{hirdetes.cim}</h2>
            <p>{hirdetes.leiras}</p>
            <p>{hirdetes.ar} Ft</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Hirdetesek;
