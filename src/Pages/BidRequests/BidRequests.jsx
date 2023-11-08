import { useLoaderData } from "react-router-dom";
import RequestCard from "./RequestCard";
import { useState } from "react";
import Sliders from "../../Shared/Sliders";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
// import BidsCard from "../MyBids/BidsCard";

const BidRequests = () => {
  const bids = useLoaderData();

  const [isBid, setIsBid] = useState(bids);

  // const totalBids = bids.length;
  // const completedBids = isBid.filter(bid => bid.status === "completed").length;
  // const progress = totalBids < 0 ? (completedBids / totalBids) * 100 : 0;

  return (
    <div>
      <Sliders />
      <div className="mt-8 mb-8">
        <h1 className="text-2xl font-bold underline text-sky-800">User Posted Jobs :</h1>
      </div>
      <div className="mt-5 mb-2">
      <ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      />
      </div>
      <div>
        {isBid.map((bid) => (
          <RequestCard key={bid._id} bid={bid} isBid={isBid} setIsBid={setIsBid} />
        ))}
      </div>
      {/* <BidsCard bids={bids} /> */}
    </div>
  );
};

export default BidRequests;
