import React from 'react'
import styled from 'styled-components'
import ControlPointDuplicateSharpIcon from '@material-ui/icons/ControlPointDuplicateSharp';
import CommentIcon from '@material-ui/icons/Comment';
import AddIcon from '@material-ui/icons/Add';
import MoreIcon from '@material-ui/icons/More';
import GroupIcon from '@material-ui/icons/Group';
import TurnedInIcon from '@material-ui/icons/TurnedIn';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ImportExportIcon from '@material-ui/icons/ImportExport';
function Sidebar() {
    return (
            <Container>
                <Box1  style={{display:'flex' , justifyContent:'space-between'}}>
                    <Name>
                        <a href="#">Sagheer Syed</a>
                    </Name>
                     <ControlPointDuplicateSharpIcon style={{padding:20}}/>
                </Box1>
                <Box2>
                    <CommentIcon/>
                    <Naming>
                        <a href="#">Thread</a>
                    </Naming>
                </Box2>
                <Box2>
                    <MoreIcon/>
                    <Naming>
                        <a href="#">All DMs</a>
                    </Naming>
                </Box2>
                <Box2>
                    <BorderColorIcon/>
                    <Naming>
                        <a href="#">Mentions & Reactions</a>
                    </Naming>
                </Box2>
                <Box2>
                    <TurnedInIcon/>
                    <Naming>
                        <a href="#">Save Items</a>
                    </Naming>
                </Box2>
                <Box2>
                    <GroupIcon/><Naming><a href="#">Peoples & Groups</a></Naming></Box2>
                <Box2>
                    <AddIcon/>
                    <Naming>
                        <a href="#">More</a>
                    </Naming>
                </Box2>
                <Box3>
                    <a href="#">Channels</a>
                    <AddIcon/>
                </Box3>
                <Box4>
                    <ImportExportIcon/>
                    <NamingChannel>
                        <a href="#">Channel 1</a>
                    </NamingChannel>
                </Box4>
                <Box4>
                    <ImportExportIcon/>
                    <NamingChannel>
                        <a href="#">Channel 2</a>
                    </NamingChannel>
                </Box4>
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
    background:transparent;
    text-decoration:none;
    color:#d674d3;
}
`;

const Box1 = styled.div `
display:flex;
align-items:center;
height:80px;
color:white;
margin:2px;
margin-bottom:10px;
box-shadow: 0px 1px 0px 0px rgba(255, 255, 255 ,50%);

`;

const Name = styled.div `
font-size: large;
color:#d9c1d9;
display:flex;
align-items:center;
`;

const Box2 = styled.div `
background:#4f1e4e;
height:40px;
margin:2px;
display:flex;
justify-content:;
align-items:center;
box-shadow: 0px 1px 0px 0px rgba(255, 255, 255 ,10%);
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
`;

const Box4 = styled.div `
display:flex;
align-items:center;
margin:2px;
height:40px;
box-shadow: 0px 1px 0px 0px rgba(255, 255, 255 ,10%);
`;

const NamingChannel = styled.div `
padding-left:5px;
`;