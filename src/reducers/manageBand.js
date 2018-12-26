export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const maxId = Math.max(...state.bands.map(b => b.id))
      const id = maxId > 0 ? maxId + 1 : 1
      const band = {
        name: action.name,
        id: id
      }
      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      return { ...state, bands: state.bands.filter(band => band.id !== action.id) }

    default:
      return state;
  }
};
