import { axiosIntance } from '../config/axios.config';

export const PetRepositorio = {
    consultarPet: (id: number) => axiosIntance.get(`pet/${id}`)
};
