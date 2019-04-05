export const getUsersList = store => store.users.list

export const getUsersFilter = store => store.users.filter

export const getFilteredExpensesList = store => {
  if (store.users.filter === '') {
    return store.expenses.list
  }
  return store.expenses.list.filter(expense => expense.user === store.users.filter)
}

export const getTotalAmount = store =>
  getFilteredExpensesList(store).reduce((acc, expense) => acc + expense.amount, 0)
