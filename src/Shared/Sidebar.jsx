import { useEffect, useState } from "react";
import Sitecard from "./Sitecard";

const Sidebar = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://job-box-server-nu.vercel.app/api/popularJobs')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])
    

    return (
        <div>
            <h1 className="text-xl font-bold mb-5 text-center">🔥Today Most Popular Jobs🔥</h1>
            <div className="grid grid-cols- md:grid-cols-1 gap-6">
                {
                    cards.map( card => <Sitecard key={card._id} card={card} /> )
                }
            </div>
        </div>
    );
};

export default Sidebar;