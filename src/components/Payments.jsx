import React, { Component } from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import Joi from 'joi';

import Card from './Card';
import { addCard, deleteCard, getPaymentOptions } from '../services/payments';

class Payments extends Component {
    state = { 
        data: {
            cvc: '',
            expiry: '',
            name: '',
            number: '',
        },
        payments:{cards:[]},
        focus: '',
        errors:{},
        selectedpayment:{},
        isValid: false,
        toggleCard:false
    }

    componentDidMount() {
        const payments = getPaymentOptions();
        this.setState({ payments })
    }

    schema = {
        // id: Joi.string(),
        cvc: Joi.number().min(3).required().label("CVC"),
        expiry: Joi.string().min(4).max(7).required().label("EXPIRY"),
        name: Joi.string().required().label("NAME"),
        number: Joi.string().min(16).required().label("CARD NUMBER")
    }

    choosePayment = (card) => {
        if(card) {
            this.setState({ selectedpayment: card });
            const payment = {selectedpayment: { card:{ ...card} }};
            this.props.paymentby(payment);
        } else {
            this.setState({ selectedpayment:"cashondelivery" });
            const payment = {selectedpayment:"cashondelivery"};
            this.props.paymentby(payment);
        } 
    }
    
    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    validate = () => {
        const { error } = Joi.object(this.schema).validate(this.state.data);
        if(error) {
            const errors = {};
            for (let item of error.details) errors[item.path[0]] = item.message;
            console.log(errors)
            return errors;
        }else {
            return null
        }
    };
    
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = Joi.object({
            [name]: this.schema[name]
        });
        const { error } = schema.validate(obj);
        return error ? error.details[0].message : null;
    };
      
    handleInputChange = (e) => {
        const target = e.target;
        const data = {...this.state.data}
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(target);
        if (errorMessage) errors[target.name] = errorMessage;
        else delete errors[target.name];

        if (target.name === 'number') {
            data[target.name] = target.value.replace(/ /g, '');
            this.setState({ data, errors });
        }
        else if (target.name === 'expiry') {
            data[target.name] = target.value.replace(/ |\//g, '');
            this.setState({ data, errors });
        }
        else {
            data[target.name] = target.value
            this.setState({ data, errors });
        }
    }

    handleSubmit = () => {
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        
        addCard(this.state.data);
        if(this.props.paymentby) this.choosePayment(this.state.data);
        this.toggleClose();
    }

    handleEdit = (card) => {
        this.setState({
            toggleCard: true,
            isValid: true,
            errors: {},
            data: card
        });
    }

    handleDelete = (card) => {
        deleteCard(card);
    }

    isValidCallback(type, isValid) {
        this.setState({ isValid })
    }


    toggleOpen = () => {
        this.setState({ toggleCard: true })
    }

    toggleClose = () => {
        this.setState({
            toggleCard: false,
            errors: {},
            data: {
                cvc: '',
                expiry: '',
                focus: '',
                name: '',
                number: '',
            }
        });
    }

    render() {
        const { isSelect, isdelete } = this.props;
         const { data, payments, focus, toggleCard, errors, selectedpayment, isValid } = this.state;
        return (
            <div className="card">
                <div className="card-header h5 text-left">Payments</div>
                <div className="card-body text-left">
                    {payments.cards.length > 0 ?

                        payments.cards.map((card,index) => (
                        <div className="row mb-2 text-left" key={index}>
                            <div className="col-sm-1 text-center align-self-center">
                            
                            {selectedpayment === card ?
                            isSelect ? <button className="btn btn-success"> <i className="fa fa-check"></i></button> : null
                            :
                            isSelect ?  <button className="btn btn-light" onClick={() => this.choosePayment(card)}><i className="fa fa-check"></i></button> : null
                            }
                            </div>
                            <div className="col-sm-7 font-weight-bold font-italic">
                                <div>***{(card.number).substr(-4)}</div>
                                {/* <small>{card.expiry}</small> */}
                            </div>
                            <div className="col-sm-3">
                                {isdelete ? <button className="btn btn-danger float-right" ><i className="fa fa-trash" onClick={() => this.handleDelete(card)}></i></button>:null}
                                <button className="btn btn-primary float-right mr-2" onClick={() => this.handleEdit(card)} ><i className="fa fa-pencil"></i></button>
                                {/* onClick={() => handleEdit(card)} */}
                            </div>
                        </div>
                        ))
                        :
                        <h6 className="col-sm-12 text-center align-self-center">No saved cards</h6>
                        
                    }
                    {toggleCard ? 
                    
                        <Card 
                            data={data}
                            focus={focus}
                            errors={errors}
                            handleInputFocus={this.handleInputFocus}
                            handleInputChange={this.handleInputChange}
                            handleSubmit={this.handleSubmit}
                            isValidCallback={this.isValidCallback.bind(this)}
                            toggleClose={this.toggleClose}
                            isValid={isValid}
                        />
                        
                    :
                        
                        <div className="col-sm-12 mb-2 text-center">
                            <button className="btn btn-primary col-sm-3 " onClick={this.toggleOpen}>Add new card</button>
                        </div>
                    
                    }
                    {isSelect ?
                    <React.Fragment>
                        <h5 className="card-title">Other options</h5>
                        <div className="row mb-2 text-left">
                            <div className="col-sm-1 text-center align-self-center">
                                {selectedpayment === "cashondelivery" ?
                                <button className="btn btn-success"> <i className="fa fa-check"></i></button>
                                :
                                <button className="btn btn-light" onClick={() => this.choosePayment()}><i className="fa fa-check"></i></button>
                                }
                            </div>
                            <div className="col-sm-7 mt-1 font-weight-bold font-italic">
                                Cash on delivery
                            </div>
                        </div>
                    </React.Fragment>
                    :
                    null
                    }
                    
                </div>
            </div>
        );
    }
}

export default Payments;