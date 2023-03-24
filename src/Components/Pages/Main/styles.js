import styled from "styled-components";

export const TodosDisplay = styled.div`
    width: 100%;
    columns: 4;
    column-gap: 2rem;
    height: auto;

    @media(max-width: 1000px){
        columns: 2;
    }

    @media(max-width: 600px){
        columns: 1;
    }
`;