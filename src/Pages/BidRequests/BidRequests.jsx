import RequestCard from "./RequestCard";
import { useContext, useEffect, useState } from "react";
import Sliders from "../../Shared/Sliders";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { AuthContext } from "../../Auth/AuthProvider";

const BidRequests = () => {
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
      <div className="mt-8 mb-8">
        <h1 className="text-2xl font-bold underline text-sky-800">User Posted Jobs :</h1>
      </div>
      <div className="mt-5 mb-2">
        <ProgressBar percent={75} filledBackground="linear-gradient(to right, #fefb72, #f0bb31)" />
      </div>
      <div>
        {postedJobs.map((bid) => (
          <RequestCard key={bid._id} bid={bid} isBid={postedJobs} setIsBid={setPostedJobs} />
        ))}
      </div>
    </div>
  );
};

export default BidRequests;
