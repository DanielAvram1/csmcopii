
import Gallery from "../components/gallery"
import GalleryItem from "../components/galleryItem"
import Header from "../components/header"

const Galerie = () => {
    return (
        <div className='container'>
            <Header
                title='Galerie foto'
                description='descriere galerie foto'
                textColor='white'
            />
            <Gallery>
                <GalleryItem
                    imgLink={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"}
                    description="this is a dog"
                    date="21:12:1979"
                />
                <GalleryItem
                    imgLink={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"}
                    description="this is a dog"
                    date="21:12:1979"
                />
                <GalleryItem
                    imgLink={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"}
                    description="this is a dog"
                    date="21:12:1979"
                />
                <GalleryItem
                    imgLink={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"}
                    description="this is a dog"
                    date="21:12:1979"
                />
            </Gallery>
        </div>
    )
}

export default Galerie