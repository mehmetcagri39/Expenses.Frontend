import { React, useState, useEffect } from "react-bootstrap";
import { Form, Row, Col, Button } from "react-bootstrap";
export default () => {
    const descriptions = ['Groceries', 'Credit Card', 'Student Loans', 'Eating out', 'Gas' ]
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState(descriptions[0]);
    return <Form>
        <Row>
            <Col>
                <Form.Label>Description</Form.Label>
                <Form.Control as={'select'}
                onChange={event => setDescription(event.target.value)}></Form.Control>
                {descriptions.map(d=> <option>{d}</option>)}
            </Col>
            <Col>
                <Form.Label></Form.Label>
                <Form.Control></Form.Control>
            </Col>
            <div style={{marginTop:'auto'}}>
                {isNewExpense?<Button variant ='primary' type='submit'>Add</Button> : 
                <div>
                    <Button variant ='danger' >Delete</Button> 
                    <Button variant ='success' type='submit'>Save</Button> 
                    <Button variant ='default' >Cancel</Button> 
                </div> }
            </div>
        </Row>
    </Form>
}