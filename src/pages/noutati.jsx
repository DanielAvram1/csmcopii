import ContentWithSideBar from "../components/contentWithSideBar"
import Header from "../components/header"
import Post from "../components/post"
import news from '../data/news.json'
import headerBackground from '../assets/images/backgrounds/news.jpg'


const Noutati = () => {
    return (
        <div className='container'>
            <Header
                title='Noutati'
                description='Descriere Noutati'
                textColor='black'
                backgroundImage={headerBackground}
            />
            <ContentWithSideBar>
                {news.map((noutate) => (
                    <Post 
                        title={noutate.title}
                        body={noutate.body}
                        date={noutate.date}
                    />
                ))}
            </ContentWithSideBar>
        </div>
    )
}

export default Noutati