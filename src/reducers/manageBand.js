export default function manageBand(state = {
  bands: [], iterator: 0
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, {name: action.name, id: state.iterator}], iterator: state.iterator + 1 }
    case 'DELETE_BAND':
      return {...state, bands: state.bands.filter(band => band.id !== action.id)}

    default:
      return state;
  }
};
