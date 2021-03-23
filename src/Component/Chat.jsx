import styled from 'styled-components'
import React from 'react'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Database from '../firebase'
import { useEffect } from 'react';
import { useState } from 'react';
import ChatForm from './data/ChatForm'; 
function Chat({user}) {
    const [msg , setMsg] = useState([])
    const getChannelFirebase = () =>{
        Database.collection('chat').onSnapshot((snapshot)=>
        {
            setMsg(snapshot.docs.map((doc)=>{
                return {id:doc.id , msg:doc.data().msg , time:doc.data().time}
            }))
        })
    }

    const newMessage = ()=>{
        const promptName = prompt("enter the msg");
        Database.collection("chat").add({
            msg:promptName
        })
    }
    useEffect(()=>{
        getChannelFirebase();
    },[])
console.log(msg)
        return (
        <Container>
                <Header>
                <Channel>
                        <ChannelName>
                            #
                            <Name>Sagheer</Name>
                            <StarOutlineIcon style={{width:20}}/>
                        </ChannelName>
                        <Detail>
                            <DetailOption>Details</DetailOption>
                            <ErrorOutlineIcon/>
                        </Detail>
                </Channel>
                    <ChannelInfo>
                        My name is Sagheer Syed...
                    </ChannelInfo>
                </Header>
                <ChatArea onClick={newMessage}>
                {
                    msg.map(items=>{
                       return (
                        <Parent>
                            <UserAvator><img src={user.photo} alt=""/></UserAvator>
                            <Messages>{items.msg}</Messages>
                        </Parent>
                       )
                    })
                }
                </ChatArea>
                <MessageInput>
                   <span></span>
                   <Message> 
                       <ChatForm chrat={Message}/>
                   </Message>
                </MessageInput>
        </Container>
    )
}

export default Chat;

const Container = styled.div `
height:100vh;
margin-right:10px;
border-right:1px solid black;
color:black;
position:relative;
background:whitesmoke;
display:grid;
grid-template-rows: 80px auto min-content;
`;

const Header = styled.div `
background:transparent;
padding-bottom:12px;
box-shadow: 0px 1px 0px 0px rgba(200, 200, 200 ,50%);
:hover{
    box-shadow: 0px 1px 0px 0px rgba(200, 200, 200 ,100%);
}

`

const Channel= styled.div `
padding-top:15px;
display:flex;
align-items:center;
justify-content:space-between;
color:black;
`;

const ChannelName = styled.div `
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

const ChannelInfo = styled.div `
padding-left:20px;
color:#878a88;
`;

const MessageInput = styled.div `
display:flex;
justify-content:center;
align-items:center;
padding-bottom:10px;
`;

const Message = styled.div `
input{
    // background:;
    border:1px solid #757d77;
    color:black;
    font:50px;
    border-radius:5px;
    width:77vw;
    padding:13px;
    outline:none;
}
`;

const Messages = styled.div `
color:black;
padding-left:40px;
margin:10px;
background:#c1d0e8;
width:20vw;
height:5vh;
border-radius:5px;
display:flex;
align-items:center;
`;

const ChatArea = styled.div`
`;

const Parent = styled.div`
width:20vw;
display:flex;
align-items:center;
padding:20px;
`;

const UserAvator =styled.div`
img{
    height:50px;
    display:flex;
    border-radius:50%;
}
`;

const Block = styled.div`
background:#719bde;
`;