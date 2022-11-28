import Joke from "../joke/Joke";
import {Row} from "react-bootstrap";
import {useEffect, useState} from "react";
const Favorites=()=>{
    const [jokesList, setJokesList] = useState([])
    const data = JSON.parse(window.localStorage.getItem('favoriteJokes'))

    useEffect(()=>{
        if (data.length)
        {
            setJokesList(state=>([...state],[...data]))
        }
    },[])

    console.log(jokesList)
    return(
        <>
        {jokesList && <div>
            <h2>mano juokeliai</h2>
            <Row>
                {jokesList.map(joke=>(<Joke id = {joke.id} value={joke.value} url={joke.url}/>))}
            </Row>
            </div>}
        </>
    )
}
export default Favorites