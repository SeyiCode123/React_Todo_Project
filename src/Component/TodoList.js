import React, { Component } from 'react'

import TodoItems from './TodoItems'

export default class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props
        return (
            <ul className = 'list-group my-5'>
                <h3 className = 'text-capitalize text-center'>
                    todo list
                </h3>

                {items.map(item =>{
                    return <TodoItems handleDelete={() => handleDelete(item.id)}
                                      handleEdit={() => handleEdit(item.id)} 
                                      key={items.id} 
                                      title={item.item}  
                          />
                })}  
                <button type = 'button' 
                        className = 'btn btn-sm btn-danger btn-block text-capitalize mt-5'  
                        onClick = {clearList}
                >
                    clear list
                </button>
            </ul>
        )
    }
}
