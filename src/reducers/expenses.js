import uuidv4 from 'uuid/v4'

import { ADD_EXPENSE } from '../actions'

const initialState = {
  list: [],
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        list: [...state.list, { ...action.expense, id: uuidv4() }],
      }
    default:
      return state
  }
}
