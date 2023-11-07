import { useLoaderData } from "react-router-dom";
import RequestCard from "./RequestCard";
import { useState } from "react";

const BidRequests = () => {
  const bids = useLoaderData();

  const [isBid, setIsBid] = useState(bids);

  return (
    <div>
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
