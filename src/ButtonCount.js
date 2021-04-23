import React from "react";
import { connect } from "react-redux";
import {
  incrementAction,
  decrementAction,
  resetAction
} from "./actions/counterAction";

function ButtonCount(props) {
  return (
    <React.Fragment>
      <button onClick={() => props.incrementAction(props.count)}>
        Increment
      </button>
      <button onClick={() => props.decrementAction(props.count)}>
        Decrement
      </button>
      <button onClick={() => props.resetAction(props.count)}>Reset</button>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  ...state
});

const mapDispatchToProps = (dispatch) => ({
  incrementAction: (payload) => dispatch(incrementAction(payload)),
  decrementAction: (payload) => dispatch(decrementAction(payload)),
  resetAction: (payload) => dispatch(resetAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCount);
