import {Card, Button} from "react-bootstrap";
import './joke.scss'
let favoriteList = [];
const Joke=(props)=>{

    const handleSave = () =>{
        let obj ={}
        obj["id"]=props.id;
        obj["value"]=props.value;
        obj["url"]=props.url;
        favoriteList.push(obj)
        localStorage.setItem('favoriteJokes', JSON.stringify(favoriteList))
    }

    return(
        <Card>
            <Card.Header>{props.value}</Card.Header>
            <Card.Body>
                <div>
                    <a className="m-2" href={props.url} target="_blank">Saltinis</a></div>
                <div><Button onClick={handleSave}>Man Patinka</Button></div>
            </Card.Body>
        </Card>
    )
}
export default Joke