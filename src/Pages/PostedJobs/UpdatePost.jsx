import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const UpdatePost = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const jobPost = useLoaderData();
  console.log(jobPost);
  const { job_title, deadline, minimum_price, _id, maximum_price, short_description, jobCategory } =
    jobPost;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user.email;
    const job_title = form.job_title.value;
    const deadline = form.deadline.value;
    const jobCategory = form.jobCategory;
    const minimum_price = form.minimum_price.value;
    const maximum_price = form.maximum_price.value;
    const short_description = form.short_description.value;
    const data = {
      email,
      job_title,
      deadline,
      jobCategory,
      minimum_price,
      maximum_price,
      short_description,
    };
    console.log(data);

    fetch(`https://job-box-server-nu.vercel.app/api/v1/userPostJobs/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Great Work Your Job Successfully Updated");
          navigate("/myPostedJobs");
        }
      });
  };

  return (
    <div className="card w-full max-w-lg shadow-2xl bg-sky-200">
      <Helmet> <title>JobBox || Update Post</title></Helmet>
      <form className="card-body" onSubmit={handleUpdate}>
        <div>
          <label className="label">Email</label>
          <input
            className="w-full p-2 rounded-md"
            type="email"
            name=""
            id=""
            placeholder={user ? user.email : "email@gmail.com"}
          />
        </div>
        <div>
          <label className="label">Job Title</label>
          <input
            className="w-full p-2 rounded-md"
            type="text"
            name="job_title"
            id=""
            defaultValue={job_title}
          />
        </div>
        <div>
          <label className="label">Deadline</label>
          <input
            className="w-full p-2 rounded-md"
            type="date"
            name="deadline"
            id=""
            defaultValue={deadline}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Category</span>
          </label>
          <select className="input input-bordered" defaultValue={jobCategory} required>
            <option>Chose Your Job Type</option>
            <option>Developer</option>
            <option>Marketing</option>
            <option>Design</option>
          </select>
        </div>
        <div>
          <label className="label">Bid Your Amount</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="p-2 w-full rounded-md input input-bordered"
              type="number"
              name="minimum_price"
              id=""
              placeholder="Minimum Price"
              defaultValue={minimum_price}
              required
            />
            <input
              className="p-2 w-full rounded-md input input-bordered"
              type="number"
              name="maximum_price"
              id=""
              placeholder="Maximum Price"
              defaultValue={maximum_price}
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            rows={5}
            className="border p-2 rounded-md"
            name="short_description"
            defaultValue={short_description}
            required
          ></textarea>
        </div>
        <div className="form-control mt-2">
          <button type="submit" className="btn bg-sky-600 text-white hover:bg-blue-800">
            Update Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePost;
