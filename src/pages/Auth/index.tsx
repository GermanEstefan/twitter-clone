import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { IndexStyled } from "./indexStyled";

const Auth = () => {
    return (
        <IndexStyled>
            <Header />
            <Outlet />
        </IndexStyled>
    )
}

export default Auth;
