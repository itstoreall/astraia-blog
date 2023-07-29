import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = ({ children }: { children: any }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
