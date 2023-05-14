import React from 'react'
import styled from 'styled-components';

const BreadCrumb = styled.nav`
    display: flex;
    margin: 21px 31px 13px 24px;
`

const Link = styled.a`
    color: #000;
    padding: 12px 6px;
    text-decoration: none;

    &:not(:last-child) {
        color: #000000b3;
        text-decoration: underline;
    }
`

const Navigation = () => {

    return (
        <BreadCrumb aria-label="Навигация по разделам">
            <Link href="#">Главная <span aria-hidden="true">&gt;</span></Link>
            <Link href="#">Каталог <span aria-hidden="true">&gt;</span></Link>
            <Link href="#" aria-current="page">Товары для Котов</Link>
        </BreadCrumb>
    );
}

export default Navigation;