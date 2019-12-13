import React, {useState, useEffect} from 'react';
import './App.css';

import axios from "axios";
import styled from "styled-components";
import PeopleContainer from "./components/PeopleContainer";

// import {offlinePeopleData} from "./offlineData/offlinePeopleData";
// import {offlineFilmData} from "./offlineData/offlineFilmData";

const AppStyleWrapper = styled.div`
  font-size: 62.5%;
`;

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

  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [counter, setCounter] = useState(0);

  // const [films, setFilms] = useState(offlineFilmData);
  // const [people, setPeople] = useState(offlinePeopleData);
  // const [counter, setCounter] = useState(0);

  useEffect(getFilms, []);
  useEffect(getPeople, []);

  // retrieves film data from SWAPI
  function getFilms() {
    axios.get("https://swapi.co/api/films")
    .then(
      (response) => {
        // store returned data in a variable to pick out episode and title only
        let filmData = response.data.results;
        let filmList = [];

        // add films to list so that 
        filmData.map((film) => {
          filmList[film["episode_id"]] = film.title;
        })

        setFilms(filmList);
        setCounter(counter + 1);
      }
      )
    .catch(
      (error) => { console.log("There was an error retrieving the data:" , error)}
    )
  }


  // retrieves people data from SWAPI
  function getPeople() {
    axios.get("https://swapi.co/api/people")
    .then(
      (response) => {
        setPeople(response.data.results);
        setCounter(counter + 1);

        console.log(counter);
      }
      )
    .catch(
      (error) => { console.log("There was an error retrieving the data:" , error)}
    )
  }

  return (
    <div className="App">
      <AppStyleWrapper>
        <h1 className="Header">React Wars</h1>
        <Subtitle>People of Star Wars</Subtitle>
        <StyledCardContainer>
          <PeopleContainer people={people} releasedFilms={films} />
        </StyledCardContainer>
      </AppStyleWrapper>
    </div>
  );
}

export default App;
