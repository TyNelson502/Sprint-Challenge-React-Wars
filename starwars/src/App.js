import React from 'react';
import './App.css';
import Characters from "../src/components/Character";
import Cards from "../src/components/Cards"
import styled from "styled-components";

const Header = styled.h1`
    font-size: 36px;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out

  return (
    <div className="App">
      <Header>
        <h1 className="Header">Rick and Morty Characters</h1>
      </Header>
      <Characters />
    </div>
  );
}
export default App;