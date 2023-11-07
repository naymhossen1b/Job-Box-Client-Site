import { useLoaderData } from "react-router-dom";
import RequestCard from "./RequestCard";
import { useState } from "react";
import Sliders from "../../Shared/Sliders";

const BidRequests = () => {
  const bids = useLoaderData();

  const [isBid, setIsBid] = useState(bids);

  return (
    <div>
      <Sliders />
      <div className="mt-8 mb-8">
                <h1 className="text-2xl font-bold underline text-sky-800">User Posted Jobs :</h1>
            </div>
      <div>
        {isBid.map((bid) => (
          <RequestCard key={bid._id} bid={bid} 
          isBid={isBid}
          setIsBid={setIsBid}
           />
        ))}
      </div>
    </div>
  );
};

export default BidRequests;
