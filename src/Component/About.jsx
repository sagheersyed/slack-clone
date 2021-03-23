import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import Database from '../firebase'
import ChatForm from './data/ChatForm'

function About() {
    const [about , setAbout] = useState([])
const getConnectFirebase = ()=>{
    Database.collection('about').onSnapshot((snapshot)=>{
        setAbout(snapshot.docs.map((doc)=>{
            return {id: doc.id , name: doc.data().name , age:doc.data().age}
        }))
    })
}
const addData = ()=>{
    const promptName = prompt("enter your data")
    const promptAge = prompt("enter your age")
    Database.collection('about').add({
            name:promptName,
            age:promptAge        
    })
}

useEffect(()=>{
   getConnectFirebase()
},[])
    console.log("this is about section")
 console.log(about)
    return (
            <Container>
                <Header>

                </Header>
                <ChatContainer>
                    <LeftSidebar></LeftSidebar>
                    <Middle onClick={addData}>
                        {
                            about.map(item=>{
                                    return(
                                    <AboutSection>
                                    <Data>{item.name}</Data>
                                    <Age>{item.age}</Age>
                                    </AboutSection>
                                    )
                            })
                        }
                    </Middle>
                    <RightSidebar></RightSidebar>
                </ChatContainer>
                <MessageContainer>
                    <Inputs>
                    </Inputs>
                </MessageContainer>
            </Container>
    )
}

export default About

const Container = styled.div `
background:#803e80;
display:grid;
grid-template-rows:60px auto min-content;
`;

const Header = styled.div`
background:pink;
`;

const ChatContainer = styled.div`
background:orange;
display:grid;
grid-template-columns: 300px auto 300px;
`;

const LeftSidebar = styled.div`
background:purple;
`;

const Middle = styled.div`
background:#4ee6bd;
`;

const RightSidebar = styled.div`
background:blue;
`;

const MessageContainer = styled.div`
background:yellow;
`;

const Inputs = styled(ChatForm)`
border-radius:50px;
display:flex;
justify-content: center;
`;

const AboutSection = styled.div`
`;

const Data = styled.h1`
text-align:center;
color:orange;
`;

const Age = styled.h2`
text-align:center;
color:yellow;
`;