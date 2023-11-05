import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {

    const [isDetail, setIsDetail] = useState(null);

    const {id} = useParams();
    console.log(id);

    const job = useLoaderData();
    console.log(job);

    return (
        <div>
            <h1>Job Details</h1>
        </div>
    );
};

export default JobDetails;