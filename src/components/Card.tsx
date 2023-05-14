import React from 'react'
import styled from 'styled-components';

import CatImage from '../assets/cat-image.png';
import { ReactComponent as HeartIcon } from "../assets/icons/heart.svg";

const ListItem = styled.li`
    border: 1px solid black;
    list-style-type: none;
    border-radius: 5px;
    box-sizing: border-box;
`

const Prices = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 12px;
`

const PriceDescription = styled.span`
    position: absolute;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px,1px,1px,1px);
    clip: rect(1px 1px 1px 1px);
    white-space: nowrap; 
`

const PriceCurrent = styled.span`
    color: red;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 39px;
`

const PriceOld = styled.span`
    color: #929292;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    text-decoration: line-through;
`

const CardButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
`

const PayButton = styled.button`
    background: #000;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    height: 56px;
    width: 256px;
`
const LikeButton = styled.button`
    background: transparent;
    border: none;
`

const StyledImage = styled.img`
    width: 100%;
    height: auto;
`

const Card = () => {
    const currentPriceID = React.useId();
    const oldPriceID = React.useId();

    return (
        <ListItem>  
            <StyledImage src={ CatImage } alt="Коврик для кота"></StyledImage>
            <h2>
                Коврик для кота
            </h2>
            <Prices>
                <PriceDescription aria-hidden="true" id={currentPriceID}>Новая цена</PriceDescription>
                <PriceCurrent aria-describedby={currentPriceID}>100$</PriceCurrent>

                <PriceDescription aria-hidden="true" id={oldPriceID}>Старая цена</PriceDescription>
                <PriceOld aria-describedby={oldPriceID}>200$</PriceOld>
            </Prices>

            <CardButtons>
                <PayButton type="button">Купить</PayButton>
                <LikeButton title="Добавить в избранное" type="button">
                    <HeartIcon/>
                </LikeButton>
            </CardButtons>
        </ListItem>  
    );
}

export default Card;