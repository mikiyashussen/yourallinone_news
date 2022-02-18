import React from 'react'
import CustomButton from '../CustomButton/CustomButton';
import "./NavBar.css";


const NavBar = ({route, onNavBarBtnsClick,isUserLoggedIn}) => {

    const onBtnClick = (event) => {
        let value = event.target.innerHTML.toLowerCase()
        console.log(value.toLowerCase())
        onNavBarBtnsClick(value)
    }
    return (
        <div className='navBar'>
            <p>Your-All-in-one-News</p>
            <div >
               {
                   !isUserLoggedIn ? (
                        <div className='navBarButtonsContainer'>
                            <CustomButton onBtnClick={onBtnClick} buttonColor='#1AD04D' buttonText='Sign In' />
                            <CustomButton onBtnClick={onBtnClick} buttonColor='#1AD04D' buttonText='Sign Up' />
                       </div>
                   ) :
                   (
                        <div className='navBarButtonsContainer'>
                            <CustomButton onBtnClick={onBtnClick} buttonColor='#1AD04D' buttonText='Home' />
                            <CustomButton onBtnClick={onBtnClick} buttonColor='#000000' buttonText='Favorites' />
                            <CustomButton onBtnClick={onBtnClick} buttonColor='#1AD04D' buttonText='Sign Out' />
                       </div>
                   )
               }

            </div>
        </div>
    )
}

export default NavBar;
