import {  useEffect, useState } from "react";
import TabCards from "./TabCards";
// import { useLoaderData } from "react-router-dom";

const Category = () => {

  const [getJobs, setGetJobs] = useState([]);
  const [tabs, setTabs] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/api/v1/tabs')
    .then(res => res.json())
    .then(data => setGetJobs(data))
  }, [])

  // #3 Tabs
  useEffect(() => {
    fetch('http://localhost:5000/api/allTabs')
    .then(res => res.json())
    .then(data => setTabs(data))
  }, [])
  console.log(tabs);

  

    return (
        <div>
          <div className=" flex gap-5">
            {
              tabs.map( tab => <TabCards key={tab._id} tab={tab} />)
            }
          </div>
          {
            getJobs?.map( jobs => <TabCards key={jobs._id} jobs={jobs} />)
          }
        </div>
    );
};

export default Category;