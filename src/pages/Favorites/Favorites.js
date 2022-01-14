import React from 'react'

import CheckBox from '../../components/CheckBox/CheckBox';
import CustomButton from '../../components/CustomButton/CustomButton';

import './Favorites.css'

const items = [
  'TVN',
  'HackerNews',
  'Tech Crunch',
  'SkySports',
  'Gizmodo',
  'BBC'
];

 // create check boxes
const createCheckBoxes = (item) => {
    return <CheckBox  news={item} />
}

class Favorites extends React.Component {

    constructor(){
        super();
        this.state = {
            favoriteNews: []
        }
    }

    onBtnClick = () => {

    }

    render(){
         return (
        <div>
            <div >
                <div className="checkBoxesContainer">
                    {items.map(item => {
                        return createCheckBoxes(item)
                    })}
                </div>
            </div>
            <CustomButton buttonText='Change' onBtnClick={this.onFavoritesChange}/>
        </div>
    )
    }
}

export default Favorites


