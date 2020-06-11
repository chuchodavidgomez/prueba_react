import * as PropTypes from 'prop-types';
import * as React from 'react';
import {
  ingresoNumero,
  getPetAsync
} from '../../redux/acciones/pet/pet.acciones';
import { EstadoGeneral } from '../../redux/modelo/EstadoGeneral';
import { MostrarPet } from './MostrarPet';
import { BuscadorPet } from './BuscadorPet';
import { Pet } from './modelo/Pet';
import { connect } from 'react-redux';


interface Props {
  pet: Pet,
  getPet: (id: number) => void
  ingresoNumero: (numeroIngresado: string) => void,
  id: string
}

class ContenedorPet extends React.Component<Props, any> {

  static propTypes = {
    pet: PropTypes.any.isRequired,
    getPet: PropTypes.func.isRequired,
    ingresoNumero: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.props.ingresoNumero('');
  }

  render() {

    const {pet, id, getPet} = this.props;

    return (
        <React.Fragment>
          <BuscadorPet 
            id={id}
            onClickBuscarPet={getPet}
            ingresoNumero={this.props.ingresoNumero}/>
          <MostrarPet pet={pet}/>
        </React.Fragment>
    );
  }
}

const mapStateToProps = (state: EstadoGeneral) => {
  return state.pet;
};

export default connect(
    mapStateToProps,
    {
      getPet: getPetAsync,
      ingresoNumero: ingresoNumero
    }
)(ContenedorPet);
