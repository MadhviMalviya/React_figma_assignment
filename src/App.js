
// import './App.css';
import Header from './components/Header/Header';
import FlexLine from './components/flexline/FlexLine';
import Main from './components/main/Main';
import Nav from './components/navbar/Nav';
import LoginPage from './login/Login'
import SigninPage from './signin/Signin'


function App() {
  return (
    <div className="App">
   
<Nav/>

<Header/>
<FlexLine/>
<Main/>
<LoginPage/>
<SigninPage/>
    </div>
  );
}

export default App;
