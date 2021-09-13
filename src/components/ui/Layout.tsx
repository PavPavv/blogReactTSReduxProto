import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

