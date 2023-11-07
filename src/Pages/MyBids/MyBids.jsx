import { useLoaderData } from "react-router-dom";
import BidsCard from "./BidsCard";
import Sliders from "../../Shared/Sliders";


const MyBids = () => {

    const myBids = useLoaderData();

    return (
        <div>
            <Sliders />
            <div className="mt-8">
                <h1 className="text-2xl font-bold underline text-sky-800">Your All Confirmed Job Posts:</h1>
            </div>
            <div className="mt-8">
                {
                    myBids?.map( (bids) => <BidsCard key={bids._id} bids={bids} /> )
                }
            </div>
        </div>
    );
};

export default MyBids;