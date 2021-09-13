import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import Layout from './components/ui/Layout';
import BlogPage from './pages/BlogPage';
import FormPage from './pages/FormPage';
import TodosPage from './pages/TodosPage';
import NotFoundPage from './pages/NotFoundPage';
import { SERVER_PREFIX } from './fakeServer/fakeServer';

const MainRouter = ():JSX.Element => {
  const token = localStorage.getItem(`${SERVER_PREFIX}_token`);

  let routes: JSX.Element = (
    <Switch>
      <Route path="/login" exact component={AuthPage} />
      <Route path="/" exact component={BlogPage} />
      <Redirect to="/" />
    </Switch>
  );

  if (token) {
    routes = (
      <Layout>
        <Switch>
          <Route path="/" exact component={BlogPage} />
          <Route path="/todos" exact component={TodosPage} />
          <Route path="/form" exact component={FormPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    );
  }

  return (
    <>
      {routes}
    </>
  )
};

export default withRouter(MainRouter);