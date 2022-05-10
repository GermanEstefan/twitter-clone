import TwitterIcon from "../../../../components/icons/TwitterIcon";
import { ExitIconStyled, HeaderStyled } from "./Style";

const Header = () => {
    return (
        <HeaderStyled>
            <ExitIconStyled width={'25px'} height={'25px'} />
            <TwitterIcon width={'32px'} height={'32px'} />
        </HeaderStyled>
    )
}

export default Header;
