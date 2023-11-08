import { Helmet } from "react-helmet";
import Category from "../Pages/Tab/Category";
import Banner from "./Banner";
import Groups from "./Groups";
import Location from "./Location";
import MailBox from "./MailBox";
import Success from "./Success";

const Home = () => {
  return (
    <div className="bg-sky-50">
      <Helmet> <title>JobBox || Home</title></Helmet>
      <Banner />
      <div className="flex justify-center items-center mt-10">
        <Category />
      </div>
      <Groups />
      <Success />
      <div>
        <Location />
      </div>
      <div>
        <MailBox />
      </div>
    </div>
  );
};

export default Home;
