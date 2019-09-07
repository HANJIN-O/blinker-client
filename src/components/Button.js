import React, { Component } from "react";
import "../stylesheet/Button.css";
import { Redirect } from "react-router";


class Button extends Component {

  constructor(props) {
    super(props);
    this.state={
      btnRender: ''
    }
  }

  btnClick = e => {
    e.preventDefault();
    if( ['SIGN IN', 'SIGN UP'].includes(this.props.btnType)){
      this.props.post(this.props.username, this.props.password);

    }else{
      this.setState({
        btnRender : this.props.btnType
      })
    }

  };

  render() {

    let content = '';

    if( this.state.btnRender === 'START'){
      return <Redirect to={`/game/flappyBird`} />
    } else if(this.state.btnRender === 'CREATE AN ACCOUNT' ){
      return <Redirect to={`/signup`} />
    }else {
      content = (
        <div>
          <input
            id={this.props.id}
            type={this.props.type}
            className={this.props.class}
            name={this.props.name}
            value={this.props.value}
            onClick={this.btnClick}
          />
        </div>
      );
    }


    return (
      <div>
        {content}
      </div>
    );

  }
}

export default Button;

