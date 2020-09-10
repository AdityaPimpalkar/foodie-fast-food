import React, { Component } from 'react';
import 'react-credit-cards/es/styles-compiled.css';


import Card from './Card';

class Payments extends Component {
    state = { 
        data: {
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
        },
        errors:{},
        selectedpayment:{},
        isValid: false,
        toggleCard:false
    }

    choosePayment = (card) => {
        if(card) this.setState({ selectedpayment: card })
        else this.setState({ selectedpayment:"cashondelivery" })
    }
    
    handleInputFocus = (e) => {
        const data = {...this.state.data}
        data.focus = e.target.name;
        this.setState({ data });
    }
      
    handleInputChange = (e) => {
        const target = e.target;
        const data = {...this.state.data}
        if (target.name === 'number') {
            data[target.name] = target.value.replace(/ /g, '');
            this.setState({ data });
        }
        else if (target.name === 'expiry') {
            data[target.name] = target.value.replace(/ |\//g, '');
            this.setState({ data });
        }
        else {
            data[target.name] = target.value
            this.setState({ data });
        }
    }

    handleSubmit = () => {

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
        const { payments, isdelete } = this.props;
         const { data, toggleCard, errors, selectedpayment, isValid } = this.state;
        return (
            <div className="card">
                <div className="card-header h5 text-left">Payments</div>
                <div className="card-body text-left">
                    <h5 className="card-title">My cards</h5>
                    {payments.cards.length > 0 ?

                        payments.cards.map((card,index) => (
                        <div className="row mb-2 text-left" key={index}>
                            <div className="col-sm-1 text-center align-self-center">
                            
                            {selectedpayment === card ?
                            <button className="btn btn-success"> <i className="fa fa-check"></i></button>
                            :
                            <button className="btn btn-light" onClick={() => this.choosePayment(card)}><i className="fa fa-check"></i></button>
                            }
                            </div>
                            <div className="col-sm-7 font-weight-bold font-italic">
                                <div>{card.number}</div>
                                <small>{card.expiry}</small>
                            </div>
                            <div className="col-sm-3">
                                {isdelete ? <button className="btn btn-danger float-right" ><i className="fa fa-trash"></i></button>:null}
                                <button className="btn btn-primary float-right mr-2" ><i className="fa fa-pencil"></i></button>
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
                </div>
            </div>
        );
    }
}

export default Payments;