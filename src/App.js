import React from "react";
import { Provider } from "react-redux";
import store from "./store/configureStore.js";
import Header from "./components/layout/header/header";
import MarketInfo from "./pages/market-info/market-info";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <MarketInfo />
      </div>
    </Provider>
  );
}

export default App;
