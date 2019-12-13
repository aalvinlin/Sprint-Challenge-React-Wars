import React from "react";
// import styled from "styled-components";

import PersonCard from "./PersonCard";

const PeopleContainer = function (props) {

    let people = props.people;
    console.log("people are", people);

    return (

        people.map( (person) => {

                // build a list of films that this person apperas in from all known films. get film ID from URL
                let filmsAppearedIn = person.films.map(film => parseInt(film.charAt(film.length - 2)));
                filmsAppearedIn.sort();

                // get ID of homeworld from URL
                let homeWorldId = parseInt(person.homeworld.charAt(person.homeworld.length - 2));

                return ( <PersonCard name={person.name} height={person.height} films={filmsAppearedIn} releasedFilms={props.releasedFilms} key={person.name} /> );   
            })
    );
        
}

export default PeopleContainer;