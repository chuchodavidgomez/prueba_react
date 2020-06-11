import {
  INGRESO_NUMERO,
  GET_PET,
  TiposAccionesPet
} from '../acciones/pet/pet.tipos-acciones';
import { EstadoPet } from '../modelo/EstadoPet';

const initialState: EstadoPet = {
  pet: {id: -1, name: '', status: ''},
  id: ''
};

export default function (state = initialState, action: TiposAccionesPet): EstadoPet {
  switch (action.type) {
    case GET_PET: {
      const pet = action.payload;
      return {
        ...state,
        pet: pet
      };
    }
    case INGRESO_NUMERO: {
      return {
        ...state,
        id: action.payload
      };
    }

    default:
      return state;
  }
}
