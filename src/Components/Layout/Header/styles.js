import styled from "styled-components";
import logo from "../../../Images/logo.png";

export const HeaderContainer = styled.div`
    width=100vw;
    background-color: #DDD;
    height: 5rem;
    display: flex;
    justify-content: center;
`;

export const NavStyled = styled.nav`
    color: #333;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    box-sizing: border-box;
    padding: 0 1.5rem 0 1.5rem;
    display: flex;
    align-items: center;
`;

export const LogoContainer = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #333;
    background-image: url(${logo});
    background-size: cover;
    background-position: center;
`;
