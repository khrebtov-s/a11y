import React from 'react';
import styled from 'styled-components';

import { ReactComponent as HeartIcon } from "../assets/icons/heart.svg";
import { ReactComponent as CartIcon } from "..//assets/icons/cart.svg";

const StyledHeader = styled.header`
    align-items: center;
    background: #fcfcfc;
    display: flex;
    height: 100px;
    justify-content: center;
    padding-left: 130px;
`

const StyledNav = styled.nav`
    flex-grow: 1;
`

const List = styled.ul`
    align-items: center;
    display: flex;
    gap: 20px;
    justify-content: center;
    padding: 0;
`

const ListItem = styled.li`
    list-style: none;
`

const Link = styled.a`
    color: #000;
    text-decoration: none;
`

const IconBody = styled.a`
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`

const navLinks = [
    {
        label: 'Товары для котов',
        href: '#',
    },
    {
        label: 'Товары для собак',
        href: '#',
    },
    {
        label: 'Товары для лошадей',
        href: '#',
    },
    {
        label: 'Товары для черепах',
        href: '#',
    },
    {
        label: 'Товары для рыб',
        href: '#',
    }
]

const AsideBlock = () => (
    <>
         <ListItem>
            <IconBody href="/likes" title="likes" aria-label="Лайки (Ссылка не рабочая. Грустный смайлик)">
                <HeartIcon/>
            </IconBody>
         </ListItem>
         <ListItem>
            <IconBody href="/cart" title="cart" aria-label="Лайки (Ссылка не рабочая. Грустный смайлик)">
                <CartIcon/>
            </IconBody>
         </ListItem>
        
    </>
)


const Header: React.FC<any> = () => {
    return (
       <StyledHeader>
        <StyledNav>
            <List aria-label="Основные разделы">
                { navLinks.map(({ label, href }) => {
                    return (
                        <ListItem key={ label }>
                            <Link href={ href }>{ label }</Link>
                        </ListItem>
                    );
                }) }
                <AsideBlock/>
            </List>
        </StyledNav>
       </StyledHeader>
    );
};

export default Header;