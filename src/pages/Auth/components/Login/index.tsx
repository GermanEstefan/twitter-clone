import GitHubIcon from "../../../../components/icons/GitHubIcon"
import GoogleIcon from "../../../../components/icons/GoogleIcon"
import Input from "../../../../components/input"
import Button from "../Button"
import { SignInWith } from "../SignInWithButton"
import SpanNavigator from "../SpanNavigator"
import { LogInMessageStyled, LoginStyled } from "./Styles"

export const Login = () => {
    return (
        <LoginStyled>

            <LogInMessageStyled>Inicia sesion en Twitter</LogInMessageStyled>

            <SignInWith
                iconComponentOfButton={<GoogleIcon width='32px' height='32px' margin='0px 5px 0px 0px' />}
                textButton={'Iniciar sesion con Google'}
            />

            <SignInWith
                iconComponentOfButton={<GitHubIcon width='32px' height='32px' margin='0px 5px 0px 0px' />}
                textButton={'Iniciar sesion con GitHub'}
            />

            <hr style={{width:'100%', border: '1px solid var(--secondary)'}}/>

            <Input placeholder="Correo electronico"/>
            
            <Input placeholder="Contraseña"/>

            <Button theme='dark'>Iniciar sesion</Button>

            <Button theme='light'>¿Olvidaste tu contraseña?</Button>

            <SpanNavigator message={"¿No tienes una cuenta?"} textButton={"Registrate"} route='/auth/register'/>

        </LoginStyled>
    )
}
