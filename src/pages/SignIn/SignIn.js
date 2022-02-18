import React from 'react'
// import axios from 'axios';

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';

import news from '../../apis/news'

import './SingIn.css';

// this shoudl use react hooks instead of states to store user inputs and send to the server
class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
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
        console.log('SIGN IN',this.state);
    }
   
    onSignIn =  () => {
        // this.props.changeRoute('sign up')
        console.log('clicked')
        console.log(this.state)

        // make the api request here
        // const isCredentialsValid = await
        // news.post('/django/login/',{
        news.post('/signin/',{

            username: this.state.username,
            password: this.state.password
        }).then(res => {
             this.props.changeRoute('favorites', true,  this.state.username, this.state.password, res.data)
           console.log(res);
        })
        // console.log(isCredentialsValid);
        // if(isCredentialsValid){
        //     this.props.changeRoute('favorites', true)
        // }
        // else {
        //     // display on Screen
        //     console.log('Invalid credentials')
        // }
    } 

    render(){
         return (
        <div className='signInContainer'>
            <div className='slogan'>
            </div>
            <div className='inputFieldsContainer'>
                 <h5>Your All-in-One-News
                            “Welcome back, fresh news waiting for you
                        </h5>
                <CustomInput  inputText='Username' id='username' valuesFromUser={this.valuesFromUser}/>
                <CustomInput inputText='Password' id='password' valuesFromUser={this.valuesFromUser}/>
                <CustomButton buttonText='Sign In' onBtnClick={this.onSignIn}/>
                <div > or <a style={{color: 'blue', cursor: 'pointer', borderBottom: '1px solid blue'}} onClick={()=> this.props.changeBetweenLoginSignup('sign up')}>sign up</a></div>
            </div>
        </div>
    )
    }
}

export default SignIn
