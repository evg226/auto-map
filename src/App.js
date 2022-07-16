import { Provider } from "react-redux";
import { MapOrders } from "./components/MapOrders";
import { ViewOrders } from "./components/ViewOrders";
import { store } from "./store"

function App() {
  return (
    <Provider store={store}>

      <ViewOrders />


    </Provider>
  );
}

export default App;
