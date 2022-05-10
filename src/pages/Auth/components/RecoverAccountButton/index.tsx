interface RecoverAccountButtonProps {
    children: any
}

const RecoverAccountButton = (props: RecoverAccountButtonProps) => {

    const handleRecove = () => {

    }

    return (
        <button onClick={handleRecove}>
            {props.children}
        </button>
    )
}

export default RecoverAccountButton;
