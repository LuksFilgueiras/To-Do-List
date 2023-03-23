import styled from "styled-components";

export const TodoContainer = styled.div`
    width: 100%;
    border: 1px solid #DDD;
    border-radius: 2px;
    max-width: 20rem;
    break-inside: avoid;
    margin-bottom: 2rem;

    .add-task-plus:hover{
        transition: 0.2s;
        color: #AAA;
    }

    @media(max-width: 900px){
        width: 100%;
        max-width: 100%;
    }
`;

export const TitleContainer = styled.div`
    color: #333;
    display: flex;
    align-items: center;
    background-color: #DDD;
    height: 2.5rem;

    .title{
        padding: 0 1rem;
        font-size: 1.5rem;
        font-weight: 400;
        width: 100%;
    }

    .trash-bttn{
        display: block;
        cursor: pointer;
        padding: 0 1rem;
        font-size: 1.5rem;
        height: 2.5rem;
        text-align: center;
        line-height: 3rem;
    }
`;

export const AddTaskContainer = styled.div`
    display: flex;
    border-bottom: 1px dotted #DDD;
    align-items: center;

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
        color: #DDD;
        padding: 0 1rem;
        font-size: 1.5rem;
        height: 2.5rem;
        text-align: center;
        line-height: 3rem;
    }
`;