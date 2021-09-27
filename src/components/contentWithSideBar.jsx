import styled from "styled-components"
import SideBar from "./sideBar"


const ContentWithSideBar = (props) => {
    const Container = styled.div`
        padding-bottom: 100px;
    `
    return (
        <Container className='row g-5'>
            <div className='col-md-8'>

                {props.children}
            </div>
            <SideBar></SideBar>
        </Container>
    )
}

export default ContentWithSideBar