import React from 'react';

const HirdetesekLista = ({ hirdetesek }) => {
  return (
    <div className="row">
      {hirdetesek.map(hirdetes => (
        <div className="col-md-4" key={hirdetes.id}>
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">{hirdetes.cim}</h5>
              <p className="card-text">{hirdetes.leiras}</p>
              <p className="card-text"><small className="text-muted">{hirdetes.ar} Ft</small></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HirdetesekLista;
