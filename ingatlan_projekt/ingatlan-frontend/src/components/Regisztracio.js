import React, { useState } from 'react';
import axios from 'axios';

function Regisztracio() {
  const [felhasznalonev, setFelhasznalonev] = useState('');
  const [email, setEmail] = useState('');
  const [jelszo, setJelszo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/regisztracio', {
      felhasznalonev,
      email,
      jelszo
    })
    .then(response => {
      alert('Sikeres regisztráció!');
    })
    .catch(error => {
      console.error('Hiba a regisztráció során', error);
    });
  };

  return (
    <div>
      <h1>Regisztráció</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Felhasználónév:
          <input type="text" value={felhasznalonev} onChange={e => setFelhasznalonev(e.target.value)} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Jelszó:
          <input type="password" value={jelszo} onChange={e => setJelszo(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Regisztráció</button>
      </form>
    </div>
  );
}

export default Regisztracio;
