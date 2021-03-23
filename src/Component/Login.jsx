import React from 'react';
import styled from 'styled-components';
import {Auth , ProviderGoogle , ProviderFb} from '../firebase'
function Login(props)
    {    
        const singInGoogle = ()=>{
            Auth.signInWithPopup(ProviderGoogle).then((result)=>{
                const newUser = {
                    name:result.user.displayName,
                    photo:result.user.photoURL,
                    email:result.user.email
                }
                localStorage.setItem('user' , JSON.stringify(newUser));
                props.setUser(newUser)
                console.log("this is a login user" + newUser)
            }).catch((error)=>{
                alert(error)
            })
        }

        const signInFacebook = ()=>{
            Auth.signInWithPopup(ProviderFb).then((result)=>{
                const newUser = {
                    name:result.user.displayName,
                    photo:result.user.photoURL,
                    email:result.user.email
                }
                localStorage.setItem('user', JSON.stringify(newUser))
                props.setUser(newUser)
                console.log(newUser)
            }).catch((error)=>{
                alert(error)
            })
        }
    
    return(
       <Container>
           <Content>
               <AppImage src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6mCqVI3I1dVX1KI1jRIA0Qq8Yirkx7k_RsQ&usqp=CAU"}/>
               <h1>RoshaabApp</h1>
               <AppSignInButton onClick={()=>singInGoogle()}>
                    SignIn With Google
               </AppSignInButton>
               <AppSignInButton onClick={()=>signInFacebook()}>
                    SignIn With Facebook
               </AppSignInButton>
           </Content>
       </Container>
    )
} 

export default Login;

const Container = styled.div`
background:whitesmoke;
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
color:#3d89bf;
font-family:Arial, Helvetica, sans-serif;
`;

const Content = styled.div`
background:white;
width:25vw;
height:50vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border-radius:7px;
box-shadow: 0px 1px 3px rgb(0 0 0 / 12%) , 0px 1px 2px rgb(0 0 0 / 24%) ;
`;

const AppImage = styled.img`
height:150px;
width:150px;
background:transparent;
`;

const AppSignInButton = styled.button`
margin-top:40px;
padding:15px;
height:50px;
width:180px;
background:#35a63b;
color:white;
font-size:15px;
font:bold;
border-radius:5px;
border:none;
cursor:pointer;
:hover{
    background:#64c24f;
    width:185px;
}
:focus{
    outline:none;
}
`;