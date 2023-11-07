/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import SocialLogin from "../Hooks/SocialLogin";

const Login = () => {
  const { loggedInUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Logging in.....");
    try {
      await loggedInUser(email, password);
      toast.success("Logged In Success", { id: toastId });
      navigate("/");
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-[url('https://i.ibb.co/zVpgSMX/Cool-Black-Background-Promotion-Main-Map-Black-Background-Cool-Digital-Home-Background-Image-And-Wal.jpg')]">
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <img src="https://imagizer.imageshack.com/img922/5463/ALyuyj.png" alt="" />
      </div>
      {/* Form section */}
      <div className="p-2 md:p-20">
        <form
          onSubmit={handleLogin}
          className="space-y-3 shadow-md shadow-yellow-400 rounded-md border p-10"
        >
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold text-yellow-800">
              Job<span className="text-purple-950">Box</span>
            </h1>
            <h1 className="text-xl font-bold mt-5 mb-2">Member Login</h1>
            <p className="text-gray-400">Access to all features. No credit card required.</p>
          </div>
          <div className="w-11/12 mx-auto">
                <SocialLogin />

            <div className="flex items-center text-white mt-5 font-bold">
              <div className="border border-yellow-400 w-full"></div>
              <p className="ml-4 mr-5">or</p>
              <div className="border border-yellow-400 w-full"></div>
            </div>
            </div>
          <div>
            <label className="label">
              <span className="label-text text-white font-bold">Email</span>
            </label>
            <input
              className="text-black p-2 w-full rounded-md border-none"
              type="email"
              name="email"
              placeholder="example@mail.com"
              onBlur={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-white font-bold">Password</span>
            </label>
            <input
              className="text-black p-2 w-full rounded-md border-none"
              type="password"
              name="password"
              placeholder="********"
              onBlur={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            className="text-black cursor-pointer hover:bg-green-500 hover:text-white bg-yellow-300 font-bold w-full p-2 rounded-xl"
            type="submit"
            value="Login"
          />
        </form>
        <div>
          <div className="w-9/12 mx-auto mt-5">
            <p className="font-bold text-white">
              Don't have an account?
              <Link className="underline text-purple-600" to="/register">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  </div>
  );
};

export default Login;
