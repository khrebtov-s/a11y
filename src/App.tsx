import React from 'react';
import './App.css';
import Header  from './modules/Header';
import Skiplink from './modules/SkipLink'
import Navigation from './modules/Navigation';
import MainContent from './modules/MainContent';

import styled from 'styled-components';

const Container = styled.div`
  padding: 0 130px;
`

function App() {
  return (
    <div className="App">
      <Skiplink/>
      <Header/>
      <Container>
        <Navigation/>
        <MainContent/>
      </Container>
    </div>
  );
}

export default App;
