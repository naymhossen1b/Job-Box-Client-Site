/* eslint-disable react/prop-types */

import toast from "react-hot-toast";


const PostCard = ({ post, jobs, setJobs }) => {
  const { job_title, deadline, minimum_price, maximum_price, short_description, _id } = post || {};

  const handleDelete = (_id) => {
    console.log('deleted', _id);
    fetch(`http://localhost:5000/api/v1/userPostJobs/${_id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then( data => {
        console.log(data);
        if( data.acknowledged == true){
            toast.success('Deleted Success')
            const remaining = jobs.filter( job => job._id !== _id);
              setJobs(remaining);
        }
    })
  }

  return (
    <div>
      <div className="p-5 rounded-md bg-sky-50 shadow-md border">
        <h1 className="text-2xl font-bold">{job_title}</h1>
        <p className="font-medium mt-3">{short_description}</p>
        <p className="font-bold mt-1">
          <span>Deadline: </span>
          {deadline}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-sky-500">
              <span className="text-xl text-gray-600 underline">Maximum price :</span> $
              {maximum_price}
            </p>
            <p className="text-2xl font-bold text-sky-500">
              <span className="text-xl text-gray-600 underline">Minimum price :</span> $
              {minimum_price}
            </p>
          </div>
          <div className="grid gap-3">
            <button className="btn bg-sky-500 text-white">Update</button>
            <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
