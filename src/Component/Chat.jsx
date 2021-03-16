import styled from 'styled-components'
import React from 'react'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

function Chat() {
    return (
        <Container>
                <Header>
                <UserMain>
                        <User>
                            #
                            <Name>Sagheer</Name>
                            <StarOutlineIcon/>
                        </User>
                        <Detail>
                            <Name>Details</Name>
                            <ErrorOutlineIcon/>
                        </Detail>
                    </UserMain>
                    <Description>
                        My name is Sagheer Syed
                    </Description>
                </Header>
                <MessageInput>
                   <span></span>
                   <Message> <input type="text" placeholder="Message #Sagheer"/></Message>
                </MessageInput>
        </Container>
    )
}

export default Chat;

const Container = styled.div `
height:95.9vh;
margin-right:10px;
border-right:1px solid white;
color:whitesmoke;
position:relative;
`;

const Header = styled.div `
background:transparent;
height:70px;
padding-bottom:12px;
box-shadow: 0px 1px 0px 0px rgba(255, 255, 255 ,50%);
:hover{
    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255 ,100%);
}
`

const UserMain = styled.div `
padding-top:15px;
display:flex;
align-items:center;
justify-content:space-between;
color:white;
`;

const User = styled.div `
display:flex;
padding-left:20px;
`;

const Name = styled.div `
`;

const Detail = styled.div `
padding-right:40px;
display:flex;
align-items:center;
cursor:pointer;
`;

const Description = styled.div `
padding-left:20px;
`;

const MessageInput = styled.div `
position:absolute;
bottom:30px;
left:3%;
`;

const Message = styled.div `
input{
    // background:;
    border:none;
    color:black;
    font:50px;
    border-radius:10px;
    width:77vw;
    padding:13px;
    outline:none;
}
`;