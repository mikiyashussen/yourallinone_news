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

const newsList = []

 // create check boxes
// const 

class FavoritesSelection extends React.Component {

    constructor(){
        super();
        this.state = {
            favoriteNews: []
        }
    }
    createCheckBoxes = (item) => {
    return <CheckBox onBoxClick={this.onBoxClick}  news={item} />
    }

    onBoxClick = (event) => {
        console.log(event.target)
        const value = event.target.value
        if(newsList.length == 0){
            newsList.push(event.target.value)
            // this.setState({favoriteNews: newsList})
            console.log('length 0', newsList)
        }
        else {
            if(newsList.includes(value)){
                newsList.splice(newsList.indexOf(value), 1)
                console.log('after removing duplicates', newsList)
            }
            else {
                 newsList.push(value)
                  console.log('full list', newsList)
            }
        }
        this.setState({favoriteNews: newsList})
        console.log('all values', this.state.favoriteNews)
    }

    onBtnClick = async () => {
        //sends newslist and username to server
        console.log(this.state.favoriteNews)
        const favNews = await news.post('/changefavorites', {
            favNews: this.state.favoriteNews
        });
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
                    return this.createCheckBoxes(item)
                })}
            </div>
            <CustomButton buttonText='Change' onBtnClick={this.onBtnClick}/>
        </div>
    )
    }
}

export default FavoritesSelection


