import { Pet } from '../../../componentes/pet/modelo/Pet';

export const GET_PET = 'GET_PET';
export const INGRESO_NUMERO = 'INGRESO_NUMERO';

interface AccionGetPet {
  type: typeof GET_PET
  payload: Pet
}

interface AccionIngresoNumero {
  type: typeof INGRESO_NUMERO
  payload: string
}

export type TiposAccionesPet =
    AccionGetPet
    | AccionIngresoNumero;
