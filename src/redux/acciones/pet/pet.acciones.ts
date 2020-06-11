import {
  INGRESO_NUMERO,
  GET_PET,
  TiposAccionesPet
} from './pet.tipos-acciones';
import { Pet } from '../../../componentes/pet/modelo/Pet';
import { PetRepositorio } from '../../../api/pet.repositorio';

export function getPet(pet: Pet): TiposAccionesPet {
  return {
    type: GET_PET,
    payload: pet
  };
}

export function ingresoNumero(numero: string): TiposAccionesPet {
  return {
    type: INGRESO_NUMERO,
    payload: numero
  };
}

export function getPetAsync(id: number) {
  return function (dispacth: any) {
    PetRepositorio.consultarPet(id).then(respuesta =>
      {
        console.log(respuesta)
        dispacth(getPet(respuesta.data));
      }
    ).catch(
      e => {
        console.log(e)
        dispacth(getPet({id: -1, name: '', status: ''}))
      } 
    );
  };
}
