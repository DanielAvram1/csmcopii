import styled from "styled-components"

const ManagementPost = ({title, body, name, image}) => {
    
    const Container = styled.div`
        padding: 20px;
        background-color: rgba(255, 255, 255, 0.4);
    `

    return (
        <Container className='row g-5'>
            <div className='col-sm-8'>
                <h1 class="blog-post-title">{name}</h1>
                <h5 class="blog-post-meta">{title}</h5>
                <p>
                    {body}
                </p>
            </div>
            <div className='col-sm-4'>
                <img src={image} alt={name} width='90%'/>
            </div>
            <hr/>
        </Container>
    )
}

export default ManagementPost