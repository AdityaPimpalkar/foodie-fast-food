import React from 'react';

const CardForm = ({ errors, handleInputChange, handleInputFocus }) => {
    return (
        <>  
        <div className="col-sm-9 mb-3">
            <input
                type="tel" 
                className={errors.number ? "form-control is-invalid": "form-control"} 
                onKeyUp={(e) => handleInputChange(e)} 
                onFocus={(e) => handleInputFocus(e)} 
                id="number" 
                name="number"
                autoComplete="false" 
                maxLength="19"
                placeholder="Card Number" 
            />
        </div>
        <div className="col-sm-9 mb-3">
            <input
                type="text" 
                className={errors.name ? "form-control is-invalid": "form-control"} 
                onKeyUp={(e) => handleInputChange(e)} 
                onFocus={(e) => handleInputFocus(e)} 
                id="name" 
                name="name" 
                autoComplete="false" 
                placeholder="Name" 
            />
        </div>
        <div className="col">
            <div className="row">
            <div className="col-sm-5">
                <input
                    type="tel" 
                    className={errors.expiry ? "form-control is-invalid": "form-control"} 
                    onKeyUp={(e) => handleInputChange(e)} 
                    onFocus={(e) => handleInputFocus(e)} 
                    id="expiry" 
                    name="expiry" 
                    autoComplete="false" 
                    placeholder="Valid Thru" 
                />
            </div>
            <div className="col-sm-3">
                <input
                    type="tel" 
                    className={errors.cvc ? "form-control is-invalid": "form-control"} 
                    onKeyUp={(e) => handleInputChange(e)} 
                    onFocus={(e) => handleInputFocus(e)} 
                    id="cvc" 
                    name="cvc" 
                    autoComplete="false" 
                    placeholder="CVC" 
                />
            </div>
            </div>
        </div>
        </>
    );
}
 
export default CardForm;
