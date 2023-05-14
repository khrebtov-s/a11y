import React from 'react'
import styled from 'styled-components';
import Card from '../components/Card';

const CardWrapper = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    margin-top: 19px;
`

const MainCards = () => {
    const array = Array.from({length: 5}, (v, k) => k+1);
    
    return (
        <CardWrapper>
            {
                 array.map((el) => (
                    <Card key={el} />
                ))
            }
        </CardWrapper>
    );
}

export default MainCards;