import {EMPLOYEE_UPDATE, RESET_FORM} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === {prop: 'name', value: 'jane'}
      // const newState = {}
      // newState[action.payload.prop] = action.payload.value
      return {...state, [action.payload.prop]: action.payload.value};
    case RESET_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
