import React from 'react';
import PropTypes from 'prop-types';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleForm = this.handleForm.bind(this)
        
    }
    handleForm(e){
        e.preventDefault();
        alert('Something was submited' + this.state.value)
    }
    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div>
                {this.state.value}
            <form onSubmit={this.handleForm}>

                <label>Some text</label>
                <input type = "text" onChange = {this.handleChange}/>

            </form>
            </div>
        );
    }
}


Forms.propTypes = {
    
};

export default Forms
