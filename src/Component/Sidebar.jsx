import React from 'react'
import styled from 'styled-components'
function Sidebar() {
    return (
        <div>
            <Working>Sidebar</Working>
        </div>
    )
}

export default Sidebar

const Working = styled.div`
background:green;
height:100vh;
`;