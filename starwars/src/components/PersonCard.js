import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
    width: 20%;
    min-height: 400px;
    margin: 2%;
    background-color: khaki;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding-bottom: 1rem;

    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const PersonName = styled.h3`
    
    font-size: 2rem;
    margin: 1rem auto;
`;

const CategoryHeader = styled.h4`
    font-size: 1.5rem;
    font-weight: bold;

    margin-bottom: 0.5rem;
`;

const Details = styled.div`
    font-size: 1rem;

    margin: 0 auto;
`;


const Film = styled.p`
    font-style: oblique;
    line-height: 1.5rem;
    margin: 0;
`;

function createFilmList(filmsAppearedIn, releasedFilms) {
    
    let romanNumerals = "0 I II III IV V VI VII".split(" ");

    if (filmsAppearedIn.length === 0)
        { return "none"; }

    return filmsAppearedIn.map(film => {
        return (
            <Film>{romanNumerals[film]}: {releasedFilms[film]}</Film>
        )
    });
}

const PersonCard = function (props) {

    return (
        <CardDiv>
            <PersonName>{props.name}</PersonName>
            <CategoryHeader>Height:</CategoryHeader>
                <Details>{props.height} cm</Details>
            <CategoryHeader>Films:</CategoryHeader>
                <Details>{createFilmList(props.films, props.releasedFilms)}</Details>
        </CardDiv>
    )
}

export default PersonCard;