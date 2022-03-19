import React, {Component} from 'react';
import './TodoList.css'
import TodoItem from "../TodoItem/TodoItem";

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state={
            todoItems:[
                {
                    id: "14",
                    title: "Сделать утреннюю зарядку",
                    completed: true
                },
                {
                    id: "16",
                    title: "Купить продукты",
                    completed: false
                },
                {
                    id: "18",
                    title: "Сделать домашнее задание",
                    completed: false
                },
                {
                    id: "19",
                    title: "Сходить в кино",
                    completed: true
                },
                {
                    id: "20",
                    title: "Позвонить другу",
                    completed: false
                }
            ]
        }
    }

    onDeleteClick(id){
        const restTodoItems = this.state.todoItems.filter(element => element.id !== id);
        this.setState({
            todoItems: restTodoItems
        })};

    render() {
        const {todoItems} = this.state;
        return (
            <>
                <h1>To do List</h1>
                <TodoItem
                    todoItems = {todoItems}
                    onDeleteClick = { this.onDeleteClick.bind(this)}
                />
            </>

        );
    }
}