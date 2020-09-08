import React, { Component } from 'react';

class Payments extends Component {
    state = { 
        data:{},
        errors:{},
        selectedpayment:{},
        toggleCard:false
    }

    choosePayment = (card) => {
        if(card) this.setState({ selectedpayment:card })
        else this.setState({ selectedpayment:"cashondelivery" })
    }

    render() {
        const { payments, isdelete } = this.props;
         const { data, toggleAddress, errors,selectedpayment } = this.state;
        return (
            <div className="card">
                <div className="card-header h5 text-left">Payments</div>
                <div className="card-body text-left">
                    <h5 className="card-title">My cards</h5>
                   
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-md-6"> <span>CREDIT/DEBIT CARD PAYMENT</span> </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label for="cc-number" class="control-label">CARD NUMBER</label>
                                <input id="cc-number" type="tel" class="input-lg form-control cc-number" autocomplete="cc-number" placeholder="•••• •••• •••• ••••" />
                            </div>
                            <div class="row">
                            <div class="col-md-6">
                                <div class="form-group"> <label for="cc-exp" class="control-label">CARD EXPIRY</label> <input id="cc-exp" type="tel" class="input-lg form-control cc-exp" autocomplete="cc-exp" placeholder="•• / ••" /> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group"> <label for="cc-cvc" class="control-label">CARD CVC</label> <input id="cc-cvc" type="tel" class="input-lg form-control cc-cvc" autocomplete="off" placeholder="••••" /> </div>
                            </div>
                        </div>
                        <div class="form-group"> <label for="numeric" class="control-label">CARD HOLDER NAME</label> <input type="text" class="input-lg form-control" /> </div>
                        <div class="form-group"> <input value="MAKE PAYMENT" type="button" class="btn btn-success"/> </div>
                        </div>
                    </div>
                        
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