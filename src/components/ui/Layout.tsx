import { makeStyles, Theme } from "@material-ui/core/styles";

//  ui
import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    maxWidth: '70%',
    minHeight: 'calc(100vh - 100px)',
    margin: '0 auto',
    padding: '70px 20px 20px 20px',
  },
  main: {
    width: '100%',
  },
}));

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <div className={classes.root}>
        <main className={classes.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

