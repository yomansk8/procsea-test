// Actions types
export const ADD_EXPENSE = 'ADD_EXPENSE'
export const SET_FILTER = 'SET_FILTER'

// Actions creators
export const addExpense = expense => ({ expense, type: ADD_EXPENSE })
export const setFilter = filter => ({ filter, type: SET_FILTER })
