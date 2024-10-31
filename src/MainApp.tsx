import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ProductItem from "./ProductItem";
import CartPage from "./CartPage";
import NikitaHomePage from "./nikita/HomePage";
import PoojaHomePage from './pooja/HomePage';
import SnehaHomePage from "./sneha/HomePage"
import NarendraPaymentPage from "./Narendra-AboutUs/Narendra-AboutUs";
import KeerthanaHomePage from "./Keerthana/HomePage";
import KeerthanaPaymentPage from "./Keerthana-PaymentPage/PaymentPage"

const MainApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/product/:id' element={<ProductItem />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path="nikita/homepage" element={<NikitaHomePage />} />
            <Route path="pooja/homepage" element={<PoojaHomePage />} />
            <Route path="sneha/homepage" element={<SnehaHomePage/>} />
            <Route path="keerthana/homepage" element={<KeerthanaHomePage/>} />
            <Route path="narendra/paymentpage" element={<NarendraPaymentPage/>} />
            <Route path="keerthana/paymentpage" element={<KeerthanaPaymentPage/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default MainApp;

