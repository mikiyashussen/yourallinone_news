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
      route: 'sign up',
      allNews: {},
      favoritesNews: {},
      isUserLoggedIn: false
    }
  }

  componentDidMount(){
   const allNews =  news.get('/home');
   this.setState({allNews: allNews})
  }

  changeFavorites = (route, favNews) => {
    this.setState({route: route, favoritesNews: favNews})
  }

  changeRoute = (route) => {
    this.setState({route: route})
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
          <SignIn changeRoute={this.changeRoute} /> 
          </div>
        ) : 
        (
          this.state.route === 'sign up' ? (
          <div className='signPagesContainer'>
            <SignUp changeRoute={this.changeRoute}  />
          </div>
          ) : 
          (
            this.state.route === 'home' ? (
              <div>
                <NavBar  route={true}/>
                <Home />
              </div> 
            ) : (
              this.state.route === 'favorites' ? 
              (
                <div style={{width: '-webkit-fill-available'}}>
                  <NavBar  route={true}/>
                  <Favorites favoritesNews={this.state.favoritesNews} />                  
                </div>
              ) 
              : (
                this.state.route === 'favoritesSelection' ? 
                <FavoritesSelection changeFavorites={this.changeFavorites} /> :
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
    maybe less from the right side
    
    2. finish the sign up page and figure out how to do the radio buttons as well, 
    less width to text inputs and buttons might be better
    
    3. work on the home page - done
    
    4. implement input gathering from the user - done
    
    5 architect API requests - done

    6. Implement favoritesSelection page
  
  */
}


export default App;
