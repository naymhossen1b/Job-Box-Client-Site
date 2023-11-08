// import { json, useLoaderData } from "react-router-dom";
import BidsCard from "./BidsCard";
import Sliders from "../../Shared/Sliders";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const MyBids = () => {
  const { user } = useContext(AuthContext);

  const [postedJobs, setPostedJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/userBids?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPostedJobs(data);
      });
  }, []);

  return (
    <div>
      <Sliders />
      <div className="mt-8">
        <h1 className="text-2xl font-bold underline text-sky-800">Your All Confirmed Job Posts:</h1>
      </div>
      <div className="mt-8">
        {postedJobs?.map((bids) => (
          <BidsCard key={bids._id} bids={bids} />
        ))}
      </div>
    </div>
  );
};

export default MyBids;
