import { SiGithub, SiLinkedin } from "react-icons/si";
import ROUTES from "../public.routes";

const About = (param: { setShowForm: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { setShowForm } = param;
  return (
    <>
      <div id="about" className=" max-w-full mx-0 my-6 px-3 py-3 items-center">
        <h2 className=" mx-6 py-8 text-3xl md:text-5xl   text-green-700   font-bold">
          Our Vision
        </h2>

        <div className="mx-auto md:mx-auto px-6 py-12 w-full h-auto flex flex-col md:flex-row rounded border items-center border-slate-300 border-lg">
          <img
            src="img/logo.png"
            alt="image"
            className="m-3 px-0 w-52 h-auto md:w-90 md:h-auto object-cover rounded"
          />

          <div className="mx-auto md:mx-12 px-2 md:px-6 py-12 w-full flex flex-col items-center ">
            <p className=" px-0 md:px-6 pt-6 md:py-auto text-center md:text-left text-xl text-black ">
              The Green Assembly Initiative strives to empower Nigerian youth and organizations
              to become advocates for human rights and environmental sustainability. Through
              its programs, this initiative supports social organizations and education that
              promote sustainable development in Nigeria.
            </p>
          </div>
        </div>
      </div>
      <a
        href="https://forms.gle/PLYZyHHwBp4M8GGK9"
        className="mx-auto ml-10 mt-72 w-auto md:w-56 text-center py-3 px-16 bg-green-700 transition-all hover:bg-gradient-to-r from-green-500 rounded text-xl text-white  font-md cursor-pointer"
      >
        Join Us
      </a>
    </>
  );
};

export default About;
