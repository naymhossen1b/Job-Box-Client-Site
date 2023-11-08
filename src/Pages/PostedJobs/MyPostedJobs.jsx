// import { useLoaderData } from "react-router-dom";
import PostCard from "./PostCard";
import { useContext, useEffect, useState } from "react";
import Sliders from "../../Shared/Sliders";
import { AuthContext } from "../../Auth/AuthProvider";

const MyPostedJobs = () => {
  // const postedJobs = useLoaderData();
  // const [jobs, setJobs] = useState(postedJobs);


  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/userPostJobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
      });
  }, []);


  return (
    <div>
      <Sliders />
      <div className="font-bold text-center mt-8">
        <h1 className="text-3xl"><span className="text-sky-400">Job</span>Box</h1>
      <h1 className="text-3xl text-gray-600">
        Your Posted <span className="text-sky-500">Jobs</span>
      </h1>
      </div>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-8">
        {jobs.map((post) => (
          <PostCard key={post._id} post={post} jobs={jobs} setJobs={setJobs} />
        ))}
      </div>
    </div>
  );
};

export default MyPostedJobs;
