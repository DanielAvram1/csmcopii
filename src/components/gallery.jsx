
const Gallery = (props) => {
    return (
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {props.children}
      </div>
    )
}

export default Gallery