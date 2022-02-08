import '../App.css';
import { Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estructura.scss'

const Footer = () => {


    return (
        <div>
            <div className="navbar pieDePag fixed-bottom navbar-expand-sm">
                <Container fluid className="container">
                    <h6 className="navbar-brand">©3d2print</h6>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav">
                            <Nav.Link as={ Link } to="/">Home</Nav.Link>
                            <Nav.Link href="https://instagram.com/3d2prints"><img src="/media/instalogo.png" alt="" height="30" width="30"/></Nav.Link>
                            <Nav.Link href="https://facebook.com/3D2prints-108727260476174"><img src="/media/facelogo.png" alt="" height="30" width="30"/></Nav.Link>
                            <Nav.Link href="https://twitter.com/3d2prints"><img src="/media/twitlogo.png" alt="" height="30" width="30"/></Nav.Link>
                        </ul>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Footer
