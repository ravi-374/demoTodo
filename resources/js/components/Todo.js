import React, {useEffect, useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {addToDo, changeStatus, deleteToDo, getTodos} from "../actions/index";
import './todo.css';
import {Button, Col, Container, Form, ListGroup, Modal, Row} from "react-bootstrap";

const Todo = () => {
    const [inputData, setInputData] = useState({
        title:"",
        status:true,
    });
    const [show, setShow] = useState(false);
    const [refetch, setRefetch] = useState(false);

    useEffect(() => {
            dispatch(getTodos());
    }, [refetch]);

    const handleSubmit = () => {
        setShow(false);
        dispatch(addToDo(inputData));
        setInputData('');
        setRefetch(!refetch);
    };

    const handleTitleChange = (event) => {
        setInputData({
            title: event?.target?.value,
            status: true,
        });
    };

    const handleCheckBoxChange = (id) => {
        dispatch(changeStatus(id));
    };

    const handleShow = () => setShow(true);
    const list = useSelector((state => state.todoReducers.list))

    const dispatch = useDispatch();
    return(
        <>
            <div className="main_div">
                <div className="child_div">
                    <h2 style={{textAlign:"center"}}>
                        Add Your Todo List Here
                    </h2>
                    <Container fluid="md">
                        <Button as={Col} variant="primary" onClick={handleShow}>Add</Button>
                        <ListGroup className='listing'>
                            {
                                list  && list.map((elem) => {
                                    return (
                                        <div key={elem.id} className="listingDiv">
                                            <Row>
                                                <Col xs={1}>
                                                    <Form.Check checked={elem?.status} type="checkbox" onChange={() => handleCheckBoxChange(elem.id)}/>
                                                </Col>
                                                <Col xs={8}>
                                                    <ListGroup.Item>{elem.title}</ListGroup.Item>
                                                </Col>
                                                <Button variant="danger" onClick={() => dispatch(deleteToDo(elem.id))}>Delete</Button>
                                            </Row>
                                        </div>
                                    )
                                })
                            }
                        </ListGroup>

                        <Modal show={show} onHide={() => setShow(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add Todo</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Add items..."
                                            autoFocus
                                            value={inputData?.title}
                                            onChange={(event) => handleTitleChange(event)}
                                        />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShow(false)}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleSubmit}>
                                    ADD
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Container>
                </div>
            </div>
        </>
    )
};
export default Todo;