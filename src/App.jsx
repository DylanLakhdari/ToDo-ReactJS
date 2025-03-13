import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
    constructor(props) {
        super(props);

        //Stockage des éléments de la todo
        this.state = {
            userInput: "",
            list: [],
        };
    }

    //Mise à jour de l'input de l'user
    updateInput(value) {
        this.setState({
            userInput: value,
        });
    }

    addItem() {
        if (this.state.userInput !== "") {
            const userInput = {
                //Ajoute un id unique pour la suppression
                id: Math.random(),

                //Ajoute la value de l'utilisateur dans la liste
                value: this.state.userInput,
            };

            // Met à jour la liste
            const list = [...this.state.list];
            list.push(userInput);

            //Réinitialise l'input
            this.setState({
                list,
                userInput: "",
            });
        }
    }

    deleteItem(key) {
        const list = [...this.state.list];

        //Filtre la liste pour retirer l'élément avec son id
        const updateList = list.filter((item) => item.id !== key);

        //Met à jour la liste dans state
        this.setState({
            list: updateList,
        });
    }

    editItem = (index) => {
        const todos = [...this.state.list];

        //Demande à l'utilisateur une valeur avec un prompt
        const editedTodo = prompt("Modifier la ligne:");

        //Si la nouvelle valeur n'est ni vide ni "null" met à jour l'élément
        if (editedTodo !== null && editedTodo.trim() !== "") {
            let updatedTodos = [...todos];
            updatedTodos[index].value = editedTodo;
            this.setState({
                list: updatedTodos,
            });
        }
    };

    render() {
        return (
            <Container style={{minHeight: '100vh', minWidth: '100%', background: '#2b2d30'}}>
                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "3rem",
                        fontWeight: "bolder",
                        color: "white",
                    }}
                className="pt-5">
                    ToDo ReactJS
                </Row>

                <hr/>

                <Row>
                    <Col style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "3rem",
                        fontWeight: "bolder",
                        color: "white",
                    }}>
                        <InputGroup className="mb-3 w-50 p-3">
                            <FormControl
                                placeholder="ajouter un élément . . . "
                                size="lg"
                                value={this.state.userInput}
                                onChange={(item) => this.updateInput(item.target.value)}
                                aria-label="add something"
                                aria-describedby="basic-addon2"
                            />
                            <Button className="" onClick={() => this.addItem()}>
                                Ajouter
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ListGroup>
                            {this.state.list.map((item, index) => {
                                return (
                                    <div key={index} style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontWeight: "bolder",
                                        color: "white",
                                    }}>
                                        <ListGroup.Item className="w-50 rounded mb-3 text-light fs-2"
                                                        variant="dark"
                                                        action
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "center",
                                                            backgroundColor: "#1e1f22"
                                                        }}
                                        >
                                            {item.value}
                        <div className="d-flex align-items-center">
                            <Button
                                style={{marginRight: "10px"}}
                                variant="light"
                                onClick={() => this.deleteItem(item.id)}
                            >
                          Supprimer
                        </Button>
                        <Button
                            variant="light"
                            onClick={() => this.editItem(index)}
                        >
                          Modifer
                        </Button>
                        </div>
                                        </ListGroup.Item>
                                    </div>
                                );
                            })}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;
