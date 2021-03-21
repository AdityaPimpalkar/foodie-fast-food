import React from "react";

const UserAddress = ({
  addressData,
  selectedAddress,
  handleEdit,
  handleDelete,
  isSelect,
  isDelete,
}) => {
  return addressData.length > 0 ? (
    addressData.map((address) => (
      <div className="row mb-2 text-left" key={address._id}>
        {isSelect ? (
          <div className="col-sm-1 text-center align-self-center">
            {address.isdefault ? (
              <button className="btn btn-success">
                {" "}
                <i className="fa fa-check"></i>
              </button>
            ) : (
              <button
                className="btn btn-light"
                onClick={() => selectedAddress(address)}
              >
                <i className="fa fa-check"></i>
              </button>
            )}
          </div>
        ) : (
          <div className="col-sm-1 text-center align-self-center"></div>
        )}
        <div className="col-sm-7 font-italic">
          {address.addressLine1} {address.addressLine2} {address.landmark}{" "}
          {address.city} {address.pincode}
        </div>
        <div className="col-sm-3">
          {isDelete ? (
            <button
              className="btn btn-danger float-right"
              onClick={() => handleDelete(address)}
            >
              <i className="fa fa-trash"></i>
            </button>
          ) : null}
          <button
            className="btn btn-primary float-right mr-2"
            onClick={() => handleEdit(address)}
          >
            <i className="fa fa-pencil"></i>
          </button>
        </div>
      </div>
    ))
  ) : (
    <h6 className="col-sm-12 text-center align-self-center">
      No saved address
    </h6>
  );
};

export default UserAddress;
