import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../../../pages/HomePage/HomePage";
import routes from "../../../router/routes";
import Content from "./../content/Content";

const LayoutContainer = () => {
  return (
    <Content>
      <Switch>
        {routes.map((route) =>
          route.component ? (
            <Route
              key={route.path}
              exact={true}
              path={`${route.path}`}
              render={(props) => <route.component {...props} />}
            />
          ) : null
        )}
        <Redirect exact from="/" to="/home" />

        <Route component={HomePage} />
      </Switch>
    </Content>
  );
};

export default LayoutContainer;
