import React from 'react';

const UserAddress = ({addressData, selectedAddress, handleEdit, isSelect, isdelete}) => {
    return (
        addressData.length > 0 ?

        addressData.map((address) => (
            <div className="row mb-2 text-left" key={address.id}>
                {isSelect ?
                <div className="col-sm-1 text-center align-self-center">
                    {address.isdefault ?
                    <button className="btn btn-success"> <i className="fa fa-check"></i></button>
                    :
                    <button className="btn btn-light" onClick={() => selectedAddress(address)}><i className="fa fa-check"></i></button>
                    }
                </div>
                :
                <div className="col-sm-1 text-center align-self-center">
                    
                </div>
                }
                <div className="col-sm-7 font-weight-bold font-italic">
                    {address.addressLine1} {address.addressLine2} {address.landmark} {address.city}
                </div>
                <div className="col-sm-3">
                    {isdelete ? <button className="btn btn-danger float-right" ><i className="fa fa-trash"></i></button>:null}
                    <button className="btn btn-primary float-right mr-2" onClick={() => handleEdit(address)}><i className="fa fa-pencil"></i></button>
                </div>
            </div>
        ))
        :
        <h6 className="col-sm-12 text-center align-self-center">No saved address</h6>
    );
}
 
export default UserAddress;