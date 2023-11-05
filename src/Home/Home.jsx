import Category from "../Pages/Tab/Category";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="flex justify-center items-center mt-10">
                <Category />
            </div>
        </div>
    );
};

export default Home;