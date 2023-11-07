/* eslint-disable react/prop-types */
const Sitecard = ({ card }) => {
  const {
    job_name,
    category,
    image,
    description,
    salary,
    working_time,
    place,
    post_date,
    deadline,
  } = card || {};

  return (
    <div  className=" border p-2 rounded-md bg-sky-300">
      <div>
        <h1 className="text-xl font-bold">{job_name}</h1>
        <img className="rounded-md" src={image} alt="" />
      </div>
      <div>
        <div className="flex items-center justify-between font-bold mt-3">
        <p>{place}</p>
        <p>{category}</p>
        </div>
        <p className="font-medium">{description}</p>
        <div className="font-medium space-y-1">
        <p>{working_time}</p>
        <p><span className="underline">Post: </span>{post_date}</p>
        <p><span className="underline">Last date: </span>{deadline}</p>
        </div>
        <p className="mt-2 font-bold text-sky-700">{salary}</p>
      </div>
    </div>
  );
};

export default Sitecard;
