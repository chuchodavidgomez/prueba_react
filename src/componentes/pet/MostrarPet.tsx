import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Pet } from './modelo/Pet';

export interface MostrarPetProps {
  pet: Pet;
}

export const MostrarPet: React.FC<MostrarPetProps> = (props) => {

  const {pet} = props;

  if (pet.id !== -1) {
    return (
      <table>
        <thead>
        <tr>
          <td>
            <b>Name</b>
          </td>
          <td>
            <b>Status</b>
          </td>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {pet.name}
            </td>
            <td>
              {pet.status}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  return (
    <div>No found pet</div>
  );

};

MostrarPet.propTypes = {
  pet: PropTypes.any.isRequired
};
