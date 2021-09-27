import Dropdown from './dropdown'
import DropdownItem from './dropdownItem';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import placeholderPdf from '../assets/pdfs/placeholder.pdf'

const NavBar = () => {

	const [despreInstitutie, setDespreInstitutie] = useState(false)
	const [activitati, setActivitati] = useState(false)

	return (
		<NavContainer className="navbar navbar-expand navbar-light">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">CSMCopii</Link>
				<div class="navbar-collapse">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to='/' className="nav-link">Pagina principala</Link>
						</li>

						<li className="nav-item dropdown">
							<div className="nav-link dropdown-toggle"
								style={{ cursor: 'pointer' }}
								onClick={() => {
									setDespreInstitutie(!despreInstitutie)
									setActivitati(false)
								}}
							>
								Despre institutie
							</div>
							{despreInstitutie ?

								(
									<Dropdown handleOut={() => { setDespreInstitutie(false) }}>
										<DropdownItem to='/conducere'>Conducere</DropdownItem>
										<DropdownItem to='/galerie'>Galerie foto</DropdownItem>
									</Dropdown>
								)
								:
								null
							}
						</li>
						<li className="nav-item dropdown">
							<div className="nav-link dropdown-toggle"
								style={{ cursor: 'pointer' }}
								onClick={() => {
									setActivitati(!activitati)
									setDespreInstitutie(false)
								}}
							>
								Activitati
							</div>
							{activitati ?
								(

									<Dropdown handleOut={() => { setActivitati(false) }}>
										<DropdownItem to='/noutati'>Noutati</DropdownItem>
										<DropdownItem to='/anunturi'>Anunturi</DropdownItem>
									</Dropdown>
								)
								:
								null
							}
						</li>
						<li className="nav-item">
							<Link to='/transparenta' className="nav-link">Transparenta</Link>
						</li>
					</ul>

				</div>
			</div>
		</NavContainer>
	)
}

export default NavBar;

const DropdownContent = styled.div`
position: absolute; 
z-index: 2;  
background-color: white;
border-radius: 5px;
`

const NavContainer = styled.nav`
background-color: #d4e4ff;
`