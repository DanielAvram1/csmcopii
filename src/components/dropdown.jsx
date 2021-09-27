import { useRef, useEffect } from "react"
import styled from "styled-components"

const Dropdown = ({handleOut, children}) => {

    const handleClick = e => {
        if (node.current.contains(e.target)) {
          return;
        }
        handleOut()
      };

    const node = useRef()
    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, []);
    return (
        <Container ref={node}>
            {children}
        </Container>
        
    )
}

export default Dropdown

const Container = styled.div`
position: absolute; 
z-index: 2;  
background-color: white;
border-radius: 5px;
`