import React from "react";
import { Provider } from "react-redux";

import Home from "./core/components/Home";
import store from "./state/init";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
