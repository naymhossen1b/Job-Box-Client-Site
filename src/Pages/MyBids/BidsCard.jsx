/* eslint-disable react/prop-types */
import { useState } from "react";
import { GiConfirmed } from "react-icons/gi";
// import { CiNoWaitingSign } from 'react-icons/ci';

const BidsCard = ({ bids }) => {
  const { email, deadline, maximum_price, minimum_price, job_title, status, _id } = bids || {};

  const [isBid, setIsBid] = useState(bids);

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
                    className="btn bg-red-500 text-white"
                  >
                    Pending<span className="loading loading-spinner"></span>
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

export default BidsCard;
