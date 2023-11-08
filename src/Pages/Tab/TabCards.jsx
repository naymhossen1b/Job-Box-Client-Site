/* eslint-disable react/prop-types */


import { Link } from "react-router-dom";

const TabCards = ({ jobs }) => {
  const { job_title, deadline, minimum_price, maximum_price, short_description, _id } = jobs || {};

  return (
    <div>
      <div className="p-5 h-60 rounded-md bg-sky-50 shadow-md border"
      data-aos="zoom-in"
      data-aos-offset="300"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
      >
        <h1 className="text-2xl font-bold">{job_title.slice(0, 20)}</h1>
        <p className="font-medium mt-3">{short_description.slice(0,40)}</p>
        <p className="font-bold mt-1">
          <span>Deadline: </span>
          {deadline}
        </p>
        <div className="flex items-center mt-8 justify-between">
         <div>
         <p className=" font-bold text-sky-500" ><span className=" text-gray-600 underline">Maximum price :</span> ${maximum_price}</p>
          <p className=" font-bold text-sky-500"><span className=" text-gray-600 underline">Minimum price :</span> ${minimum_price}</p>
         </div>
          <Link to={`/jobDetails/${_id}`}>
            <button className="btn bg-sky-600 text-white font-bold hover:bg-green-800">
              Bid now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabCards;
