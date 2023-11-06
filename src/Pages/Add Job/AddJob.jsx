import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddJob = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = user.email;
        const job_title = form.job_title.value;
        const deadline = form.deadline.value;
        const jobCategory = form.jobCategory.value;
        const minimum_price = form.minimum_price.value;
        const maximum_price = form.maximum_price.value;
        const short_description = form.short_description.value;
        const data = {email, job_title, deadline, jobCategory, minimum_price, maximum_price, short_description};

        
        fetch('http://localhost:5000/api/v1/userPostJobs', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('You Successfully Post our Job')
            navigate('/myPostedJobs')
        })
    };

    return (
        <div className=" mt-10">
        <div className="card w-full max-w-lg shadow-2xl bg-sky-200">
          <form className="card-body" onSubmit={handleSubmit}>

          <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder={ user ? user.email : 'example.gmail.com'}
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <input
                type="text"
                placeholder="job title "
                className="input input-bordered"
                required
                name="job_title"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="date"
                className="input input-bordered"
                required
                name="deadline"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Job Category</span>
              </label>
              <select
                className="input input-bordered"
                name="jobCategory"
                required
              >
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
                  required
                />
                <input
                  className="p-2 w-full rounded-md input input-bordered"
                  type="number"
                  name="maximum_price"
                  id=""
                  placeholder="Maximum Price"
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
                required
              ></textarea>
            </div>
  
            <div className="form-control mt-2">
              <button className="btn bg-sky-600 text-white hover:bg-blue-800">Add Job</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddJob;