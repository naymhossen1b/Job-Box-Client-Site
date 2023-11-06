import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import RealTime from "../Home/RealTime";

const Header = () => {
    const [open, setOpen] = useState(false);

    const {user, logoutUser} = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
      };

    return (
        <div className="bg-gradient-to-r shadow-md  p-1  text-xl">
        <nav className=" py-5 flex items-center lg:justify-between">
          <div>
            <div className="lg:hidden text-4xl" onClick={() => setOpen(!open)}>
              {open == true ? <RxCross2 /> : <HiMenuAlt2 />}
            </div>
            <ul
              className={`lg:flex absolute md:static justify-center items-center text-start 
          ${open ? "" : "hidden"}
           gap-4 lg:mr-5 p-1 rounded-md`}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold underline text-red-500" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addJob"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold underline text-red-500" : ""
                  }
                >
                  Add Job
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myPostedJobs"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold underline text-red-500" : ""
                  }
                >
                  My Posted Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myBids"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold underline text-red-500" : ""
                  }
                >
                  My Bids
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bidRequests"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold underline text-red-500" : ""
                  }
                >
                  Bid Requests
                </NavLink>
              </li>
              <li>
                <div>
                  {user ? (
                    <>
                    <button onClick={handleLogout} className="btn btn-warning">Log Out</button>
                    </>
                  ) : (
                   <div className="flex items-center md:ml-56">
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
            <RealTime />
            <Link to="/">
              <h1 className="text-4xl shadow-sm p-2 rounded-md shadow-white font-bold lg:ml-5">
                Job<span className="text-red-500">Box</span>
              </h1>
            </Link>
          </div>
        </nav>
      </div>
    );
};

export default Header;