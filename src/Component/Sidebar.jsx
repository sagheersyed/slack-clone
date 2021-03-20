import styled from 'styled-components'
import ControlPointDuplicateSharpIcon from '@material-ui/icons/ControlPointDuplicateSharp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import AddIcon from '@material-ui/icons/Add';
import { sidebarDataItems } from './data/sidebarMainChannels';
import {useState , useEffect} from 'react'
import Database from "../firebase"
function Sidebar(properties) {
    console.log("side bar properties : " , properties)
    const addChannel = ()=>{
        const promptName = prompt("enter channel name")
        Database.collection("channels").add({
            name:promptName
        })
    }
       return (
            <Container>
                <WorkspaceComponent>
                    <Name>
                       <a href="/chat"> Sagheer Syed </a>
                    </Name>
                     <ControlPointDuplicateSharpIcon/>
                </WorkspaceComponent>
                <MainChannel>
                {
                    sidebarDataItems.map(items=>(
                        <MainChannelItem>
                            { items.icon }
                                <Naming>
                            <a href={`${items.href}`}>{ items.text }</a>  
                                </Naming>
                        </MainChannelItem>
               ))
                }

                </MainChannel>
                <Box3>
                    <a href="#">Channels</a>
                    <AddIcon onClick={addChannel}/>
                </Box3>
                <MoreChannels>
                    {
                        properties.channel.map((items)=>{
                            return (
                                <ChannelList>
                                    <ImportExportIcon/>
                                    <NamingChannel>
                                         {items.name}
                                    </NamingChannel>
                                </ChannelList>)
                        })
                    }

                </MoreChannels>
            </Container> 
    )
}

export default Sidebar

const Container = styled.div`
background:#4f1e4e;
height:95.9vh;
padding-left:35px;
color:#d9c1d9;
a{
    text-decoration:none;
    color:#d674d3;
    :hover{
        color:white;
    }
}
`;

const WorkspaceComponent = styled.div `
display:flex;
justify-content:space-between;
align-items:center;
height:80px;
margin:2px;
margin-bottom:10px;
box-shadow: 0px 1px 0px 0px rgba(255, 255, 255 ,50%);
:hover{
    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255 ,100%);
    color:whitesmoke;
}
padding-right:25px;
`;

const Name = styled.div `
font-size: large;
color:#d9c1d9;
display:flex;
align-items:center;
`;

const MainChannel = styled.div `
`;

const MainChannelItem = styled.div  `
background:#4f1e4e;
height:40px;
margin:2px;
display:flex;
justify-content:;
align-items:center;
box-shadow: 0px 1px 0px 0px rgba(255, 255, 255 ,10%);
cursor:pointer;
:hover{
    color:whitesmoke;
    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255 ,100%);
}
`;
//use in box 2 for naming convensions
const Naming = styled.div `
padding-left:20px;
color:#d674d3;
font-size:19px;
`;

const Box3 = styled.div `
height:40px;
margin:2px;
display:flex;
align-items:center;
justify-content:space-between;
box-shadow: 0px 1px 0px 0px rgba(255, 255, 255 ,50%);
margin-top: 25px;
:hover{
    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255 ,100%);
    color:whitesmoke;
}
padding-right:20px;
`;

const ChannelList = styled.div `
display:flex;
align-items:center;
margin:2px;
height:40px;
box-shadow: 0px 1px 0px 0px rgba(255, 255, 255 ,10%);
cursor:pointer;
:hover{
    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255 ,100%);
    color:whitesmoke;    
}
`;
const MoreChannels = styled.div `
margin-top:25px;
`;
const NamingChannel = styled.div `
padding-left:5px;
color:violet;
:hover{
    color:whitesmoke;
}
`;
