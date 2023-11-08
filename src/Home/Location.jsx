const Location = () => {
  return (
    <div className="mt-32 hover:cursor-pointer">
      <div
        data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="center-bottom"
        className="text-center space-y-2 font-bold"
      >
        <h1 className="text-5xl text-gray-700">Jobs by Location</h1>
        <p>Find your favourite jobs and get the benefits of yourself</p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3">
        <div
          data-aos="flip-left"
          data-aos-offset="300"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="center-bottom"
          className="p-2 border rounded-md border-sky-300"
        >
          <div className="rounded-md">
            <img
              className="rounded-md w-full h-64"
              src="https://imagizer.imageshack.com/img923/2223/d8uny9.jpg"
              alt=""
            />
          </div>
          <hr />
          <div className="mt-4 p-2">
            <p className="text-xl font-bold">Paris, France</p>
            <div className="flex items-center font-medium justify-between">
              <p>5 Vacancy</p>
              <p>120 companies</p>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-down"
          data-aos-offset="300"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="center-bottom"
          className="p-2 border rounded-md border-sky-300"
        >
          <div className="rounded-md">
            <img
              className="rounded-md w-full h-64"
              src="https://imagizer.imageshack.com/img922/8420/ncnjXq.jpg"
              alt=""
            />
          </div>
          <hr />
          <div className="mt-4 p-2">
            <p className="text-xl font-bold">London, England</p>
            <div className="flex items-center font-medium justify-between">
              <p>8 Vacancy</p>
              <p>100 companies</p>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="center-bottom"
          className="p-2 border rounded-md border-sky-300"
        >
          <div className="rounded-md">
            <img
              className="rounded-md w-full h-64"
              src="https://imagizer.imageshack.com/img923/5581/bSQh7L.jpg"
              alt=""
            />
          </div>
          <hr />
          <div className="mt-4 p-2">
            <p className="text-xl font-bold">New York, USA</p>
            <div className="flex items-center font-medium justify-between">
              <p>7 Vacancy</p>
              <p>170 companies</p>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-left"
          data-aos-offset="300"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="center-bottom"
          className="p-2 border rounded-md border-sky-300"
        >
          <div className="rounded-md">
            <img
              className="rounded-md w-full h-64"
              src="https://imagizer.imageshack.com/img922/6251/40pxIw.jpg"
              alt=""
            />
          </div>
          <hr />
          <div className="mt-4 p-2">
            <p className="text-xl font-bold">Amsterdam, Holland</p>
            <div className="flex items-center font-medium justify-between">
              <p>29 Vacancy</p>
              <p>1200 companies</p>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-up"
          data-aos-offset="300"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="center-bottom"
          className="p-2 border rounded-md border-sky-300"
        >
          <div className="rounded-md">
            <img
              className="rounded-md w-full h-64"
              src="https://imagizer.imageshack.com/img922/856/5mCqLa.jpg"
              alt=""
            />
          </div>
          <hr />
          <div className="mt-4 p-2">
            <p className="text-xl font-bold">Copenhagen, Denmark</p>
            <div className="flex items-center font-medium justify-between">
              <p>50 Vacancy</p>
              <p>1280 companies</p>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-offset="300"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="center-bottom"
          className="p-2 border rounded-md border-sky-300"
        >
          <div className="rounded-md">
            <img
              className="rounded-md w-full h-64"
              src="https://imagizer.imageshack.com/img922/3285/t36wFU.jpg"
              alt=""
            />
          </div>
          <hr />
          <div className="mt-4 p-2">
            <p className="text-xl font-bold">Berlin, Germany</p>
            <div className="flex items-center font-medium justify-between">
              <p>500 Vacancy</p>
              <p>1020 companies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
