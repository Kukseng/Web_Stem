
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import PropTypes from "prop-types"
const MainLayout = ({children}) => {
  return (
    <>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </>
  );
}
MainLayout.propTypes={
    children: PropTypes.node.isRequired,
}
export default MainLayout