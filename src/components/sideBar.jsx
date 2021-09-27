import { Link } from "react-router-dom";
import styled from "styled-components";
import news from '../data/news.json'
import ads from '../data/announcement.json'

const SideBar = () => {
    return (
        <div className="col-md-4" style={{display: 'table'}}>
          <Container>
            <div className="p-4 mb-3 bg-dark text-white rounded">
              <h4 className="fst-italic">Despre</h4>
              <p className="mb-0">
                Toate datele, pdf-urile si o mare parte din imagini au fost alese aleatoriu doar pentru a demonstra cum lucreaza site-ul.
                Cand voi avea materialele, deja le voi introduce pe ele. De asemenea, trebuie de mai lucrat la galerie si la alte maruntisuri
                pentru ca inca nu e clar ce si cum trebuie sa arate.
              </p>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Anunturi</h4>
              <ol className="list-unstyled">
                
                {
                  ads.slice(-3).reverse().map(a => 
                    (<li>
                      <Link 
                        to={`/anunt/${a.id}`} 
                        state={{ anunt: a}}
                      >
                        {a.excerpt}
                      </Link>
                    </li>))
                }
              
              </ol>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Noutati</h4>
              <ol className="list-unstyled mb-0">
              {
                news.slice(-3).reverse().map(n => 
                  (<li>
                    <Link 
                      to={`/noutate/${n.id}`} 
                      state={{ anunt: n}}
                    >
                      {n.excerpt}
                    </Link>
                  </li>))
                }
              </ol>
            </div>
    
            
          </Container>
        </div>
    )
}

export default SideBar;

const Container = styled.div`
    postition: sticly;
    top: 2rem;
    height: 100px;
    display: table-cell
`