import React from 'react'
import styled, { css } from 'styled-components';

const Title = styled.h2`
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 61px;
`

const TabList = styled.ul`
    display: flex;
    list-style-type: none;
    padding: 0;
    gap: 22px;

`

const TabListItem = styled.li<{ isActive?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    color: #000;
    font-size: 24px;
    font-weight: 400;
    height: 56px;
    width: 256px;

    ${({ isActive }) =>
    isActive &&
    `
        background: #000;
        color: #fff;
    `}
`

const TabPanel = styled.div`
    & > p {
        text-align: left;
    }
`

const About = () => {
    const [type, setType] = React.useState('cats');
    const isCats = type === 'cats';

    const handleTab = (type: string) => {
        setType(type);
    }

    return (
        <section>
            <Title>Подробнее о товарах для котов</Title>
          
            <TabList role="tablist">
                <TabListItem
                    isActive={isCats} 
                    role="tab" 
                    id="tab1" 
                    aria-selected={isCats} 
                    onClick={ () => handleTab('cats') }
                    aria-controls="section1"
                    {...(isCats && { 'tabIndex': 0 })}
                >
                    О котах
                </TabListItem>
                <TabListItem
                    isActive={!isCats} 
                    role="tab" 
                    id="tab2" 
                    aria-selected={!isCats} 
                    onClick={ () => handleTab('items') }
                    aria-controls="section2"
                    {...(!isCats && { 'tabIndex': 0 })}
                >
                    О товарах
                </TabListItem>
            </TabList>
            
            {type === 'cats' 
                ? 
                <TabPanel id="section1" role="tabpanel" aria-labelledby="tab1" aria-hidden="false" tabIndex={-1}>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, magnam veritatis. Molestiae, accusamus eum sapiente praesentium quo repellat eveniet reprehenderit aliquid sunt cumque nostrum! Odit perferendis soluta saepe tenetur vero quas tempora neque, illum ducimus ut sunt adipisci obcaecati aliquam officia molestias nesciunt harum rem a perspiciatis impedit mollitia odio.</p>
                </TabPanel>
                :
                <TabPanel id="section2" role="tabpanel" aria-labelledby="tab2" aria-hidden="false" tabIndex={-1}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque!</p>
                </TabPanel>
            }
        </section>
    );
}

export default About;