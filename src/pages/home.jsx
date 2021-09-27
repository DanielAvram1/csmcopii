import Header from "../components/header"
import ServiceCard from "../components/serviceCard"
import ServiceContainer from "../components/serviceContainer"
import ListCard from "../components/listCard"
import contacts from '../data/contacts.json'
import schedule from '../data/schedule.json'
import ContentWithSideBar from "../components/contentWithSideBar"
import backgroundImage from '../assets/images/backgrounds/home.jpg'
import services from '../data/services'

const Home = () => {
    return (
        <div className="container">
            <Header
                title="Clinica Stomatologica Municipala pentru Copii"
                description="Descriere la pagina principala"
                backgroundImage={backgroundImage}
                textColor='black'
            />
            <ServiceContainer>
                {services.map(service => (
                    <ServiceCard 
                        title = {service.title}
                        description={service.description}
                        imageUrl={`${process.env.PUBLIC_URL}/assets/images/${service.imageName}`}
                        listContent={service.doctorList}
                    />
                ))}
            </ServiceContainer>
            <div className="row mb-2">
                

            </div>
            <ContentWithSideBar>
                <ListCard
                    header={contacts.header}
                    list={contacts.list}
                />
            
            
                <ListCard
                    header={schedule.header}
                    list={schedule.list}
                />
                
            </ContentWithSideBar>
        </div>
    )
}

export default Home;