import Header from "../header/header";
import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../home/Home";
import Favorites from "../favourites/Favorites";
import Search from "../search/Search";
import Joke from "../joke/Joke";


function App() {
  return (
    <Container>
        <Router>
            <Header/>
            <Container style={{marginTop:'80px'}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/my-jokes" element={<Favorites/>}/>
                    <Route path="/search" element={<Search/>}/>


                </Routes>
            </Container>
        </Router>
    </Container>
  );
}

export default App;
