import styled from "styled-components";


const ListCardItem = ({data}) => {
    return (
        <div class="list-group-item">
            <Container>
            <Elem1>{data[0]}</Elem1>
            <Elem2>{data[1]}</Elem2>
            </Container>
        </div>
    )
}

export default ListCardItem;

const Container = styled.div`
    display: inline-flex;
    justify-content: space-between;
    width: 100%;

`

const Elem1 = styled.div`
    color: black;
`

const Elem2 = styled.div`
    color: blue;
`