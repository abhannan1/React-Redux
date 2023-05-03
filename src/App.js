import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart_items";

//redux stuff
import { createStore } from "redux";
import reducerFn from "./reducer";
import { Provider } from "react-redux";
// redux stuff

//initial store
const initialStore = {
  cart:cartItems,
  total:10,
  amount:11
}

const store = createStore(reducerFn, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  // cart setup

  return (
    <Provider store={store}>
    <main>
      <Navbar  />
      <CartContainer  />
    </main>
    </Provider>
  );
}

export default App;
