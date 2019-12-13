import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
    width: 20%;
    margin: 2%;
    background-color: khaki;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-bottom: 1rem;

    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const PersonName = styled.h3`
    
    font-size: 3rem;

    margin: 1rem auto;
`;

const CategoryHeader = styled.h4`
    font-size: 2rem;
    font-weight: bold;

    margin-bottom: 0;
`;

const Details = styled.p`
    font-size: 1.5rem;

    margin: 0 auto;
`;


// const PersonHome = styled.p`
//     font-size: 2rem;
// `;

// const PersonFilms = styled.p`
//     font-size: 2rem;
// `;


const PersonCard = function (props) {

    return (
        <CardDiv>
            <PersonName>{props.name}</PersonName>
            <CategoryHeader>Homeworld:</CategoryHeader>
                <Details>{props.homeWorld}</Details>
            <CategoryHeader>Films:</CategoryHeader>
                <Details>{props.films}</Details>
        </CardDiv>
    )
}

export default PersonCard;