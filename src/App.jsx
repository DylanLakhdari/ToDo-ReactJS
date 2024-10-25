import React, { Component } from "react";
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
    if (this.state.userInput == !"") {
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
    const editedTodo = prompt("Edit the todo:");

    //Si la nouvelle valeur n'est ni vide ni "null" met à jour l'élément
    if (editedTodo !== null && editedTodo.trim() !== "") {
      let updatedTodos = [...todos];
      updatedTodos[index].value = editedTodo;
      this.setState({
        list: updatedTodos,
      });
    }
  };
}
