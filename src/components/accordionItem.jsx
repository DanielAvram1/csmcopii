import { useState } from "react"
import { propTypes } from "react-bootstrap/esm/Image"

const AccordionItem = (props) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className={`accordion-button ${isActive ? '' : 'collapsed'}`}
                    onClick={() => {
                        setIsActive(!isActive)
                    }}
                >
                    {props.title}
                </button>
            </h2>
            {isActive ?
                (<div className="accordion-body">
                    
                    {props.children}
                </div>)
                :
                null
            }
            
        
        </div>

    )
}

export default AccordionItem