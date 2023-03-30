import styled from "styled-components";

export const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    font-weight: 100;
`;

export const LoginBox = styled.div`
    width: 21rem;
    height: 32rem;
    background-color: #222;
    border-radius: 1rem;
    box-shadow: 0.2rem 0.2rem 10rem 1rem #000;
    box-sizing: border-box;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    h1{
        font-weight: 100;
    }

    p{
        font-weight: 300;
    }
`;

export const InputContainer = styled.input`
    color: #DDD;
    background: none;
    width: 100%;
    height: 2.5rem;
    border: 1px solid #DDD;
    border-radius: 1rem;
    box-sizing: border-box;
    padding: 0 1rem;

    :focus{
        outline: none;
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;
`;

export const Button = styled.div`
    background-color: #333;
    width: 8rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
`;

export const AnonymousLogin = styled.p`s
    color: light-blue;
    cursor: pointer;
    padding: 0.5rem 0;
`;