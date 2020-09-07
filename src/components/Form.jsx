import { Component } from 'react';
import Joi from 'joi';

class Form extends Component {
    state = { data:{}, errors:{} }
    validate = () => {
        const { error } = Joi.object(this.schema).validate(this.state.data);
        if(error) {
            const errors = {};
            for (let item of error.details) errors[item.path[0]] = item.message;
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

    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors });
        
    };
    render() { 
        return null;
    }
}
 
export default Form;