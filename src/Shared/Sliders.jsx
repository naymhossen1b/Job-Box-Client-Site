import Slide from "./Slide";

const Sliders = () => {
  const items = [
    <img
      className="rounded-md"
      src="https://imagizer.imageshack.com/img923/9376/Q2mcJm.jpg"
      alt=""
    />,
    <img
      className="rounded-md"
      src="https://imagizer.imageshack.com/img924/6461/zEjnAL.jpg"
      alt=""
    />,
    <img
      className="rounded-md"
      src="https://imagizer.imageshack.com/img924/8967/JjaJFz.jpg"
      alt=""
    />,
    <img
      className="rounded-md"
      src="https://imagizer.imageshack.com/img922/4101/APgPLA.jpg"
      alt=""
    />,
  ];

  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <Slide items={items} />
      </div>
    </div>
  );
};

export default Sliders;
