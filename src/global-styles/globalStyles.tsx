import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --primary: #55acee;
        --secondary: #cdd1ce;
    }
    html,body{
        font-family: 'Ubuntu', sans-serif;
    }
    button{
        border: 1px solid #cdd1ce;
        background-color: transparent;
        padding:8px 40px;
        border-radius:50px; 
        display:flex;
        align-items:center;
        font-size:0.8rem; 
    }
    
`;