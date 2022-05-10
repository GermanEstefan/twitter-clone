import { useNavigate } from "react-router-dom";
import { SpanNavigatorStyled, TextButtonStyled } from "./style";

interface SpanNavigatorProps {
    message: string;
    textButton: string;
    route: string;
}

const SpanNavigator = (props: SpanNavigatorProps) => {

    const navigate = useNavigate();

    return (
        <SpanNavigatorStyled>
            {props.message}
            <TextButtonStyled onClick={() => navigate(props.route)}>{props.textButton}</TextButtonStyled>
        </SpanNavigatorStyled>
    )
}

export default SpanNavigator;
