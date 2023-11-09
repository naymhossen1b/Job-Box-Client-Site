import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import RealTime from "../Home/RealTime";

const Header = () => {
  const [open, setOpen] = useState(false);

  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-gradient-to-r shadow-md  p-1  text-xl">
      <nav className=" py-5 flex items-center justify-between">
        <div>
          <div className="lg:hidden text-4xl" onClick={() => setOpen(!open)}>
            {open == true ? <RxCross2 /> : <HiMenuAlt2 />}
          </div>
          <ul
            className={`lg:flex absolute md:static justify-center grid bg-white p-2 items-center text-start 
          ${open ? "" : "hidden"}
           gap-3 lg:mr-5 p-1 rounded-md`}
          >
            <li className=" p-1 rounded-md border-sky-300 bg-sky-50 shadow-md">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "font-medium text-green-500" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className=" p-1 rounded-md border-sky-300 bg-sky-50 shadow-md">
              <NavLink
                to="/addJob"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "font-medium text-green-500" : ""
                }
              >
                Add Job
              </NavLink>
            </li>
            <li className=" p-1 rounded-md border-sky-300 bg-sky-50 shadow-md">
              <NavLink
                to="/myPostedJobs"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "font-medium text-green-500" : ""
                }
              >
                Posted Jobs
              </NavLink>
            </li>
            <li className=" p-1 rounded-md border-sky-300 bg-sky-50 shadow-md">
              <NavLink
                to="/myBids"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "font-medium text-green-500" : ""
                }
              >
                My Bids
              </NavLink>
            </li>
            <li className=" p-1 rounded-md border-sky-300 bg-sky-50 shadow-md">
              <NavLink
                to="/bidRequests"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "font-medium text-green-500" : ""
                }
              >
                Bid Requests
              </NavLink>
            </li>
            <li>
              <div className="flex items-center md:ml-11">
              <div className="mr-2 font-bold">
                    {
                      user ? <p>{user.displayName}</p> : ''
                    }
                  </div>
                <div className="mr-3">
                  {user?.email ? (
                    <>
                      <div className="avatar online">
                        <div className="w-14 rounded-full">
                          <img src={user.photoURL} />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="avatar offline">
                        <div className="w-14 rounded-full">
                          <img src="https://imagizer.imageshack.com/img923/1351/e9awcu.png" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {user ? (
                  <>
                    <button onClick={handleLogout} className="btn btn-warning">
                      Log Out
                    </button>
                  </>
                ) : (
                  <div className="flex items-center">
                    <li>
                      <NavLink
                        to="/register"
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "font-bold underline text-red-500" : ""
                        }
                      >
                        <span className="">Register</span>
                      </NavLink>
                    </li>
                    <p>/</p>
                    <li>
                      <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "font-bold underline text-red-500" : ""
                        }
                      >
                        <span className="">Login</span>
                      </NavLink>
                    </li>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
        <div className="md:mr-10 lg:order-first">
          <Link to="/">
            <h1 className="text-4xl shadow-sm p-2 rounded-md shadow-white font-bold lg:ml-5">
              Job<span className="text-red-500">Box</span>
            </h1>
          </Link>
          <RealTime />
        </div>
      </nav>
    </div>
  );
};

export default Header;
