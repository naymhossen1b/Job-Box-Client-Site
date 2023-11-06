import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";

const JobDetails = () => {
  const { user } = useContext(AuthContext);

  const { id } = useParams();
  console.log(id);

  const job = useLoaderData();

  const { job_title, deadline, minimum_price, maximum_price, short_description } = job || {};

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
          <form className="space-y-3">
            <div>
              <label className="label">Bid Your Amount</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="p-2 w-full rounded-md"
                  type="number"
                  name=""
                  id=""
                  placeholder="Minimum Price"
                />
                <input
                  className="p-2 w-full rounded-md"
                  type="number"
                  name=""
                  id=""
                  placeholder="Maximum Price"
                />
              </div>
            </div>
            <div>
              <label className="label">Deadline</label>
              <input className="p-2 w-full rounded-md" type="number" name="" id="" placeholder="12/12/2050" />
            </div>
            <div>
              <label className="label">User Email</label>
              <input
                className="p-2 w-full rounded-md"
                type="email"
                name=""
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
