import ContentWithSideBar from "../components/contentWithSideBar"
import Header from "../components/header"
import Post from "../components/post"
import ads from '../data/announcement.json'
import headerBackground from '../assets/images/backgrounds/announcements.jpg'

const Anunturi = () => {
    return (
        <div className='container'>
            <Header 
                title="Anunturi"
                description="pagina cu anunturi"
                textColor='black'
                backgroundImage={headerBackground}
            />
            <ContentWithSideBar>
            {ads.map((ad) => (
                    <Post 
                        title={ad.title}
                        body={ad.body}
                        date={ad.date}
                    />
                ))}
            </ContentWithSideBar>
        </div>
        

    )
}

export default Anunturi