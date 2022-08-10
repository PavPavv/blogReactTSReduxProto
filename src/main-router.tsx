import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

//  logic
import { SERVER_PREFIX } from './fakeServer/fakeServer';
import { StoreState } from './store/rootReducer';
import * as authActions from './store/auth/actions';

//  ui
import AuthPage from './pages/AuthPage';
import Layout from './components/ui/Layout';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import FormPage from './pages/FormPage';
import TodosPage from './pages/TodosPage';
import ChartPage from './pages/ChartPage';
import FeaturesPage from './pages/FeaturesPage';
import NotFoundPage from './pages/NotFoundPage';
import Welcome from './components/ui/Welcome';
import CookieMsg from './components/ui/CookieMsg';

const MainRouter = ():JSX.Element => {
  const [start, setStart] = useState(false);
  const dispatch = useDispatch();
  const initialized = useSelector((state: StoreState) => state.auth.initialized);
  const token = localStorage.getItem(`${SERVER_PREFIX}_token`);

  useEffect(() => {
    if (initialized) {
      setStart(true);
      setTimeout(() => {
        setStart(false);
        dispatch(authActions.authInitialized());
      }, 1600);
    }
  }, [dispatch, initialized, token]);

  let routes: JSX.Element = (
    <Switch>
      <Route path="/login" exact component={AuthPage} />
      <Route path="/" exact component={BlogPage} />
      <Redirect to="/" />
    </Switch>
  );

  if (token) {
    routes = (
      <>
        <Layout>
          <Switch>
            <Route path="/" exact component={BlogPage} />
            <Route path="/blog/:aticleId" exact component={ArticlePage} />
            <Route path="/todos" exact component={TodosPage} />
            <Route path="/form" exact component={FormPage} />
            <Route path="/chart" exact component={ChartPage} />
            <Route path="/features" exact component={FeaturesPage} />
            <Route component={NotFoundPage} path="*" />
          </Switch>
        </Layout>
        <CookieMsg />
      </>
    );
  }

  return (
    <>
      {start ? <Welcome /> : routes}
    </>
  )
};

export default withRouter(MainRouter);