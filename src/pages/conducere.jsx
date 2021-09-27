import styled from "styled-components"
import Header from "../components/header"
import ManagementPost from "../components/managementPost"
import management from "../data/management.json"

const Conducere = () => {
    const Body = styled.div`
        padding-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `
    return (
        <div className='container'>
            <Header
                title='Conducere'
                textColor='white'
                description='descriere pagina conducere'
            />
            <Body>
                {management.map((person) => (
                    <ManagementPost
                        name={person.name}
                        title={person.title}
                        body={person.body}
                        image={`${process.env.PUBLIC_URL}/assets/images/management/${person.imageName}`}
                    />
                ))}
            </Body>
        </div>

    )
}

export default Conducere