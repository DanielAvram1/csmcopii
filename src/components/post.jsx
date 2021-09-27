import styled from "styled-components"

const Post = ({title, body, date, imageLink}) => {
    return (
        <Container>
            <h2 class="blog-post-title">{title}</h2>
            <p class="blog-post-meta">{date}</p>
            <div dangerouslySetInnerHTML={{__html: body}}/>
            <hr/>


        </Container>
    )
}

export default Post

const Container = styled.div`
    margin: 20px;
    margin-top: 50px;
`