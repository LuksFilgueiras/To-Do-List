import styled from "styled-components";

export const TodoContainer = styled.div`
    width: 100%;
    border: 1px solid #DDD;
    border-radius: 2px;
    height: auto;
    max-width: 20rem;

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

    .add-task-container{
        display: flex;
        border-bottom: 1px dotted #DDD;
        align-items: center;
    }

    .add-task{
        box-sizing: border-box;
        padding: 0rem 1rem;
        height: 2.5rem;
        width: 100%;
        font-size: 1rem;
        font-weight: 100;
        background: none;
        border: none;
        color: #DDD;
    }

    .add-task:focus{
        outline: none;
    }

    .add-task-plus{
        display: block;
        cursor: pointer;
        background: none;
        border: none;
        color: #DDD;
        padding: 0 1rem;
        font-size: 1.5rem;
        height: 2.5rem;
        text-align: center;
        line-height: 3rem;
    }

    .add-task-plus:hover{
        transition: 0.2s;
        color: #AAA;
    }

    @media(max-width: 900px){
        width: 100%;
        max-width: 100%;
    }
`;