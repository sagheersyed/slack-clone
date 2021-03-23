import  styled  from 'styled-components'
import React, { useState } from 'react'
import Database from "../firebase"
import { useEffect } from 'react'
import image from '../'
function Home() {

    const [content , setContent] = useState([])

    const getConnectFirebase = ()=>{
        Database.collection("home").onSnapshot((snapshot)=>{
            setContent(snapshot.docs.map((doc)=>{
                return {id:doc.id , content:doc.data().content}
            }))
        })
    }

    const addContent = ()=>{
        const contentPrompt = prompt("Enter your content")
        Database.collection("home").add({
            content:contentPrompt
        })
    }

    useEffect(()=>{
        getConnectFirebase()
    },[])
    console.log(content)
    return (
       <Container>
           <Content onClick={addContent}>
                    {
                        content.map((items)=>{
                            return( 
                                <Title>{items.content}</Title>
                                )
                        })
                    }
           </Content>
       </Container>
    )
}

export default Home

const Container = styled.div `
background-image: url("avator.png");
position:relative;
`;


const Content = styled.div`
background:#e86056;
width:400px;
height:400px;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%)

`;

const Title = styled.div`
color:white;
display:flex;
align-items:center;
justify-content:center;
// background:blue;
width:400px;
height:30px;
`