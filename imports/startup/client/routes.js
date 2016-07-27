import React from 'react';
import { IndexRedirect, Router, Route, browserHistory} from 'react-router';
import App from '../../ui/components/App.jsx';
import Filter from '../../ui/pages/Filter.jsx';
import Decide from '../../ui/pages/Decide.jsx';
import Assign from '../../ui/pages/Assign.jsx';
import IntlProvider from 'react-intl';
import addLocaleData from 'react-intl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';


export const renderRoutes = () => (
  <IntlProvider locale={'en-US'}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/filter" />
        <Route path="filter" component={Filter}/>
        <Route path="decide" component={Decide}/>
        <Route path="assign" component={Assign}/>
      </Route>
    </Router>
  </IntlProvider>
);
