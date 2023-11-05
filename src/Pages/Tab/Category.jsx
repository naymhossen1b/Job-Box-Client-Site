import { useEffect, useState } from "react";
import TabCards from "./TabCards";

const Category = () => {
  const [getJobs, setGetJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/tabs")
      .then((res) => res.json())
      .then((data) => setGetJobs(data));
  }, []);

  const allTabs = [...new Set(getJobs.map((curE) => curE.category))];

  const filterItem = (jobItm) => {
    const filterJob = getJobs.filter((itm) => {
      return itm.category === jobItm;
    });
    setGetJobs(filterJob);
  };

  return (
    <div>
      <div className="mt-16 text-center">
        <h1 className="font-bold text-3xl mb-2">Jobs of the day</h1>
        <p>Search and connect with the right candidates faster.</p>
      </div>
      <div className="flex justify-center items-center gap-3 mt-10">
        {
          allTabs.map(menu => {
            return(
              <button key={menu}
              onClick={() => filterItem(menu)}
              className="p-3 border rounded-md font-bold text-gray-600 hover:border-sky-400 hover:text-sky-400"
            >
              {menu}
            </button>
            )
          })
        }

        {/* <button
          onClick={() => filterItem("Developer")}
          className="p-3 border rounded-md font-bold text-gray-600 hover:border-sky-400 hover:text-sky-400"
        >
          Web Developer
        </button>
        <button
          onClick={() => filterItem("Marketing")}
          className="p-3 border rounded-md font-bold text-gray-600 hover:border-sky-400 hover:text-sky-400"
        >
          Digital Marketing
        </button>
        <button
          onClick={() => filterItem("Design")}
          className="p-3 border rounded-md font-bold text-gray-600 hover:border-sky-400 hover:text-sky-400"
        >
          Graphics Design
        </button> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-8">
        {getJobs.map((jobs) => (
          <TabCards key={jobs._id} jobs={jobs} />
        ))}
      </div>
    </div>
  );
};

export default Category;
