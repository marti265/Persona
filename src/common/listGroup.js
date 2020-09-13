import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap";
import { render } from '@testing-library/react';


class ListGroup extends Component{

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    clearQuery = () => {
        this.updateQuery('')
    }

    render() {
        const {query} = this.state
        const {items, onItemSelect, selectedItem} = this.props;

        const showingItems = query === '' ? items :
        items.filter((item) => (
            `${item.firstName}${item.lastName}`.toLowerCase().includes(query.toLocaleLowerCase())
        ))

        return (
            <div>
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder='Search Contacts'
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value)}
                />
                <br />

                {//<ul className="list-group">
                    //     {showingItems.map((item) => (
                    //        <li
                    //            key={item._id} 
                    //            className={item === selectedItem ? "list-group-item active" : "list-group-item"}
                    //            onClick = {() => {onItemSelect(item)}}>
                    //            {item.firstName} {item.lastName}                  
                    //         </li>
                    //    ))}
                    //</ul>
                }

            </div>
        );
    }
}

export default ListGroup;