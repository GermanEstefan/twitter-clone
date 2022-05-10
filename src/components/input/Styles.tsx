import styled from "styled-components";

export const InputStyled = styled.input`
    width:100%;
    padding: 6px 3px;
    border: 1px solid var(--secondary);
    border-radius:4px;
    margin-top:20px;
    &::placeholder{
        font-size:.9rem;
    }
`;