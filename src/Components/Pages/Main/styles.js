import styled from "styled-components";

export const TodosDisplay = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 2rem;

    @media(max-width: 1000px){
        grid-template-columns: auto auto;
    }

    @media(max-width: 600px){
        grid-template-columns: auto;
    }
`;