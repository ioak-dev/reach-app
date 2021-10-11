import React from 'react';

import { Route } from 'react-router-dom';
import './RouterView.scss';
import OaLogin from '../Auth/OaLogin';
import OakRoute from '../Auth/OakRoute';
import Unauthorized from '../Auth/Unauthorized';
import OakRouteGraph from '../Auth/OakRouteGraph';
import Email from '../Login/Email';
import Home from '../Home';
import ElementsDemo from '../ElementsDemo';

interface Props {
  cookies: any;
}

const RouterView = (props: Props) => {
  return (
    <div className="router-view">
      <Route
        path="/login"
        render={(propsLocal) => (
          <OakRoute {...propsLocal} {...props} component={OaLogin} />
        )}
      />
      <Route
        path="/unauthorized"
        render={(propsLocal) => (
          <OakRoute
            {...propsLocal}
            {...props}
            component={Unauthorized}
            middleware={['isAuthenticated']}
          />
        )}
      />
      <Route
        path="/"
        exact
        render={(propsLocal) => (
          <OakRouteGraph {...propsLocal} {...props} component={Home} />
        )}
      />
      <Route
        path="/:space/login/email"
        render={(propsLocal) => (
          <OakRouteGraph
            {...propsLocal}
            {...props}
            component={Email}
            middleware={['readAuthentication']}
          />
        )}
      />
      <Route
        path="/home"
        exact
        render={(propsLocal) => (
          <OakRouteGraph
            {...propsLocal}
            {...props}
            component={Home}
            middleware={['readAuthentication']}
          />
        )}
      />{' '}
      <Route
        path="/reach"
        render={(propsLocal) => (
          <OakRouteGraph
            {...propsLocal}
            {...props}
            component={ElementsDemo}
            middleware={['readAuthentication']}
          />
        )}
      />
    </div>
  );
};

export default RouterView;
