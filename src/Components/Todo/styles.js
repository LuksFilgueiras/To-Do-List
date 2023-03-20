import styled from "styled-components";

export const TodoContainer = styled.div`
    width: 100%;
    height: 5rem;
    border: 1px solid #DDD;
    border-radius: 2px;

    .title{
        padding: 0 1rem;
        font-size: 1.5rem;
        font-weight: 400;
        background-color: #DDD;
        color: #333;
        height: 2.5rem;
        display: flex;
        align-items: center;
    }

    @media(max-width: 900px){
        width: 100%;
    }
`;