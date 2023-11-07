/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
// import { GiConfirmed } from "react-icons/gi";
import { RiDeleteBin2Line } from "react-icons/ri";

const RequestCard = ({ bid, setIsBid, isBid }) => {
  // console.log(setIsBid);
  const { email, deadline, maximum_price, minimum_price, job_title, _id } = bid || {};

  const handleDelete = (_id) => {
    console.log("deleted", _id);
    fetch(`http://localhost:5000/api/v1/userBids/${_id}`, {
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
    fetch(`http://localhost:5000/api/v1/userBids/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Confirmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaing = isBid.filter((booking) => booking._id !== id);
          const updated = isBid.find((booking) => booking._id === id);
          updated.status = "Confirmed";
          const newBooking = [updated, ...remaing];
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
              <th className="px-4 font-bold text-black text-xl text-center py-2">Status</th>
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
              {
                    status === 'Confirmed' ? <button className="btn bg-green-500">Confirmed</button>
                    :
                    <button onClick={() => handleConfirmed(_id)} className="btn bg-red-500 text-white">
                    Pending
                  </button>
                  }
              </td>
              <td className="text-center px-4 py-2">
                <button
                  onClick={() => handleDelete(_id)}
                  className="text-red-600 text-4xl btn   rounded-xl"
                >
                  <RiDeleteBin2Line />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestCard;
