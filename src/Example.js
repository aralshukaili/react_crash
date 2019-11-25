import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Example(props) {
  const name = useSelector(state => state.name);

  const dispatch = useDispatch();

  const changeToMaryamAction = { type: "CHANGE_NAME", payload: "Maryam" };

  return (
    <div>
      <p>Hello, my name is {name}</p>
      <button onClick={() => dispatch(changeToMaryamAction)}>
        Change Name
      </button>
    </div>
  );
}
