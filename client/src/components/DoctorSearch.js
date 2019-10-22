import React, { Component } from 'react';
import { connect } from 'react-redux';

class DoctorSearch extends Component {

    componentDidMount() { 
        
    }

    handleOnSubmit = () => {
 
    }

    handleOnChange = event => {

    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleOnSubmit}>
                {/* <input 
                    type="text"  
                    onChange={this.handleOnChange}
                    name="sex"
                    value={this.state.sex}
                />
                <input 
                    type="text"  
                    onChange={this.handleOnChange}
                    name="birthdayYear"
                    value={this.state.birthdayYear}
                /> */}
                
            </form>
                
            </div>
        )
    }
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}

export default connect(mapStateToProps)(DoctorSearch); 