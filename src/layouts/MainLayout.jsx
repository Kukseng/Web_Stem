import Footer from "../components/footer/Footer";
import PropTypes from "prop-types";
import Stickynav from "../components/layout/navbar/Stickynav";
import MainNavbar from "../components/layout/navbar/MainNavbar";

// import { Slider } from "@material-tailwind/react";
// import Banner from "../components/card/banner";



const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen ">
     
      <header className="sticky top-0 left-0 right-0 z-50 font-suwan">
        <Stickynav />
     <MainNavbar/>
      </header>

      
      <main className="relative pt-[navbar-height] ">
        {/* This div ensures content starts below the fixed navbar */}
        <div className="relative font-suwan">
          {children}
        </div>
        
        <div className="h-[900px]">
          vlollr
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;