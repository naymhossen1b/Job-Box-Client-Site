/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Tab, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabCards = ({jobs, tab}) => {

    const { _id, category} = tab || {}

    const {job_title} = jobs || {}

    return (
        <div>
            
            <div className="mt-8">
          <Tabs>
          <Link to={`/tabs/${_id}`}>
          <div className="border font-bold">
              <Tab>{category}</Tab>
            </div>
          </Link>

    {/* all jobs data */}

            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
        </div>
    );
};

export default TabCards;