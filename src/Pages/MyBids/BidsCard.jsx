/* eslint-disable react/prop-types */
import { GiConfirmed } from "react-icons/gi";
// import { CiNoWaitingSign } from 'react-icons/ci';

const BidsCard = ({ bids }) => {
  const { email, deadline, maximum_price, minimum_price, job_title } = bids || {};

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
                <button className="text-green-600 text-4xl">
                  <GiConfirmed />
                </button>
              </td>
              <td className="text-center px-4 py-2">
                <button className="btn">
                  <span className="loading loading-spinner"></span>
                  Pending
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BidsCard;
