import ContentWithSideBar from "../components/contentWithSideBar"
import Header from "../components/header"
import Post from "../components/post"
import { useParams } from "react-router-dom"
import news from '../data/news.json'
import headerBackground from '../assets/images/backgrounds/news.jpg'


const Noutate = () => {
    const { id } = useParams()
    const [noutate] = news.filter(n => n.id == id)
    console.log(noutate)
    return (
        <div className='container'>
            <Header
                title={noutate.title}
                description={noutate.date}
                textColor='black'
                backgroundImage={headerBackground}
            />
            <ContentWithSideBar>
                <Post
                    body={noutate.body}
                />
            </ContentWithSideBar>
        </div>
    )
}

export default Noutate