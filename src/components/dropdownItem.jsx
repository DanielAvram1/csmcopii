import { Link } from "react-router-dom"

const DropdownItem = (props) => {
    return (
        <Link to={props.to} className="dropdown-item">{props.children}</Link>
    )
}

export default DropdownItem