import styled from 'styled-components'
import ExitIcon from '../../../../components/icons/ExitIcon';

export const HeaderStyled = styled.header`
    display:flex;
    justify-content:center;
    position:relative;
    align-items:center;
    width:100vw;
    position:fixed;
    top:0;
    height: 50px;
`;

export const ExitIconStyled = styled(ExitIcon)`
    position: absolute;
    left:10px;
`;
