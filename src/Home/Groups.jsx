const Groups = () => {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="rounded-xl p-8">
        <img className="rounded-xl" src="https://imagizer.imageshack.com/img924/7942/MoRH2W.jpg" alt="" />
      </div>
      <div>
       <div className="p-8">
       <h1 className="text-3xl md:mt-5 text-gray-400 font-bold">Millions Of Jobs.</h1>
        <h1 className="text-5xl mt-2 font-bold">Find The One That’s <span className="text-blue-600">Right</span> For You</h1>
        <h1 className="font-medium mt-5">
          Search all the open positions on the web. Get your own personalized salary estimate. Read
          reviews on over 600,000 companies worldwide. The right job is out there.
        </h1>
       </div>
        <div className="flex items-center gap-8 w-10/12 mx-auto">
        <button className="btn bg-blue-600 font-bold text-white border-none">Search Jobs</button>
        <a className="underline text-red-500" href="">Learn More</a>
      </div>
      </div>
    </div>
  );
};

export default Groups;
