import React from 'react'
import styled from 'styled-components'

function ChatForm(props) {
    console.log(props)
    return (
        <Container>
            <form>
                <input type="text"  placeholder="Enter Your Message..."/>
            </form>
        </Container>
    )
}

export default ChatForm;
const Container = styled.div`
`;