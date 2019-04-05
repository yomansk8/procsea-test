import React from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getTotalAmount } from '../selectors'

const Container = styled.div`
  align-items: flex-end;
  background-color: hsl(208, 73%, 24%);
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 100%;
`

const Title = styled.div`
  color: hsl(208, 73%, 84%);
  font-size: 0.7em;
  letter-spacing: 0.2px
  text-transform: uppercase;
`

const Amount = styled.div`
  font-weight: 400;
`

function Total({ total }) {
  return (
    <Container>
      <Title>Total expenses</Title>
      <Amount>{total.toFixed(2)} €</Amount>
    </Container>
  )
}

Total.propTypes = {
  total: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  total: getTotalAmount(state),
})

export default connect(
  mapStateToProps,
  null,
)(Total)
