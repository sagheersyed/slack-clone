import './App.css';
import {BrowserRouter  as Router , Switch , Route} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Login from './Component/Login';
import styled from 'styled-components';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Header/>
          <Main>
            <Sidebar/>
            <Switch> 
              <Route path="/home">
                <Home/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/">
                <Login/>
              </Route>
            </Switch>
          </Main>
        </Container>
      </Router>
    </div>
  );
}
export default App;

const Container = styled.div`
width:100%;
height:100vh;
background:red;
display:grid;
grid-template-rows: 40px auto;
`;

const Main = styled.div`
  background:orange;
  display:grid;
  grid-template-columns: 300px auto;
`;