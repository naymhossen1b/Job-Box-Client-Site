import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import { Toaster } from "react-hot-toast";
import Footer from "../Shared/Footer";


const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
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