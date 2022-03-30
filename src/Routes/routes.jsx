import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Stock } from "../pages/stock/Stock";
import { Dishes } from "../pages/dishes/Dishes";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { NotFoundPage } from "../pages/notFoundPage/NotFoundPage";
import { LayoutPage } from "../pages/LayoutPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          //This component have the page structure with the html semantic and Styled CSS
          <LayoutPage {...props}>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/dishes" component={Dishes} />
              <Route path="/Stock" component={Stock} />
              <Route component={NotFoundPage} />
            </Switch>
          </LayoutPage>
        )}
      />
    </BrowserRouter>
  );
};

export default Routes;

//to dynamically mount the sidebar and drawer menu, all the options are listed here.

const SidebarItems = [
  {
    //on the sidebar menu, it has a react router component link. This is the link/href destination.
    route: `/`,
    //to support the dual language with the react-intl library, the FormattedText has a prop named messageId, wich will guard all the english and portuguese expressions
    messageId: `sidebar.dashboard`,
    //In case of a missing translation or a non-setted language, this will be the default message displayed. I chose they in english.
    defaultMessage: ` Welcome`,
    // A material UI incon name
    icon: `dashboard`,
  },
  {
    route: `/dishes`,
    messageId: `sidebar.dishUl`,
    defaultMessage: ` Dish values`,
    icon: `set_meal`,
  },
  {
    route: `/Stock`,
    messageId: `sidebar.stock`,
    defaultMessage: ` Stock`,
    icon: `kitchen`,
  },
];

export { SidebarItems };
