import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";

// components
import LoginPage from "../pages/LoginPage";
import RegisterScreen from "../pages/RegisterScreen";
import ListChecklist from "../pages/ListChecklist";
import FormChecklist from "../pages/FormChecklist";
import ListChecklistItem from "../pages/ListChecklistItem";
import FormChecklistItem from "../pages/FormChecklist";

function Base() {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterScreen />
          </Route>
          <Route exact path="/listchecklist">
            <ListChecklist />
          </Route>
          <Route exact path="/formchecklist">
            <FormChecklist />
          </Route>
          <Route exact path="/listchecklistitem">
            <ListChecklistItem />
          </Route>
          <Route exact path="/formchecklistitem">
            <FormChecklistItem />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Base;
