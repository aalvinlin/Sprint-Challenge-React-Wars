import React, {useState, useEffect} from 'react';
import './App.css';

import axios from "axios";
import styled from "styled-components";
import PeopleContainer from "./components/PeopleContainer";

const Subtitle = styled.h2`
  font-size: 3rem;
`;

const StyledCardContainer = styled.div`
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [people, setPeople] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(getPeople, []);

  function getPeople() {
    axios.get("https://swapi.co/api/people")
    .then(
      (response) => {
        // console.log(response.data.results);

        setPeople(response.data.results);
        setCounter(counter + 1);
      }
      )
    .catch(
      (error) => { console.log("There was an error retrieving the data:" , error)}
    )
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Subtitle>People of Star Wars</Subtitle>
      <StyledCardContainer>
        <PeopleContainer people={people} />
      </StyledCardContainer>
    </div>
  );
}

export default App;
