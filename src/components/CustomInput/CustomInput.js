import React from 'react'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

import './CustomInput.css'

const CustomInput = ({inputText}) => {
    return (
        <div className='inputs'>
            <InputGroup>
              {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
                <FormControl
                placeholder={inputText}
                aria-label={inputText}
                aria-describedby="basic-addon1"
                style={{borderRadius: '4px', margin: '0 0 1em 0'}}
                />
            </InputGroup>
               
        </div>
    )
}
export default CustomInput;

