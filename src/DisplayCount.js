import React from "react";
import { connect } from "react-redux";

function DisplayCount(props) {
  return <h4> Count : {props.count}</h4>;
}

const mapStateToProps = (state) => ({
  ...state
});

export default connect(mapStateToProps)(DisplayCount);
