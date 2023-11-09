import RequestCard from "./RequestCard";
import { useContext, useEffect, useState } from "react";
import Sliders from "../../Shared/Sliders";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { AuthContext } from "../../Auth/AuthProvider";
import { Helmet } from "react-helmet";

const BidRequests = () => {
  const { user } = useContext(AuthContext);

  const [postedJobs, setPostedJobs] = useState([]);

  useEffect(() => {
    fetch(`https://job-box-server-nu.vercel.app/api/v1/userBids?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPostedJobs(data);
      });
  }, []);

  // console.log(postedJobs);

  return (
    <div>
      <Helmet> <title>JobBox || Bid Request</title></Helmet>
      <Sliders />
      <div className="mt-8 mb-8">
        <h1 className="text-2xl font-bold underline text-sky-800">User Posted Jobs :</h1>
      </div>
      <div className="mt-5 mb-2">
        <ProgressBar percent={75} filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" />
      </div>
      <div>
        {postedJobs.map((bid) => (
          <RequestCard key={bid._id} bid={bid} postedJobs={postedJobs} setPostedJobs={setPostedJobs} />
        ))}
      </div>
    </div>
  );
};

export default BidRequests;
