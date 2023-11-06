import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <h1 className="text-4xl text-gray-600 font-bold">
            Job<span className="text-red-500">Box</span>
          </h1>
          <p className="w-56">
            JobBox is the heart of the design community and the best resource to discover and
            connect with designers and jobs worldwide
          </p>
          <div className="flex justify-center items-center gap-3 text-3xl">
            <a href="https://www.facebook.com/naymhossen3.0/">
              <FaFacebook className="text-sky-600" />
            </a>
            <a href="https://twitter.com/NaymHosse">
              <BsTwitter className="text-sky-600" />
            </a>
            <a href="https://www.linkedin.com/in/naymhossen/">
              <AiFillLinkedin className="text-sky-600" />
            </a>
            <a href="https://github.com/naymhossen">
              <AiFillGithub />
            </a>
          </div>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Developing</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Branding</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
