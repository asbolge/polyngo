import './App.css';
import Navi from './layouts/Navi';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import SignUp from './pages/SignUpPage';
import SignIn from './pages/SignInPage';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';


function App() {
  return (
    <div className="App">
      <Navi />
      <Container className='main'>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
      </Container>


    </div>
  );
}

export default App;
