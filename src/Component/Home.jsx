import  styled  from 'styled-components'
import React, { useState } from 'react'
import Database from "../firebase"
import { useEffect } from 'react'
function Home() {

    const [home , setHome] = useState([])

    const getConnectFirebase = ()=>{
        Database.collection('home').onSnapshot((snapshot)=>{
            setHome(snapshot.docs.map((doc)=>{
                return {id:doc.id , name: doc.data().name}
            }))
        })
    }

    useEffect(()=>{
            getConnectFirebase()
        },[]
    )
        console.log(home)
    return (
       <Container>
           this is home
       </Container>
    )
}

export default Home

const Container = styled.div `
background:;
`;
