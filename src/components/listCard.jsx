import styled from "styled-components";
import ListCardItem from "./listCardItem"


const ListCard = (props) => {
    return (
        <Container className='card'>
            <div className="card-header">
                {props.header}
            </div>
            <div class="list-group list-group-flush">
              
                {props.list.map(item => (
                    <ListCardItem
                        data={item}
                    ></ListCardItem>
                ))}
                </div>
        </Container>
    )
}

export default ListCard;

const Container = styled.div`
    margin-top: 10px;
`