import HeaderPage from './header/HeaderPage';

const Layout = ({ children }: any) => {
  return (
    <>
      <HeaderPage />
      <main>{children}</main>
    </>
  );
};
export default Layout;
