import { AiOutlineFileSearch, AiOutlineSearch } from "react-icons/ai";
import { FcComboChart } from "react-icons/fc";
import { SiCodingninjas, SiTaichigraphics } from "react-icons/si";

const Banner = () => {
  return (
    <div className=" bg-sky-800 text-white text-center rounded-md">
      <div className="md:p-20 p-1">
        <h1 className="text-3xl font-bold">
          The #1 <span className="text-green-400">Job Board for</span>
        </h1>
        <p className="text-3xl font-bold">Hiring or Find Your Next Tob</p>
        <p className="w-4/6 mx-auto mt-3">
          Each month, more than 3 million job seekers turn to website in their search for work,
          making over 140,000 applications every single day.
        </p>
        <div className="md:flex grid grid-cols-1 md:w-full  items-center justify-between mt-10 gap-3 md:p-4 md:bg-white text-black rounded-md lg:w-8/12 mx-auto">
          <div>
            <select className="input ">
              <option>Industry</option>
              <option>Web Development</option>
              <option>Digital Marketing</option>
              <option>Graphics Design</option>
            </select>
          </div>
          <div>
            <select className="input ">
              <option>Location</option>
              <option>Industry</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Japan</option>
              <option>India</option>
              <option>Bangladesh</option>
            </select>
          </div>
          <div className="flex justify-center gap-2 items-center">
            <input
              className="md:w-full w-/12 rounded-md p-2 "
              type="search"
              placeholder="Your keyword.."
            />
            <button className="border p-2 rounded-md gap-2 flex items-center text-white text-sm bg-sky-800">
              <AiOutlineSearch />
              Search
            </button>
          </div>
        </div>
        <p className="mt-5 text-sm underline md:flex gap-1 justify-center hover:cursor-pointer">
          <span className="font-semibold">Popular Searches:</span>
          <span>Designer</span> <span>Web</span> <span>IOS</span> <span>Developer</span>{" "}
          <span>PHP</span> <span>Senior</span> <span>Engineer</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div
            data-aos="flip-up"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-top"
            className="lg:flex md:grid items-center text-center gap-3 p-2  rounded-md bg-white text-black"
          >
            <div>
              <AiOutlineFileSearch className="font-bold w-11/12 mx-auto text-5xl text-blue-400" />
            </div>
            <div>
              <h1 className="text-xl font-medium">Marketing & Sale</h1>
              <p className="text-sm text-gray-500">1200 Jobs Available</p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-top"
            className="lg:flex md:grid text-center items-center gap-3 p-2 md:p-0 lg:p-2 rounded-md bg-white text-black"
          >
            <div>
              <FcComboChart className="font-bold w-11/12 mx-auto  text-5xl" />
            </div>
            <div>
              <h1 className="text-xl font-medium">Management</h1>
              <p className="text-sm text-gray-500">1500 Jobs Available</p>
            </div>
          </div>
          <div
            data-aos="zoom-out"
            data-aos-offset="300"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-top"
            className="lg:flex md:grid text-center items-center gap-3 p-2 md:p-0 lg:p-2 rounded-md bg-white text-black"
          >
            <div>
              <SiCodingninjas className="font-bold w-11/12 mx-auto text-4xl" />
            </div>
            <div>
              <h1 className="text-xl font-medium">Web Development</h1>
              <p className="text-sm text-gray-500">2000 Jobs Available</p>
            </div>
          </div>
          <div
           data-aos="flip-down"
           data-aos-offset="300"
           data-aos-delay="50"
           data-aos-duration="1000"
           data-aos-mirror="true"
           data-aos-once="false"
           data-aos-anchor-placement="top-top"
          className="lg:flex md:grid items-center gap-3 p-2 rounded-md bg-white text-black">
            <div>
              <SiTaichigraphics className="font-bold w-11/12 mx-auto text-blue-500 text-5xl" />
            </div>
            <div>
              <h1 className="text-xl font-medium">Graphics Design</h1>
              <p className="text-sm text-gray-500">1600 Jobs Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
