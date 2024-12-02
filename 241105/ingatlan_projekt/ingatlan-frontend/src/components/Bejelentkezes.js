import React, { useState } from 'react';
import axios from 'axios';

function Bejelentkezes() {
  const [felhasznalonev, setFelhasznalonev] = useState('');
  const [jelszo, setJelszo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/bejelentkezes', {
      felhasznalonev,
      jelszo
    })
    .then(response => {
      alert('Sikeres bejelentkezés!');
    })
    .catch(error => {
      console.error('Hiba a bejelentkezés során', error);
    });
  };

  return (
    <div>
      <h1>Bejelentkezés</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Felhasználónév:
          <input type="text" value={felhasznalonev} onChange={e => setFelhasznalonev(e.target.value)} required />
        </label>
        <br />
        <label>
          Jelszó:
          <input type="password" value={jelszo} onChange={e => setJelszo(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Bejelentkezés</button>
      </form>
    </div>
  );
}

export default Bejelentkezes;
