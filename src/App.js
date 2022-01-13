// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home/Home'
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

import NavBar from './components/NavBar/NavBar';



function App() {
  return (
    <div className="App">
     <NavBar />
               <div>
               “”” Don’t You worry about browsing many websites to find good news!  We’ve got you covered. All top news from top sites at your disposal ””

               </div>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      <Home />
    </div>
  );
  /*  above all don't forget to push code to GITHUB
    1. think about and experiment on the box-shadow a little more, 
    maybe less from the right side
    
    2. finish the sign up page and figure out how to do the radio buttons as well, 
    less width to text inputs and buttons might be better
    
    3. work on the home page and favorites page
    
    4. implement input gathering from the user
    
    5 architect API requests
  
  */
}


export default App;
