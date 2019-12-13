import React from "react";
// import styled from "styled-components";

import PersonCard from "./PersonCard";

const PeopleContainer = function (props) {

    let people = props.people;

    console.log("people are", people);

    return (

        // for (person of people)
        people.map( (person) => {
                return ( <PersonCard name={person.name} homeWorld={person.homeworld} films={person.films} key={person.name} /> );   
            })
    );
        
}

export default PeopleContainer;