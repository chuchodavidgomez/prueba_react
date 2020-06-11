import { combineReducers } from 'redux';
import petReductor from './pet.reductor';

export default combineReducers({pet: petReductor});
