import { AiOutlineFileSearch, AiOutlineSearch } from "react-icons/ai";
import { FcComboChart } from "react-icons/fc";
import { SiCodingninjas, SiTaichigraphics } from "react-icons/si";

const Banner = () => {
  return (
    <div className="h-[75vh] bg-sky-800 text-white text-center rounded-md">
      <div className="p-20">
        <h1 className="text-3xl font-bold">
          The #1 <span className="text-green-400">Job Board for</span>
        </h1>
        <p className="text-3xl font-bold">Hiring or Find Your Next Tob</p>
        <p className="w-4/6 mx-auto mt-3">
          Each month, more than 3 million job seekers turn to website in their search for work,
          making over 140,000 applications every single day
        </p>
        <div className="flex items-center justify-between mt-10 gap-3 p-4 bg-white text-black rounded-md border w-8/12 mx-auto">
          <div>
            <select className="input">
              <option>Industry</option>
              <option>Web Development</option>
              <option>Digital Marketing</option>
              <option>Graphics Design</option>
            </select>
          </div>
          <div>
            <select className="input">
              <option>Location</option>
              <option>Industry</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Japan</option>
              <option>India</option>
              <option>Bangladesh</option>
            </select>
          </div>
          <div className="flex items-center">
            <input className="w-full p-1" type="search" placeholder="Your keyword.." />
            <button className="btn btn-sm text-white text-sm bg-sky-800">
              <AiOutlineSearch />
              Search
            </button>
          </div>
        </div>
        <p className="mt-5 text-sm underline flex gap-1 justify-center hover:cursor-pointer">
          <span className="font-semibold">Popular Searches:</span>
          <span>Designer</span> <span>Web</span> <span>IOS</span> <span>Developer</span>{" "}
          <span>PHP</span> <span>Senior</span> <span>Engineer</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
          <div className="flex items-center gap-3 p-2 rounded-md bg-white text-black">
            <div>
              <AiOutlineFileSearch className="font-bold text-5xl text-blue-400" />
            </div>
            <div>
              <h1 className="text-xl font-medium">Marketing & Sale</h1>
              <p className="text-sm text-gray-500">1200 Jobs Available</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-md bg-white text-black">
            <div>
              <FcComboChart className="font-bold text-5xl" />
            </div>
            <div>
              <h1 className="text-xl font-medium">Management</h1>
              <p className="text-sm text-gray-500">1500 Jobs Available</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-md bg-white text-black">
            <div>
              <SiCodingninjas className="font-bold text-4xl" />
            </div>
            <div>
              <h1 className="text-xl font-medium">Web Development</h1>
              <p className="text-sm text-gray-500">2000 Jobs Available</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-md bg-white text-black">
            <div>
              <SiTaichigraphics className="font-bold text-blue-500 text-5xl" />
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
