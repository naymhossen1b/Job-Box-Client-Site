/* eslint-disable react/prop-types */
import { useContext } from "react";
import toast from "react-hot-toast";
import { GiConfirmed } from "react-icons/gi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { AuthContext } from "../../Auth/AuthProvider";

const RequestCard = ({ bid, setIsBid, isBid }) => {
  const { user } = useContext(AuthContext);

  const { email, deadline, maximum_price, minimum_price, job_title, _id, status } = bid || {};

  const handleDelete = (_id) => {
    console.log("deleted", _id);
    fetch(`https://job-box-server-nu.vercel.app/api/v1/userBids/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged == true) {
          toast.success("Deleted Success");
          const remaining = isBid.filter((job) => job._id !== _id);
          setIsBid(remaining);
        }
      });
  };

  const handleConfirmed = (id) => {
    fetch(`https://job-box-server-nu.vercel.app/api/v1/userBids/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = isBid.filter((booking) => booking._id !== id);
          const updated = isBid.find((booking) => booking._id === id);
          updated.status = "confirmed";
          const newBooking = [updated, ...remaining];
          setIsBid(newBooking);
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 font-bold text-black text-xl text-start py-2">Job Title</th>
              <th className="px-4 font-bold text-black text-xl text-start py-2">Email</th>
              <th className="px-4 font-bold text-black text-xl text-start py-2">Deadline</th>
              <th className="px-4 font-bold text-black text-xl text-start py-2">Max Price</th>
              <th className="px-4 font-bold text-black text-xl text-start py-2">Min Price</th>
              <th className="px-4 font-bold text-black text-xl text-center py-2">Status</th>
              <th className="px-4 font-bold text-black text-xl text-center py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">{job_title}</td>
              <td className="border px-4 py-2">{email}</td>
              <td className="border text-center px-4 py-2">{deadline}</td>
              <td className="border text-center px-4 py-2">${minimum_price}</td>
              <td className="border text-center px-4 py-2">${maximum_price}</td>
              <td className="text-center px-4 py-2">
                {status === "confirmed" ? (
                  <button className="text-5xl text-green-500"><GiConfirmed /></button>
                ) : (
                  <button
                    onClick={() => handleConfirmed(_id)}
                    className="text-red-600  btn rounded-full bg-gray-200"
                  >
                    <span className="loading loading-spinner"></span>
                  Pending</button>
                )}
              </td>
              <td className="text-center px-4 py-2">
                {user && (
                  <button
                    onClick={() => handleDelete(_id)}
                    className="text-red-600 text-5xl  rounded-xl"
                  >
                    <RiDeleteBin2Line />
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestCard;
