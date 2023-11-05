/* eslint-disable react/prop-types */

const TabCards = ({ jobs }) => {

  const { job_title, deadline, price, short_description } = jobs || {};

  return (
    <div>
      <div className="p-4 border">
        <h1 className="text-2xl font-bold">{job_title}</h1>
        <p>{short_description}</p>
        <p>{deadline}</p>
        <p>${price}/Year</p>
      </div>
    </div>
  );
};

export default TabCards;
