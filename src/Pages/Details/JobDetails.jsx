import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import toast from "react-hot-toast";

const JobDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const job = useLoaderData();
  const { job_title, deadline, minimum_price, maximum_price, short_description, category } = job || {};

  const handleBidOn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user.email;
    const deadline = form.deadline.value;
    const minimum_price = form.minimum_price.value;
    const maximum_price = form.maximum_price.value;
    const bidData = { email, deadline, maximum_price, minimum_price, job_title, category };

    fetch("https://job-box-server-nu.vercel.app/api/v1/userBids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bidData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your Bid Success");
        navigate("/myBids");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // const [ details, setDetails] = useState([])

  // useEffect(() => {
  //   fetch(`https://job-box-server-nu.vercel.app/api/v1/userPostJobs?email=${user.email}`)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     setDetails(data);
  //   });
  // }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
      <section className="col-span-3">
        <div className="p-5 rounded-md bg-sky-50 shadow-lg border">
          <h1 className="text-2xl font-bold">{job_title}</h1>
          <p className="font-medium mt-3">{short_description}</p>
          <p className="font-bold mt-1">
            <span>Deadline: </span>
            {deadline}
          </p>
          <div className="flex items-center mt-8 justify-between">
            <div>
              <p className="text-2xl font-bold text-sky-500">
                <span className="text-xl text-gray-600 underline">Maximum price </span> : $
                {maximum_price}
              </p>
              <p className="text-2xl font-bold text-sky-500">
                <span className="text-xl text-gray-600 underline">Minimum price </span> : $
                {minimum_price}
              </p>
            </div>
          </div>
        </div>
        {/* Place Your Bid  */}
        <div className="border p-12 shadow-2xl bg-sky-50 rounded-md mt-8">
          <form className="space-y-3" onSubmit={handleBidOn}>
            <div>
              <label className="label">Bid Your Amount</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="p-2 w-full rounded-md"
                  type="number"
                  name="minimum_price"
                  id=""
                  placeholder="Minimum Price"
                />
                <input
                  className="p-2 w-full rounded-md"
                  type="number"
                  name="maximum_price"
                  id=""
                  placeholder="Maximum Price"
                />
              </div>
            </div>
            <div>
              <label className="label">Deadline</label>
              <input
                className="p-2 w-full rounded-md"
                type="date"
                name="deadline"
                id=""
                placeholder="12/12/2050"
              />
            </div>
            <div>
              <label className="label">User Email</label>
              <input
                className="p-2 w-full rounded-md"
                type="email"
                name="email"
                id=""
                defaultValue={user ? user.email : "email@gmail.com"}
              />
            </div>
            <button type="submit" className="btn w-full font-bold bg-green-400 text-white">
              Bid on the project
            </button>
          </form>
        </div>
      </section>

      <div className="border col-span-2 bg-gray-200"></div>
    </div>
  );
};

export default JobDetails;
