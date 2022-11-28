import {useState, useEffect} from "react";
//import data from "bootstrap/js/src/dom/data";              //<--tipo data nereikia
import Search from "../search/Search";
import Joke from "../joke/Joke";
import {Row} from "react-bootstrap";

const Home =()=>{
    const [jokes,setJokes] = useState([]);   //cia desim fetchintus juokelius
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (term)=>{
        // console.log('is home komponento ' + term)
        setSearchTerm(term)
    }
    useEffect(()=>{
        try{
            fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
                .then(response=>response.json())
                .then(data=>setJokes(data.result))
        }catch(msg){
            console.log(msg)
        }
    },[searchTerm])  //<--prasuka efekta su nauja reiksme, tipo tikrina
    searchTerm && console.log(jokes)
    return(
        <div>
            <Search onSearch ={handleSearch}/>
            {jokes &&
                <div>
            <h2>Paieskos rezultatai</h2>
            <Row>
                {jokes.map(joke=>(<Joke id = {joke.id} value={joke.value} url={joke.url}/>))}   //cia baisiai svarbu, cia jau parodo aplikacijoje
            </Row>
                </div>}
        </div>
    )
}

export default Home