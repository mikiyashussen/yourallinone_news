import React from 'react'


import news from '../../apis/news';

import CheckBox from '../../components/CheckBox/CheckBox';
import CustomButton from '../../components/CustomButton/CustomButton';

import './FavoritesSelection.css'

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

class FavoritesSelection extends React.Component {

    constructor(){
        super();
        this.state = {
            favoriteNews: []
        }
    }

    onBtnClick = async () => {
        //sends newslist and username to server
        const favNews = await news.post('/changefavorites');
        // const favNews = {}
        // sever replies with newslist
        // send to favorite and routes to favorite ? HOW???
        console.log('favorites selection', favNews)

        this.props.changeFavorites('favorites', favNews)
    }

    render(){
         return (
        <div className='favoritesContainer'>
            <h4 style={{textAlign: 'center'}}>Select you favorites news ...</h4>
            <div className="checkBoxesContainer">
                {items.map(item => {
                    return createCheckBoxes(item)
                })}
            </div>
            <CustomButton buttonText='Change' onBtnClick={this.onBtnClick}/>
        </div>
    )
    }
}

export default FavoritesSelection


