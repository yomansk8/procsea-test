import React from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import Expense from './Expense'
import { getFilteredExpensesList } from '../selectors'

const Container = styled.div`
  width: 100%;
`

const CenteredMessage = styled.p`
  text-align: center;
  width: 100%;
`

function Expenses({ expenses }) {
  return (
    <Container>
      {expenses.length === 0 ? (
        <CenteredMessage>Nothing to show</CenteredMessage>
      ) : (
        expenses.map(expense => <Expense expense={expense} key={expense.id} />)
      )}
    </Container>
  )
}

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

const mapStateToProps = state => ({
  expenses: getFilteredExpensesList(state),
})

export default connect(
  mapStateToProps,
  null,
)(Expenses)
