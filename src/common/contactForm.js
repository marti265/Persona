import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap";


class ContactForm extends Component {

    state = {
        isReadOnly: true
    }

    editForm = () => {
        console.log('editForm function is working ')
        this.setState((curState) => ({
            isReadOnly: !curState.isReadOnly
        }))
    }

    render() {
        console.log(`contactForm - Render()`)
        const {isReadOnly} = this.state;
        const {contact} = this.props;
        
        return (
            <ReactBootStrap.Form>
            <ReactBootStrap.Form.Row>
                <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="formGridFirstName">
                <ReactBootStrap.Form.Label>First Name</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control 
                    defaultValue = {contact.firstName}
                    type="text"
                    placeholder="Enter first name" 
                    readOnly = {isReadOnly}
                />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group as={ReactBootStrap.Col} controlId="formGridLastName">
                <ReactBootStrap.Form.Label>Last Name</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control 
                    defaultValue = {contact.lastName}
                    type="text"
                    placeholder="Enter last name" 
                    readOnly = {isReadOnly}
                />
                </ReactBootStrap.Form.Group>
            </ReactBootStrap.Form.Row>

            <ReactBootStrap.Form.Group controlId="formBasicEmail">
                <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control
                defaultValue = {contact.email}
                type="email"
                placeholder="Enter email"
                readOnly = {isReadOnly}
            />
            </ReactBootStrap.Form.Group>

            <ReactBootStrap.Form.Group controlId="formGridPhone">
                <ReactBootStrap.Form.Label>Phone number</ReactBootStrap.Form.Label>
                <ReactBootStrap.Form.Control
                    defaultValue = {contact.phoneNumber}
                    type="text"
                    placeholder="Enter phone number"
                    readOnly = {isReadOnly}
                />
            </ReactBootStrap.Form.Group>

            {
                isReadOnly ? ( 
                    <ReactBootStrap.Button 
                        onClick={this.editForm}
                        variant="primary">
                            Edit
                    </ReactBootStrap.Button>)
                :
                    (
                        <div>
                            <ReactBootStrap.Button 
                                onClick={this.editForm}
                                variant="success">Save</ReactBootStrap.Button>
                                {' '}
                            <ReactBootStrap.Button 
                                onClick={this.editForm}
                            variant="secondary">
                                Cancel
                            </ReactBootStrap.Button>
                        </div>
                        )
            }

        </ReactBootStrap.Form>
        )
    }
}

export default ContactForm