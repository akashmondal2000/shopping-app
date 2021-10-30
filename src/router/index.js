import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import Cart from "../pages/Cart";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component= {Dashboard} />
          <Route path="/details" exact component= {ProductDetailsPage} />
          <Route path="/cart" exact component= {Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
