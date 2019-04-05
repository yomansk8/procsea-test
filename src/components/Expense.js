import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1em;
  width: 100%;
`

const Title = styled.div`
  color: hsl(208, 73%, 44%);
  display: block;
  font-weight: 500;
`

const User = styled.div`
  color: gray;
  display: block;
  font-size: 0.7em;
`

const Amount = styled(Title)`
  text-align: right;
  white-space: nowrap;
`

function Expense({ expense }) {
  const { amount, user, title } = expense
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <User>Paid by {user}</User>
      </div>
      <Amount>{amount.toFixed(2)} €</Amount>
    </Container>
  )
}

Expense.propTypes = {
  expense: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}

export default Expense
