import React, { useState } from 'react';
import Button from "react-bootstrap/Button";

const CustomButton = ({buttonText, buttonColor, onBtnClick}) => {
    return (
        <div>
            <Button onClick={onBtnClick} style={{width: '100%', borderRadius: '4px', backgroundColor: {buttonColor}}}>{buttonText}</Button>{' '}
        </div>
    )
}
// '#1CB2B2'
export default CustomButton;
