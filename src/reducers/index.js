import { combineReducers } from 'redux'

import expenses from './expenses'
import users from './users'

export default combineReducers({ expenses, users })
