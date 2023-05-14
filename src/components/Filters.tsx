import React from 'react'
import styled from 'styled-components';

const FiltersWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    & > label {
        margin-bottom: 4px;
    }
`

const StyledSelect = styled.select`
    padding: 5px 14px;
    border: 1px solid black;
    font-size: inherit;
    border-radius: 5px;
    height: 50px;
    width: 280px;
    background: url(https://www.svgrepo.com/show/80156/down-arrow.svg) no-repeat right;
    background-size: 20px 20px;
    -webkit-appearance: none;
    background-position-x: 244px;
`;

const Filters = () => {
    return (
        <FiltersWrapper>
           <label tabIndex={ -1 } aria-hidden="true" htmlFor="sort">Сортировать по:</label>
           <StyledSelect aria-label="Сортировка" name="sort" id="sort">
            <option value="none">Нет сортировки</option>
            <option value="priceup">По возрастанию цены</option>
            <option value="pricedown">По убыванию цены</option>
            <option value="popular">По популярности</option>
           </StyledSelect>
        </FiltersWrapper>
    );
}

export default Filters;