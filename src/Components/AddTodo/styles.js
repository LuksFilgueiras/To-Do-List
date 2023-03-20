import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2rem 0rem;
    height: auto;
    display: flex;
    flex-direction: row;
`;

export const InputText = styled.input`
    width: 100%;
    box-sizing: border-box;
    padding: 0 1rem 0 1rem;
    height: 2.5rem;
    background: none;
    border: none;
    border: 1px solid #DDD;
    color: #DDD;

    :focus{
        outline: none;
    }
`;

export const AddButton = styled.button`
    width: 5rem;
    border: none;
    border: 1px solid #DDD;
    background-color: #DDD;
    color: #333;
    font-size: 1rem;
    font-weight: 700;
`;