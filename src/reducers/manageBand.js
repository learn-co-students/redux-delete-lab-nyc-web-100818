export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: Math.random() * 10000000000,
        name: action.name
      }
      const addState = { ...state, bands: [...state.bands, band] }
      console.log(addState)
      return addState
    case 'DELETE_BAND':
      const delState = {...state, bands: state.bands.filter(band => band.id !== action.id)}
      return delState
    default:
      return state;
  }
};
