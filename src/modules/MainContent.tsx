import React from 'react'
import styled from 'styled-components';
import Filters from '../components/Filters';
import MainCards from './MainCards';
import VideoBlock from './VideoBlock';
import About from './About';

const Title = styled.h1`
    font-size: 50px;
    line-height: 61px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
`

const MainContent = () => {
    return (
        <main id="main">
            <Title>Товары для котов</Title>
            <Filters/>
            <MainCards/>
            <VideoBlock/>
            <About/>
        </main>
    );
}

export default MainContent;