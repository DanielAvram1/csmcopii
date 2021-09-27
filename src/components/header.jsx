import styled from "styled-components";

const Header = ({title, description, link, linkText,  backgroundImage, textColor}) => {

    const Container = styled.div`
        background-image: url(${backgroundImage});
        background-size: cover;
        margin-top: 10px;
    `
    const Title = styled.h1`
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: white;
    `

    console.log(backgroundImage)
    return (
        <Container 
          className={`p-4 p-md-5 mb-4 text-${textColor} rounded bg-dark`}>
        <div className="col-md-6 px-0">
          <Title className="display-4 fst-italic">{title}</Title>
          <p className="lead my-3">{description}</p>
          <p className="lead mb-0"><a href={link} className="text-white fw-bold">{linkText}</a></p>
        </div>
      </Container>
    )
}

export default Header;

