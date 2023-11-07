import moment from "moment/moment";

const RealTime = () => {
    return (
        <div>
            <div>
            <p className='font-light'>{moment().format("dddd,   YYYY, h:mm")}</p>
        </div>
        </div>
    );
};

export default RealTime;