import * as PropTypes from 'prop-types';
import * as React from 'react';

interface BuscadorPetProps {
  id: string,
  onClickBuscarPet: (id: number) => void,
  ingresoNumero: (id: string) => void
}

export const BuscadorPet: React.FC<BuscadorPetProps> = (props) => {

  const {onClickBuscarPet, id, ingresoNumero} = props;

  return (
      <React.Fragment>
        <input type="number" value={id} onChange={(e) => ingresoNumero(e.target.value)}/>
        <br/>
        <button onClick={() => onClickBuscarPet(Number(id))}>Get Pet</button>
      </React.Fragment>
  );
};

BuscadorPet.propTypes = {
  id: PropTypes.string.isRequired,
  onClickBuscarPet: PropTypes.func.isRequired,
  ingresoNumero: PropTypes.func.isRequired
};

