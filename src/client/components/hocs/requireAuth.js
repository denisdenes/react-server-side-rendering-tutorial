import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Redirect }         from "react-router-dom";

export default (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />;
        case null:
          return <div>Loading</div>;
        default:
          return <ChildComponent {...this.props} />;
        //  {...this.props} makes sure that all props that are passed to
        // the HO component, are forwarded to the ChildComponent as well
      }
    }
  }

  function mapStateToProps({ auth }) {
    return { auth };
  }

  return connect(mapStateToProps)(RequireAuth);
};
