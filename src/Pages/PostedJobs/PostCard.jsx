/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import swal from "sweetalert";

const PostCard = ({ post, jobs, setJobs }) => {
  const { job_title, deadline, minimum_price, maximum_price, short_description, _id } = post || {};
  const handleDelete = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/api/v1/userPostJobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged === true) {
              const remaining = jobs.filter((job) => job._id !== _id);
              setJobs(remaining);
              swal("Deleted!", "Your posted jobs has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.error("Error deleting the job:", error);
            swal("Error", "Failed to delete the job.", "error");
          });
      } else {
        swal("Cancelled", "Your posted jobs is safe :)", "info");
      }
    });
  };
  

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
            <Link to={`/updateJobs/${_id}`}>
              <button className="btn bg-sky-500 text-white">Update</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
