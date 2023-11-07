import { useLoaderData } from "react-router-dom";
import BidsCard from "./BidsCard";


const MyBids = () => {

    const myBids = useLoaderData();

    return (
        <div>
            <div>
                {
                    myBids?.map( (bids) => <BidsCard key={bids._id} bids={bids} /> )
                }
            </div>
        </div>
    );
};

export default MyBids;