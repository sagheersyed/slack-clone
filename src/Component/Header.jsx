import React from 'react'
import style from 'styled-components'
import AccessTime from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Avatar from '@material-ui/core/Avatar';
function Header() {
    return (
        <div>
            <Container>
            <Main>
                <AccessTime style={{marginRight:20}}/>
                    <SearchContainer>
                        <Search>
                            <input type="text" placeholder="Search"/>
                        </Search>
                    </SearchContainer>
                <HelpOutlineIcon style={{marginLeft:20}}/>
            </Main>
            <UserController>
                <UserName>Sagheer</UserName>
                <UserImage>
                    {/* <img src={"./public/user.jpeg"} alt="xx"/> */}
                    <Avatar style={{width:30 , height:30}}/>
                </UserImage>
            </UserController>
            </Container>
        </div>
    )
}

export default Header

const Container = style.div`
display:flex;
justify-content:center;
align-items:center;
height: 50px;
background:#350d36;
color:white;
position:relative;
box-shadow: 0px 1px 0px 0px rgba(255, 255, 255 ,10%);
`;

const Main = style.div`
display:flex;
justify-content:center;
`;


const SearchContainer = style.div`
    width:500px;
`;

const Search = style.div`
    box-shadow:inset 0 0 0 1px rgb(104 74 104);
    border-radius:4px;
    input{
        background-color:transparent;
        border:none;
        width:95.5%;
        color:white;
        padding:10px 20px 10px 10px;
    }

    input:focus{
        outline:none;
    }
`;


const UserController = style.div`
display:flex;
align-items:center;
padding-right:15px;
position:absolute;
right:0
`;

const UserName = style.div`
padding-right:15px;
`;

const UserImage = style.div`
`;