import React, { Component } from 'react'

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import CheckBox from '../../components/CheckBox/CheckBox';

import './SignUp.css';


const items1 = [
  'TVN',
  'HackerNews',
  'Tech Crunch',
];
const items2 = [
  'SkySports',
  'Gizmodo',
  'BBC',
];
// this should be a class component 
class SignUp extends Component {

    // create check boxes
    createCheckBoxes = (item) => {
        return <CheckBox news={item} />
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
                    <CustomInput inputText='email'/>
                    <CustomInput inputText='Password'/>
                    <div className="checkBoxesContainer">
                        <div>
                            {items1.map(item => {
                                return this.createCheckBoxes(item)
                            })}
                        </div>
                        <div>
                            {items2.map(item => {
                                return this.createCheckBoxes(item)
                            })}
                        </div>
                    </div>
                    <CustomButton buttonText='Sign Up'/>
                    <div>Already a member?<a href='www.google.com'>Sign in</a></div>
                </div>
            </div>
        )
    }
}

export default SignUp;
