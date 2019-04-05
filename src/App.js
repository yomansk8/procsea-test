import React from 'react'

import styled from 'styled-components'

import AddExpenseForm from './components/AddExpenseForm'
import Expenses from './components/Expenses'
// import Header from './components/Header'
import Total from './components/Total'
import UserFilterForm from './components/UserFilterForm'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const Header = styled.div`
  background-color: hsl(208, 73%, 24%);
  color: white;
  font-weight: 500;
  padding: 1em;
  text-align: center;
`

const Title = styled.div`
  font-size: 1.1em;
`

const Main = styled.div`
  flex: 1 1 auto;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

function App() {
  return (
    <Container>
      <Header>
        <Title>Integration week-end</Title>
        <UserFilterForm />
      </Header>
      <Main>
        <Expenses />
      </Main>
      <div>
        <AddExpenseForm />
        <Total />
      </div>
    </Container>
  )
}

export default App
