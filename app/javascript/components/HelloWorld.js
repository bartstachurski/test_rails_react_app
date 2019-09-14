import React from "react";
import PropTypes from "prop-types";
class HelloWorld extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Greeting: {this.props.greeting}</p>
        <p>Message: {this.props.message}</p>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld;
