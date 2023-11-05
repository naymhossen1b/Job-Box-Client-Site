import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";
import { GrGoogle } from "react-icons/gr";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSocialLogin = (media) => {
    media()
      .then((res) => {
        navigate("/");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
        <div className="border text-white  p-2 rounded-md mt-10">
          <div className="lg:ml-[70px]">
          <button onClick={() => handleSocialLogin(googleLogin)} className="flex items-center gap-3">
            <GrGoogle /> Continue With Google
          </button>
          </div>
        </div>
    </div>
  );
};

export default SocialLogin;
