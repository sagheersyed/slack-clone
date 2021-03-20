import './App.css';
import {BrowserRouter  as Router , Switch , Route} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Login from './Component/Login';
import styled from 'styled-components';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Chat from './Component/Chat';
import Database from './firebase';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [channels , setChannels ] = useState([])
    const getConnectFirebase = ()=>{
      Database.collection("channels").onSnapshot((snapshot)=>{
        setChannels(snapshot.docs.map((doc)=>{
          return {id: doc.id , name:doc.data().name}
        }))
      })
    }
    useEffect(()=>{
      getConnectFirebase()
    },[])
   return (
    <div className="App">
      <Router>
        <Container>
          <Header/>
          <Main>
            <Sidebar channel={channels}/>
            <Switch> 
              <Route path="/home">
                <Home/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/chat">
                <Chat/>
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
grid-template-rows: 50px auto;
`;

const Main = styled.div`
  background:#803e80;
  display:grid;
  grid-template-columns: 300px auto;
`;