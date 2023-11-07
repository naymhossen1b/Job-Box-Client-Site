import { useEffect, useState } from "react";
import Sitecard from "./Sitecard";

const Sidebar = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/popularJobs')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])
    

    return (
        <div>
            <div className="grid grid-cols- md:grid-cols-1 gap-6">
                {
                    cards.map( card => <Sitecard key={card._id} card={card} /> )
                }
            </div>
        </div>
    );
};

export default Sidebar;