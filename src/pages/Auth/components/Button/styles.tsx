import styled from "styled-components";

export const ButttonStyled = styled.button<any>`
    width:100%;
    margin-top:20px;
    display:flex;
    justify-content:center;
    ${props => props.theme === 'dark'
        ?
        `background-color:black; 
        color:white;` 
        : props.theme === 'light' 
        ?
        `background-color: transparent;
        color:black;` 
        : 
        ''
    }
`;