import ContentWithSideBar from "../components/contentWithSideBar"
import Header from "../components/header"
import Post from "../components/post"
import { useParams } from "react-router-dom"
import ads from '../data/announcement.json'
import headerBackground from '../assets/images/backgrounds/announcements.jpg'


const Anunt = () => {
    const { id } = useParams()
    const [anunt] = ads.filter(a => a.id == id)
    return (
        <div className='container'>
            <Header
                title={anunt.title}
                description={anunt.date}
                textColor='black'
                backgroundImage={headerBackground}
            />
            <ContentWithSideBar>
                <Post
                    body={anunt.body}
                />
            </ContentWithSideBar>
        </div>
    )
}

export default Anunt