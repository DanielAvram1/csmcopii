

const GalleryItem = ({imgLink, description, date}) => {
    return (
        <div class="col">
          <div class="card shadow-sm">
            <img width="100%" src={imgLink}/>

                <div class="card-body">
                    <p class="card-text">{description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                        </div>
                        <small class="text-muted">{date}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryItem