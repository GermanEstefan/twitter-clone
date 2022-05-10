import { SignInWithStyled } from "./Styles";

interface SignInWithProps {
    iconComponentOfButton: any;
    textButton: string;
}

export const SignInWith = (props: SignInWithProps) => {
    return (
        <SignInWithStyled>
            {props.iconComponentOfButton}
            <span>{props.textButton}</span>
        </SignInWithStyled>
    )
}
