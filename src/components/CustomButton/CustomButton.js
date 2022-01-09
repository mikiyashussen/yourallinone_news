import Button from "react-bootstrap/Button";

const CustomButton = ({buttonText}) => {
    return (
        <div>
            <Button style={{width: '100%', borderRadius: '4px', backgroundColor: '#1CB2B2'}}>{buttonText}</Button>{' '}
        </div>
    )
}

export default CustomButton;
