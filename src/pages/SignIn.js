import React, {Component} from "react";
import "../stylesheet/SignIn.css";

class SignIn extends Component {

    state = {
        name: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return(
            <div className={`login-container`}>
                <div className={`login-header`}>
                    BLINKER
                </div>
                <div className={`login-box`}>
                    <form className={`login-form`} >
                        <h3> PLEASE SIGNIN TO START THE GAME</h3>
                        <input
                            className={`txtb`}
                            placeholder={`Username`}
                            type={`text`}
                            value={this.state.name}
                            onChange={this.handleChange}
                            name={`name`}
                        />
                        <input
                            className={`txtb`}
                            placeholder={`Password`}
                            type={`password`}
                            value={this.state.password}
                            onChange={this.handleChange}
                            name={`password`}
                        />
                        <input
                            id={`login-btn`}
                            className={`submit-btn txtb`}
                            type={`submit`}
                            name={`signin`}
                            value={``}
                        />
                        <input
                            id={`signup-btn`}
                            className={`submit-btn txtb`}
                            type={`submit`}
                            name={`signUp`}
                            value={``}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;

