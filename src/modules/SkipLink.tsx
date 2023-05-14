import React from 'react'
import styled from 'styled-components';

const StyledLink = styled.a`
    align-items: center;
    background: #000;
    border-radius: 5px;
    color: #fff;
    display: flex;
    font-size: 24px;
    font-weight: 400;
    height: 56px;
    justify-content: center;
    left: 130px;
    position: absolute;
    text-decoration: none;
    top: -200px;
    transition: top .2s;
    width: 374px; 

    &:focus {
        position: static;
        transform: translateX(0);
    }
`

const Skiplink = () => (
    <StyledLink href="#main">К основному контенту</StyledLink>
)

export default Skiplink;