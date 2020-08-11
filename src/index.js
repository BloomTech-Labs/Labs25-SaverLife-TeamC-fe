// import 'antd/dist/antd.less';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';

import { NotFoundPage } from './components/pages/NotFound';
import { LoginPage } from './components/pages/Login';
import { HomePage } from './components/pages/Home';
import { config } from './utils/oktaConfig';
import { LoadingComponent } from './components/common';
import { CategorizedSpending } from './components/pages/CategorizedSpending';
import { PredictiveBudget } from './components/pages/PredictiveBudget';
import { Profile } from './components/pages/Profile';
import { Progress } from './components/pages/Progress';
import { Transactions } from './components/pages/Transactions';
import { OnboardingFlow } from './components/pages/UserOnboarding';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <Security {...config} onAuthRequired={authHandler}>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={OnboardingFlow} />
        <Route path="/implicit/callback" component={LoginCallback} />
        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <SecureRoute
          path="/"
          exact
          component={() => <HomePage LoadingComponent={LoadingComponent} />}
        />
        <SecureRoute
          path="/categories"
          exact
          component={() => <CategorizedSpending />}
        />

        <SecureRoute
          path="/budget"
          exact
          component={() => <PredictiveBudget />}
        />
        <SecureRoute path="/profile" exact component={() => <Profile />} />
        <SecureRoute path="/progress" exact component={() => <Progress />} />
        <SecureRoute
          path="/transactions"
          exact
          component={() => <Transactions />}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Security>
  );
}
