import styled from "styled-components";

const ServiceCard = ({description, title, imageUrl, listContent}) => {
    const Container = styled.div`
        background-image: url(${imageUrl});
        background-size: cover;
        

    `
    const ListItem = styled.div`
      background-color: rgba(255, 255, 255, 0.5);
    `

    const Body = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    ` 
    
    const Title = styled.h3`
      text-align: center;
    `
    
    return (
        <Container className="card" style={{width: 18 + "rem", margin: 6+'px'}}>
          <Body className="card-body">
            <Title className="card-title">{title}</Title>
            <p className="card-text">{description}</p>
          </Body>
          <ul className="list-group list-group-flush">
            {listContent.map(con => (
              <ListItem className="list-group-item">{con}</ListItem>
            ))}
            
          </ul>
        </Container>
    )
}

export default ServiceCard;