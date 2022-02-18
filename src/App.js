// import logo from './logo.svg';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import NavBar from './components/NavBar/NavBar';
import FavoritesSelection from './pages/FavoritesSelection/FavoritesSelection';
import Favorites from './pages/Favorites/Favorites';

import news from './apis/news';

import './App.css';
// import { alignPropType } from 'react-bootstrap/esm/types';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      route: 'home',
      allNews: '',
      favoritesNews: {},
      isUserLoggedIn: false,
      loggedInUser: '',
      username: ''
    }
  }

  componentDidMount(){
     news.get('/django/home')
   .then(res =>
    {console.log(res)
    this.setState({allNews: res.data})})
  }

  onNavBarBtnsClick = async (btnCliked) => {
    console.log('btn app', btnCliked)
    if(btnCliked === 'home'){
      // const allNews = await 
      news.get('/django/home')
      .then(res => {
         this.setState({allNews: res.data, route: 'home'})
      // this.setState({route: 'home'})
      })
     
    }
    else if(btnCliked === 'favorites'){
      // const allNews = await 
      console.log('fav BTN',this.state)
        news.post('/django/login/', {
        username: this.state.username,
        password: this.state.password
      }).then(res=> {
         console.log(res)
          this.setState({favoritesNews: res.data, route: 'favorites'})
      })
     
    }
    else if(btnCliked === 'sign out'){
      // const allNews = await 
      news.get('/django/home').
      then(res => {
        this.setState({allNews: res.data, route: 'home', isUserLoggedIn: false})
      })
    }
    else if(btnCliked === 'sign in'){
      this.setState({ route: 'sign in'})
    }
    else if(btnCliked === 'sign up'){
      this.setState({ route: 'sign up'})
    }
   
  }

  changeBetweenLoginSignup =  (route) => {
    this.setState({route: route})
  }

  changeFavorites = (route, favNews) => {
    this.setState({route: route, favoritesNews: favNews})
  }

  changeRoute = (route, isUserLoggedIn, username, password, favNews) => {
    this.setState({route: route, isUserLoggedIn: true, username: username, password: password, favoritesNews: favNews})
  }
  render(){
    return (
    <div className="App">
     {/* <NavBar  route={true}/>
      <div style={{ margin: '1em',  color: '#fff'}}>
      “”” Don’t You worry about browsing many websites to find good news!
          We’ve got you covered. 
          All top news from top sites at your disposal ””
      </div> */}
      {/* <SignIn /> */}
      {/* <SignUp changeRoute={this.changeRoute} /> */}
      {/* <Home /> */}
      {
        this.state.route === 'sign in' ? (
          <div className='signPagesContainer' >
          <SignIn changeBetweenLoginSignup={this.changeBetweenLoginSignup} changeRoute={this.changeRoute} /> 
          </div>
        ) : 
        (
          this.state.route === 'sign up' ? (
          <div className='signPagesContainer'>
            <SignUp changeBetweenLoginSignup={this.changeBetweenLoginSignup} changeRoute={this.changeRoute}  />
          </div>
          ) : 
          (
            this.state.route === 'home' ? (
              <div>
                <NavBar onNavBarBtnsClick={this.onNavBarBtnsClick} route={this.state.route} isUserLoggedIn={this.state.isUserLoggedIn}/>
                <Home news={this.state.allNews}/>
              </div> 
            ) : (
              this.state.route === 'favorites' ? 
              (
                <div style={{width: '-webkit-fill-available'}}>
                  <NavBar onNavBarBtnsClick={this.onNavBarBtnsClick}  isUserLoggedIn={this.state.isUserLoggedIn}/>
                  <Favorites favoritesNews={this.state.favoritesNews}  />                  
                </div>
              ) 
              : (
                this.state.route === 'favoritesSelection' ? 
                <FavoritesSelection changeFavorites={this.changeFavorites} username={this.state.username} /> :
                'Loading .............')
            )
          )
        )
      }
    </div>
  );
  }
  
  /*  above all don't forget to push code to GITHUB
    1. think about and experiment on the box-shadow a little more, 
    maybe less from the right side - done
    
    2. finish the sign up page and figure out how to do the radio buttons as well, 
    less width to text inputs and buttons might be better
    
    3. work on the home page - done
    
    4. implement input gathering from the user - done
    
    5 architect API requests - done

    6. Implement favoritesSelection page
  
  */
  /* 
    1. collect data from radio buttons

    2. center the sign in and up pages

    3. putting the change button inside favorites
  */
}


export default App;
