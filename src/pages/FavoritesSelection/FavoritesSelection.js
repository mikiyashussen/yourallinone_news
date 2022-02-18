import React from 'react'


import news from '../../apis/news';

import CheckBox from '../../components/CheckBox/CheckBox';
import CustomButton from '../../components/CustomButton/CustomButton';

import './FavoritesSelection.css'

const items = [
  'first_news',
  'sky_sport',
  'tech_crunch',
  'gizmodo',
  'bbc'
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

    onBtnClick =  () => {
        //sends newslist and username to server
        console.log('favorites selection', this.state.favoriteNews)
        console.log(this.state.favoriteNews)
        console.log(this.props.username)

        //const favNews = await 
        news.post('/django/favorite/', {
            news_choice: this.state.favoriteNews,
            username: this.props.username
        }).then(res=> {
            console.log('favorites selection', res)
            this.props.changeFavorites('favorites', res.data)
        })
        .catch(function (error) {
            // this.setState({isCredentialsValid: false})
            console.log(error);
            // console.log('Invalid credentials')
        });
        // const favNews = {}
        // sever replies with newslist
        // send to favorite and routes to favorite ? HOW???
        // console.log('favorites selection', favNews)

        
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


