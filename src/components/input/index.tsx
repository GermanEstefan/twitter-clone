import { InputStyled } from "./Styles";

interface InputProps {
    placeholder: string
}

const Input = (props: InputProps) => {
    return (
        <InputStyled type="text" placeholder={props.placeholder} />
    )
}

export default Input;
