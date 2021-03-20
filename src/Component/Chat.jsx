import styled from 'styled-components'
import React from 'react'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Database from '../firebase'
import { useEffect } from 'react';
import { useState } from 'react';
function Chat() {
    const [msg , setMsg] = useState([])
    const getChannelFirebase = () =>{
        Database.collection('chat').onSnapshot((snapshot)=>
        {
            setMsg(snapshot.docs.map((doc)=>{
                return {id:doc.id , name:doc.data().msg}
            }))
        })
    }

    const newMessage = ()=>{
        const promptName = prompt("enter the msg");
        Database.collection("chat").add({
            name:promptName            
        })
        console.log(promptName)
    }
    useEffect(()=>{
        getChannelFirebase();
    },[])
console.log(msg)
    return (
        <Container>
                <Header>
                <UserMain>
                        <User>
                            #
                            <Name>Sagheer</Name>
                            <StarOutlineIcon style={{width:20}}/>
                        </User>
                        <Detail>
                            <DetailOption>Details</DetailOption>
                            <ErrorOutlineIcon/>
                        </Detail>
                    </UserMain>
                    <Description>
                        My name is Sagheer Syed...
                    </Description>
                </Header>
                {
                    msg.map(items=>{
                       return (<Messages>{items.name}</Messages>)
                    })
                }
                <MessageInput>
                   <span></span>
                   <Message> <input type="text" onClick={newMessage}  placeholder="Message #Sagheer"/></Message>
                </MessageInput>
        </Container>
    )
}

export default Chat;

const Container = styled.div `
height:95.9vh;
margin-right:10px;
border-right:1px solid black;
color:black;
position:relative;
background:whitesmoke;
`;

const Header = styled.div `
background:transparent;
height:70px;
padding-bottom:12px;
box-shadow: 0px 1px 0px 0px rgba(200, 200, 200 ,50%);
:hover{
    box-shadow: 0px 1px 0px 0px rgba(200, 200, 200 ,100%);
}

`

const UserMain = styled.div `
padding-top:15px;
display:flex;
align-items:center;
justify-content:space-between;
color:black;
`;

const User = styled.div `
display:flex;
align-items:center;
padding-left:20px;

`;

const Name = styled.div `
`;

const Detail = styled.div `
padding-right:30px;
display:flex;
justify-content:space-between;
align-items:center;
cursor:pointer;
position:relative;

`;

const DetailOption = styled.div `
padding-right:10px;
:hover{
    color:orange;
}
`

const Description = styled.div `
padding-left:20px;
color:#878a88;
`;

const MessageInput = styled.div `
position:absolute;
bottom:30px;
left:3%;
`;

const Message = styled.div `
input{
    // background:;
    border:1px solid #757d77;
    color:black;
    font:50px;
    border-radius:10px;
    width:77vw;
    padding:13px;
    outline:none;
}
`;

const Messages = styled.div `
color:black;
padding-left:40px;
margin:10px;
background:#719bde;
width:300px;
height:4vh;
border-radius:20px;
display:flex;
align-items:center;
`;