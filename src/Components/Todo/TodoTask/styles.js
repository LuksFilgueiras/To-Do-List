import styled from "styled-components";

export const TaskContainer = styled.div`
    height: 3rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
`;

export const TaskEdit = styled.h2`
    border: none;
    background: none;
    color: #DDD;
    font-size: 1rem;
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
    font-weight: 100;

    :focus{
        outline: none;
    }
`;

export const TaskCheckbox = styled.input`
    cursor: pointer;
    transition: 0.2s;
    appearance: none;
    width: 1.8rem;
    height: 1.5rem;
    border-radius: 2px;
    backgound-color: #333;
    border: 1px solid #DDD;

    :checked{
        transition: 0.2s;
        background-color: #87d1a1;
        border: 1px solid #87d1a1;
        border-radius: 50%;
    }
`;

export const TaskDelete = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: #F99494;
`;