import styled from "styled-components"

const Footer = () => {
    return (
        
        <Container class="container">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3"></ul>
                <p class="text-center text-muted">CSMCopii</p>
            </footer>
        </Container>
    )
}

export default Footer

const Container = styled.div`
position:absolute;
left:0;
right:0;
`