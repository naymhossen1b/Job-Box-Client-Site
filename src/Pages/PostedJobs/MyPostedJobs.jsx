import { useLoaderData } from "react-router-dom";
import PostCard from "./PostCard";
import { useState } from "react";

const MyPostedJobs = () => {
  const postedJobs = useLoaderData();
  const [jobs, setJobs] = useState(postedJobs);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map((post) => (
          <PostCard key={post._id} post={post} jobs={jobs} setJobs={setJobs} />
        ))}
      </div>
    </div>
  );
};

export default MyPostedJobs;
