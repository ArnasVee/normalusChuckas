import {Container, Navbar} from "react-bootstrap";
import Navigation from "../navigation/Navigation";
const Header = ()=>{
    return(
        <Navbar bg="secondary" variant="dark" fixed="top">
            <Container>
                <Navbar className="Brand">Jokes</Navbar>
                <Navigation/>
            </Container>
        </Navbar>

    )
}

export default Header