import React, { Component } from "react";
import ListGroup from '../common/listGroup';
import * as ReactBootStrap from "react-bootstrap";
import ContactForm from '../common/contactForm';
import Header from '../Home/Header';



export default class Contacts extends Component {
    TAG = 'contacts.components - '

    state = {
        currentContact: undefined,
    }

    handleContactSelect = user => {
        
        this.setState(() => ({
            currentContact: user
        }))
        console.log(`${this.TAG} handleContactSelect: ${user}`)
    };

    componentDidUpdate(prevProps) {
        {console.log(`${this.TAG} componentDidUpdate(): pros: ${this.props.contacts}`)}
        if (this.props.contacts !== prevProps.contacts) {
            this.setState((curState) => ({
                currentContact: this.props.contacts[0]
            }))
        }
    }



    render() {
        {console.log(`${this.TAG} Render()`)}
        {console.log(`${this.TAG} contacts: ${this.props.contacts}`)}
        {console.log(`${this.TAG} currentContact: ${this.state.currentContact}`)}
    

        const {contacts} = this.props;
        const {currentContact} = this.state;
        return (
            <ReactBootStrap.Container >
                <ReactBootStrap.Row >


                    <ReactBootStrap.Col sm={3}>
                        <br/>
                        <ListGroup 
                            selectedItem = {currentContact}
                            items={contacts}
                            onItemSelect={this.handleContactSelect}
                        />
                    </ReactBootStrap.Col>


                    <ReactBootStrap.Col sm={9}>
                    <br/>

                    {
                        currentContact ? 
                                (<ContactForm
                                    key = {currentContact._id}
                                    contact = {currentContact}
                                />) 
                            : 
                                'Select User for More Details'
                    }

                
                           

                    </ReactBootStrap.Col>

                </ReactBootStrap.Row>
            </ReactBootStrap.Container> 
        );
    }
}