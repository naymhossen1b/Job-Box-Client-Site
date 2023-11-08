import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import SocialLogin from "../Hooks/SocialLogin";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createUser, updateOnProfile } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const navigate = useNavigate();

  const handelRegister = async (e) => {
    e.preventDefault();

    const tostId = toast.loading("Creating user...");

    try {
      await createUser(email, password).then((res) => {
        console.log(res);
        updateOnProfile(name, photoUrl).then(() => {
          toast.success("Account Created Success", { id: tostId });
          navigate("/");
        });
      });
    } catch (error) {
      toast.error(error.message, { id: tostId });
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-[url('https://i.ibb.co/9rXs0m0/Black-background-wallpaper-by-Ma-DBut4er-Download-on-ZEDGE-ee4e.jpg')]">
       <Helmet>
        <title>JobBox || Sign in</title>
      </Helmet>
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img className="mt-20" src="https://i.ibb.co/wBZSg3b/vecteezy-fills-in-the-profile-data-form-businessman-fills-in-the-21179570-490.png" alt="" />
        </div>
        {/* Form section */}
        <div className="p-2 md:p-20">
          <form
            onSubmit={handelRegister}
            className="space-y-3 shadow-md shadow-yellow-400 rounded-md border p-10"
          >
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold text-yellow-800">
                Job<span className="text-purple-950">Box</span>
              </h1>
              <h1 className="text-xl font-bold mt-5 mb-2">Start for free Today</h1>
              <p className="text-gray-400">Access to all features. No credit card required.</p>
            </div>
            <div className="w-11/12 mx-auto">
              <SocialLogin />

              <div className="flex items-center text-white mt-5 font-bold">
                <div className="border border-yellow-400 w-full"></div>
                <p className="ml-4 mr-5">Or</p>
                <div className="border border-yellow-400 w-full"></div>
              </div>
            </div>
            <div>
              <label className="label mt-8">
                <span className="label-text text-white font-bold">Full Name</span>
              </label>
              <input
                className="text-black p-2 w-full rounded-md border-none"
                type="text"
                name="name"
                onBlur={(e) => setName(e.target.value)}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white font-bold">Email</span>
              </label>
              <input
                className="text-black p-2 w-full rounded-md border-none"
                type="text"
                name="email"
                required
                onBlur={(e) => setEmail(e.target.value)}
                placeholder="example@mail.com"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white font-bold">Password</span>
              </label>
              <input
                className="text-black p-2 w-full rounded-md border-none"
                type="password"
                required
                name="password"
                placeholder="********"
                onBlur={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-white font-bold">Photo URL</span>
              </label>
              <input
                className="text-black p-2 w-full rounded-md border-none"
                type="url"
                required
                name="url"
                placeholder="www.image.com"
                onBlur={(e) => setPhotoUrl(e.target.value)}
              />
            </div>
            <input
              className="text-black cursor-pointer hover:bg-green-500 hover:text-white bg-yellow-300 font-bold w-full p-2 rounded-xl"
              type="submit"
              value="Register"
            />
          </form>
          <div>
            <div className="w-9/12 mx-auto mt-5">
              <p className="font-bold text-white">
                Already have an account?
                <Link className="underline text-purple-600" to="/login">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </div>
  );
};

export default Register;
