import { ButttonStyled } from "./styles";

interface NextButtonProps {
    children: any
    theme: 'dark' | 'light'
    onClickFunction?: any
}

const Button = (props: NextButtonProps) => {

    return (
        <ButttonStyled onClick={props.onClickFunction} theme={props.theme}>
            {props.children}
        </ButttonStyled>
    )
}

export default Button;
