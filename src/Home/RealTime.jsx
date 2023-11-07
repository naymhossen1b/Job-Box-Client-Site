import moment from "moment/moment";

const RealTime = () => {
    return (
        <div>
            <div>
            <p className='font-light'>{moment().format("dddd,   YYYY, h:mm a")}</p>
        </div>
        </div>
    );
};

export default RealTime;