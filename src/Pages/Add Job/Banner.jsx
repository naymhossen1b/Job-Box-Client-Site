import Slider from "./Slider";

const Banner = () => {

    

    const items =  [
        <img className="rounded-md" src="https://imagizer.imageshack.com/img924/7942/MoRH2W.jpg" alt="" />,
        <img className="rounded-md" src="https://imagizer.imageshack.com/img922/856/5mCqLa.jpg" alt="" />,
        <img className="rounded-md" src="https://imagizer.imageshack.com/img922/3408/wOpkCQ.jpg" alt="" />,
        <img className="rounded-md" src="https://imagizer.imageshack.com/img922/3418/X3UUaP.jpg" alt="" />
      ];

    return (
        <div>
            <div className="w-full flex items-center justify-center">
      <Slider items={items} />
    </div>
        </div>
    );
};

export default Banner;