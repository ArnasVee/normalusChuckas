import {Card, Form, Button, FloatingLabel} from "react-bootstrap";
import {useState} from "react";
const Search=(props)=>{
    const [term, setTerm] = useState('')

    const handleChange = (e)=>{
        setTerm(e.target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        props.onSearch(term)
    }

    console.log(term)
    return(
        <Card>
            <Card.Header>Juokelio Paieska</Card.Header>
            <Card.Body>
                <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Control type="text" placeholder="Juokelis..." name="term" value={term} onChange={handleChange}/>
                </Form.Group>
                <Form.Group>
                    <Button type="submit" variant="primary" className="mt-2">Ieskoti</Button>
                </Form.Group>
                </Form>
            </Card.Body>
        </Card>
    )
}
export default Search