import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import { Toaster } from "react-hot-toast";
import Footer from "../Shared/Footer";

import AOS from "aos";
import "aos/dist/aos.css"; 
AOS.init();

const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto overflow-x-hidden">
            <Header />
            <div className="mt-8">
            <Outlet />
            </div>
            <div className="mt-20">
                <Footer />
            </div>
            <Toaster />
        </div>
    );
};

export default MainLayout;