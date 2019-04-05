import React, { useState } from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { addExpense } from '../actions'
import { getUsersList } from '../selectors'

const Inputs = styled.div`
  background-color: hsl(216, 45%, 98%);
  width: 100%;
  padding: 1em;
  display: flex;
  justify-content: space-between;

  & > * {
    max-width: 25%;
  }
`

const Button = styled.button`
  background-color: hsl(216, 45%, 38%);
  border: none;
  color: white;
  padding: 5px 7px;
  text-decoration: none;
`

function AddExpenseField({ addExpense, users }) {
  const [amount, setAmount] = useState('')
  const [title, setTitle] = useState('')
  const [user, setUser] = useState('')

  const handleFormSubmit = e => {
    e.preventDefault()
    addExpense({ amount, title, user })
    setAmount('')
    setTitle('')
    setUser('')
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Inputs>
        <input
          required
          name="title"
          onChange={e => setTitle(e.target.value)}
          placeholder="What ?"
          type="text"
          value={title}
        />
        <select required name="user" onChange={e => setUser(e.target.value)} value={user}>
          <option key="empty" value="">
            Who ?
          </option>
          {users.map(userName => (
            <option key={userName} value={userName}>
              {userName}
            </option>
          ))}
        </select>
        <input
          required
          name="amount"
          onChange={e => setAmount(parseFloat(e.target.value))}
          placeholder="€€"
          step="0.01"
          type="number"
          value={amount}
        />
        <Button type="submit">Add</Button>
      </Inputs>
    </form>
  )
}

AddExpenseField.propTypes = {
  addExpense: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const mapStateToProps = state => ({
  users: getUsersList(state),
})

const mapDispatchToProps = dispatch => ({
  addExpense: expense => dispatch(addExpense(expense)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddExpenseField)
