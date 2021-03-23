import './App.css';
import {BrowserRouter  as Router , Switch , Route} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Login from './Component/Login';
import styled from 'styled-components';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Chat from './Component/Chat';
import Database, { Auth } from './firebase';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [channels , setChannels ] = useState([])//is mein hm channel create karen ga or yeah sb firebase mein data save ho ga.
  const [userDetail , setUserDetail] = useState([])
    const getConnectFirebase = ()=>{
      Database.collection("channels").onSnapshot((snapshot)=>{
        setChannels(snapshot.docs.map((doc)=>{
          return {id: doc.id , name: doc.data().name , href: doc.data().href}
        }))
      })
    }

    const [user , setUser] = useState(JSON.parse(localStorage.getItem('user')))///yeah state hm na user ka liye bnai hai jis mein user ki detail hon gi ka is user ka data hamari app mein mojood hai ka nhi
    
    const getConnectFirebaseHeader = ()=>{
        Database.collection("header").onSnapshot((snapshot)=>{
          setUserDetail(snapshot.docs.map((doc)=>{
            return {id:doc.id , name:doc.data().user}
          }))
        })
    }

    const signOut = ()=>{
      Auth.signOut().then(()=>{
        localStorage.removeItem('user')
        setUser(null)
      })
    }

    useEffect(()=>{
      getConnectFirebase()
      getConnectFirebaseHeader()
    },[])
    console.log(userDetail)
   return (
    <div className="App">
      <Router>
        {
          // we use !userDetail because we the funtionality if this is the correct user 
          // then he will access the application other wise he can't do anything.
            !user?
            <Login setUser = {setUser}/>
            : //agr yeah user ki detail sahi ho gi tho hi woh aage pass ho paye ga.
        <Container>
          <Header header = {userDetail}  user = {user} signOut = {signOut}/>
          <Main>
            <Sidebar channel={channels}/>
            <Switch>
            <Route path="/">
                <Chat user = {user}/>
              </Route> 
              <Route path="/home">
                <Home/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
            </Switch>
          </Main>
        </Container>
        }
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