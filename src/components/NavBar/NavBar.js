import React from 'react'
import CustomButton from '../CustomButton/CustomButton';
import "./NavBar.css";


const NavBar = ({route}) => {
    return (
        <div className='navBar'>
            <p>Your-All-in-one-News</p>
            <div >
               {
                   route === true ? (
                       <div className='navBarButtonsContainer'>
                            <CustomButton buttonColor='#1AD04D' buttonText='Home' />
                            <CustomButton buttonColor='#000000' buttonText='Favorites' />
                            <CustomButton buttonColor='#1AD04D' buttonText='Sign Out' />
                       </div>
                   ) :
                   (
                       
                       <div className='navBarButtonsContainer'>
                            <CustomButton buttonColor='#1AD04D' buttonText='Sign In' />
                            <CustomButton buttonColor='#1AD04D' buttonText='Sign Up' />
                       </div>
                   )
               }

            </div>
        </div>
    )
}

export default NavBar;
