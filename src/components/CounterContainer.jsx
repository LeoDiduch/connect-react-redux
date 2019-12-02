import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
	counter: state
});

const mapDispatchToProps = dispatch => ({
  onAddOne: () => dispatch({ type: "ADD1" }),
  onRemoveOne: () => dispatch({ type: "REMOVE1" }),
  onAddTen: () => dispatch({ type: "ADD10" }),
  onRemoveTen: () => dispatch({ type: "REMOVE10" }),
  onReset: () => dispatch({ type: "RESET" })
});

const counterComponent = ({
  counter,
  onAddOne,
  onRemoveOne,
  onAddTen,
  onRemoveTen,
  onReset
}) => (
  <div>
    <p>{counter}</p>
    <button onClick={onAddOne}>Add</button>
    <button onClick={onRemoveOne}>Remove</button>
    <button onClick={onAddTen}>Add 10</button>
    <button onClick={onRemoveTen}>Remove 10</button>
    <button onClick={onReset}>Reset</button>
  </div>
);
export default connect(mapStateToProps, mapDispatchToProps)(counterComponent);