import React, { Component } from 'react'

import news from '../../apis/news';

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';

import './SignUp.css';



// this should be a class component 
class SignUp extends Component {
constructor(){
    super();
    this.state = {
        email: '',
        username: '',
        password: ''
    }
    }
    valuesFromUser = (dataFromCustomInput) => {
        if(dataFromCustomInput.id === 'username'){
            console.log('works')
            this.setState({username: dataFromCustomInput.value})
        }
        else if(dataFromCustomInput.id === 'password'){
            this.setState({password: dataFromCustomInput.value})
        }
        else if(dataFromCustomInput.id === 'email'){
            this.setState({email: dataFromCustomInput.value})
        }
        console.log('SIGN IN',this.state);
    }
   
    onSignUp = async () => {
        console.log('clicked')
        this.props.changeRoute('sign in')
        // make the api request here and route to home page
        const isCredentialsValid = await news.post('news',{
            data: this.state
        })
        // console.log(isCredentialsValid);
        if(isCredentialsValid){
            this.props.changeRoute('home')
        }
        else {
            // display on Screen
            console.log('Invalid credentials')
        }
        //maybe validation as well for empty values and improper email 

    } 
   
    // handle user inputs for username and password

    // handle button click 

    // handle checkbox selection
    render(){
        return (
            <div className='signInContainer'>
                <div className='slogan'>
                </div>
                <div className='inputFieldsContainer'>
                    <h5>Your All-in-One-News
                        "All top news from top sites, we got you covered"
                            </h5>
                    <CustomInput  inputText='Email' id='email' valuesFromUser={this.valuesFromUser}/>
                    <CustomInput  inputText='Username' id='username' valuesFromUser={this.valuesFromUser}/>
                    <CustomInput inputText='Password' id='password' valuesFromUser={this.valuesFromUser}/>
                    
                    <CustomButton buttonText='Sign Up' onBtnClick={this.onSignUp}/>
                    <div>Already a member?<a href='www.google.com'>Sign in</a></div>
                </div>
            </div>
        )
    }
}

export default SignUp;
