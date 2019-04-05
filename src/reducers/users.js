import { SET_FILTER } from '../actions'

const initialState = {
  filter: '',
  list: ['Caro', 'Goulven', 'Killian', 'Luc', 'Yann', 'Yohann'],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      }
    default:
      return state
  }
}
