import { Routes, Route, useParams } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import FoodMenu from "./pages/FoodMenu";
import { Provider } from 'react-redux';
import store from "./apiComonents/store";
import AboutFood from "./pages/AboutFood";
import OrderCheckout from "./pages/OrderCheckout";
import PageReviews from "./pages/Page Reviews";



import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/foodMeno66/:dataType" element={<FoodMenuWrapper />} />
            <Route path="/aboutfood/:itemCategory/:itemId" element={<AboutFood />} />
            <Route path="/ordercheckout" element={<OrderCheckout />} />
            <Route path="/pagereviews" element={<PageReviews />} />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}


function FoodMenuWrapper() {
  const { dataType } = useParams();
  
  return (
  <>
  <FoodMenu/>
  </>
  );
}

export default App;
