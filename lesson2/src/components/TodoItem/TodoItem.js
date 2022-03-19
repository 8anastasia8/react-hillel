import React, {Component} from 'react';
import {FaTrash} from "react-icons/fa";
import './TodoItem.css'
import {ListGroup} from "react-bootstrap";


export default class TodoItem extends Component {

    render() {
        return (
            <div >
                <ListGroup >
                    {this.props.todoItems.map((item)=>(
                        <ListGroup.Item  className={item.completed ? 'todoList completed' : 'todoList'} key={item.id}>
                            <span>{item.title}</span>
                            <button
                                className='deleteBtn'
                                onClick={this.props.onDeleteClick.bind(this, item.id)}
                            ><FaTrash/></button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        );
    }
}
