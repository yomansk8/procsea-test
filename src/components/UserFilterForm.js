import React from 'react'
import { connect } from 'react-redux'

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { setFilter } from '../actions'
import { getUsersFilter, getUsersList } from '../selectors'

const Container = styled.div`
  font-size: 1em;
  margin-top: 0.5em;
`

function UserFilterForm({ setFilter, users, usersFilter }) {
  return (
    <Container>
      <label htmlFor="usersFilter">Filter : </label>
      <select name="usersFilter" onChange={e => setFilter(e.target.value)} value={usersFilter}>
        <option value="">All</option>
        {users.map(user => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
      </select>
    </Container>
  )
}

UserFilterForm.propTypes = {
  setFilter: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.string).isRequired,
  usersFilter: PropTypes.string.isRequired,
}

const mapDispatchToProps = dispatch => ({
  setFilter: usersFilter => dispatch(setFilter(usersFilter)),
})

const mapStateToProps = state => ({
  usersFilter: getUsersFilter(state),
  users: getUsersList(state),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserFilterForm)
