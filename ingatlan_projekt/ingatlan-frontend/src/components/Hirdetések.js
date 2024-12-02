import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HirdetesekLista from './HirdetesekLista';

const Hirdetesek() => {
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

  return ( <HirdetesekLista hirdetesek={hirdetesek} /> 
    
  );
}

export default Hirdetesek;
