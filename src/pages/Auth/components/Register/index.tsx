import { useNavigate } from "react-router-dom"
import GitHubIcon from "../../../../components/icons/GitHubIcon"
import GoogleIcon from "../../../../components/icons/GoogleIcon"
import Button from "../Button"
import { SignInWith } from "../SignInWithButton"
import SpanNavigator from "../SpanNavigator"
import { BStyled, PoliticsParagraphStyled, RegisterMessageStyled, RegisterStyled } from "./style"

export const Register = () => {

    const navigate = useNavigate();

    return (
        <RegisterStyled>
            <RegisterMessageStyled>Unete a Twitter hoy mismo</RegisterMessageStyled>
            <SignInWith
                iconComponentOfButton={<GoogleIcon width='32px' height='32px' margin='0px 5px 0px 0px' />}
                textButton={'Registrarse con Google'}
            />

            <SignInWith
                iconComponentOfButton={<GitHubIcon width='32px' height='32px' margin='0px 5px 0px 0px' />}
                textButton={'Registrarse con GitHub'}
            />

            <hr style={{ width: '90%', border: '1px solid var(--secondary)' }} />

            <Button theme="dark" onClickFunction={() => navigate('/auth/register/form')}>Registrarse con credenciales</Button>

            <PoliticsParagraphStyled>
                Al registrarte, aceptas los <BStyled>Terminos de servicio</BStyled> y la <BStyled>Politica de privacidad</BStyled>
                , <BStyled>incluida la politica de Uso de Cookies</BStyled>.
            </PoliticsParagraphStyled>

            <SpanNavigator message="¿Ya tienes una cuenta?" textButton="Iniciar sesion" route="/auth/login" />

        </RegisterStyled>
    )
}
