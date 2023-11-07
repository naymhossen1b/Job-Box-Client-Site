const MailBox = () => {
  return (
    <div className="text-start mt-20 bg-cover w-full rounded-xl p-2 md:p-20 bg-[url('https://imagizer.imageshack.com/img924/6150/0FBD7D.jpg')]">
      <div>
        <h1 className="text-5xl font-bold text-sky-700">Subscribe our newsletter</h1>
        <p className="mt-2 font-bold text-sky-700">New Things Will Always Update Regular</p>
      </div>
      <div className="mt-5 flex">
        <input className="p-3 order-none rounded-bl-xl md:w-4/12 " type="email" name="" placeholder="Enter your email.." id="" />
        <button className="p-3 rounded-tr-xl md:px-8 bg-blue-800 border-none text-white font-bold">Submit</button>
      </div>
    </div>
  );
};

export default MailBox;
