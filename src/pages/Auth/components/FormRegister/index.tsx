import Input from "../../../../components/input";
import Button from "../Button";
import { CreateAccountMessageStyled, FormRegisterStyled } from "./style";

const FormRegister = () => {
    return (
        <FormRegisterStyled>
            <CreateAccountMessageStyled>Crea tu cuenta</CreateAccountMessageStyled>
            <Input placeholder="Nombre"/>
            <Input placeholder="Correo electronico"/>
            <Input placeholder="Contraseña"/>
            <Input placeholder="Confirmar contraseña"/>
            <Button theme="dark">Crear cuenta</Button>
        </FormRegisterStyled>
    )
}

export default FormRegister;
