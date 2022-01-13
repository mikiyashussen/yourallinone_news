import React from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';

import './SingIn.css';

// this shoudl use react hooks instead of states to store user inputs and send to the server
const SignIn = () => {
    return (
        <div className='signInContainer'>
           {/* <Container className='signInContainer'>
               <Row className='signIn'>
                   <Col md className='slogan'>
                    <p>Your All-in-One-News
                        “Welcome back, fresh news waiting for you
                    </p>
                        {/* <p>“Welcome back, fresh news waiting for you</p> */}
                   {/* </Col>
                    <Col className='inputFieldsContainer'>
                        <CustomInput inputText='Username'/>
                        <CustomInput inputText='Password'/>
                        <CustomButton buttonText='Sign In'/>
                    </Col>
                </Row>
           </Container> */} 
            <div className='slogan'>
            </div>
            <div className='inputFieldsContainer'>
                 <h5>Your All-in-One-News
                            “Welcome back, fresh news waiting for you
                        </h5>
                <CustomInput inputText='Username'/>
                <CustomInput inputText='Password'/>
                <CustomButton buttonText='Sign In'/>
                   <div> or <a href='www.google.com'>sign up</a></div>
            </div>
        </div>
    )
}

export default SignIn
