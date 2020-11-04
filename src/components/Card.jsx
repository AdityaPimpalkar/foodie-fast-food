import React, { Component } from 'react';
import CardForm from './CardForm';
import Cards from 'react-credit-cards';
import Payment from 'payment';

class Card extends Component {
    state = {  }
    componentDidMount() {
        Payment.formatCardNumber(document.querySelector('[name="number"]'));
        Payment.formatCardExpiry(document.querySelector('[name="expiry"]'));
        Payment.formatCardCVC(document.querySelector('[name="cvc"]'));
    }
    render() {
        const { data, focus, errors, handleInputChange, handleInputFocus, isValidCallback, handleSubmit, toggleClose, isValid } = this.props 
        return (  
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <Cards
                                cvc={data.cvc}
                                expiry={data.expiry}
                                focused={focus}
                                name={data.name}
                                number={data.number}
                                callback={(type, isValid) => isValidCallback(type, isValid)}
                            />
                        </div>
                        <div className="col-sm-6 mt-3">
                            <CardForm
                                data={data} 
                                errors={errors}
                                handleInputChange={(e) => handleInputChange(e)}
                                handleInputFocus={(e) => handleInputFocus(e)}
                            />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-6">
                            <button className="btn btn-primary btn-block" onClick={(e) => handleSubmit(e)} disabled={isValid === true ? false : true}>
                                Save and choose 
                            </button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-primary btn-info btn-block" onClick={() => toggleClose()}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Card;

