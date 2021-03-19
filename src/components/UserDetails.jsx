import React from "react";
import { getUserDetails, logUser } from "../services/user";
import Form from "./Form";
import Joi from "joi";

class UserDetails extends Form {
  state = {
    data: {
      givenName: "",
      familyName: "",
      email: "",
    },
    errors: {},
    isEdit: false,
  };

  schema = {
    givenName: Joi.string().min(5).max(20).required().label("First Name"),
    familyName: Joi.string().min(5).max(20).required().label("Last Name"),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email Address"),
  };

  async componentDidMount() {
    const user = await getUserDetails();
    const data = {
      givenName: user.givenName,
      familyName: user.familyName,
      email: user.email,
    };
    this.setState({ data });
  }

  toggleOpen = () => {
    this.setState({ isEdit: true });
  };

  toggleClose = () => {
    this.setState({ isEdit: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    const user = logUser(this.state.data);
    this.toggleClose();
    this.setState({ data: user });
  };

  render() {
    const { data, isEdit, errors } = this.state;
    return (
      <div className="card text-left">
        <div className="card-header h5">Personal Information </div>
        <div className="card-body">
          <div className="row mb-2">
            <div className="col-sm-6">
              <div className="col-sm-12">
                <label>First Name</label>
                <input
                  type="text"
                  disabled={isEdit ? false : true}
                  className={
                    errors.first_name
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  id="first_name"
                  name="first_name"
                  value={data.givenName}
                  autoComplete="false"
                  placeholder=""
                  onChange={(e) => this.handleChange(e)}
                />
                {errors.first_name && (
                  <span className="help-block text-danger">
                    {errors.first_name}
                  </span>
                )}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="col-sm-12">
                <label>Last Name</label>
                <input
                  type="text"
                  disabled={isEdit ? false : true}
                  className={
                    errors.last_name
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  id="last_name"
                  name="last_name"
                  value={data.familyName}
                  autoComplete="false"
                  placeholder=""
                  onChange={(e) => this.handleChange(e)}
                />
                {errors.last_name && (
                  <span className="help-block text-danger">
                    {errors.last_name}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-6">
              <div className="col-sm-12">
                <label>Email Address</label>
                <input
                  type="text"
                  disabled={isEdit ? false : true}
                  className={
                    errors.email_address
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  id="email_address"
                  name="email_address"
                  value={data.email}
                  autoComplete="false"
                  placeholder=""
                  onChange={(e) => this.handleChange(e)}
                />
                {errors.email_address && (
                  <span className="help-block text-danger">
                    {errors.email_address}
                  </span>
                )}
              </div>
            </div>
          </div>
          {isEdit && (
            <div className="row">
              <div className="col-sm-6">
                <button
                  className="btn btn-primary btn-block"
                  onClick={(e) => this.handleSubmit(e)}
                  disabled={Object.keys(errors).length >= 0 ? false : true}
                >
                  Save
                </button>
              </div>
              <div className="col-sm-6">
                <button
                  className="btn btn-info btn-block"
                  onClick={() => this.toggleClose()}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          {!isEdit && (
            <div className="row justify-content-center">
              <div className="col-sm-3">
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => this.toggleOpen()}
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default UserDetails;
