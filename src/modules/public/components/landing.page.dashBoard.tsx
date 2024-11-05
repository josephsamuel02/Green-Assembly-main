import ROUTES from "../public.routes";
import Typewriter from "typewriter-effect";
const LandingPageDashBoard = (param: {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div id="home" className=" w-full">
      <div className="w-full h-screen mx-auto mt-3 md:mt-2 flex flex-col  md:flex-row">
        <div className=" left w-full md:w-3/5 h-auto mt-12  md:h-auto mx-0 py-0 items-center flex flex-row">
          <div className="mx-auto mt-2 md:mt-2 px-6 py-12 w-full my-auto">
            <h1 className="p-0 md:p-3 mx-auto md:m-0 font-bold text-left text-5xl md:text-7xl text-green-700 ">
              Empowering You
            </h1>
            <br />
            <h1 className=" p-0 md:p-3 md:pt-0 text-black mx-auto  font-bold text-left text-5xl md:text-6xl ">
              To Become
            </h1>
            <h1 className=" h-28 pl-2 text-green-700 m-0 mt-3 md:mt-0 font-bold   text-left  text-4xl md:text-5xl">
              <Typewriter
                options={{
                  strings: ["Advocates for Human Rights and Social Stability."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="p-3 mt-1 my-4 mb-8 text-xl md:text-xl text-gray-900  font-base ">
              We empower Nigerian youth and organizations Through initiative supports to
              promote development in Nigeria.
            </p>
            <a
              href="https://forms.gle/PLYZyHHwBp4M8GGK9"
              // onClick={() => setShowForm(true)}
              className=" mx-3 md:mx-4 mt-16 py-4 px-16 bg-green-700 transition-all hover:bg-gradient-to-r from-green-500 rounded-md text-2xl text-white  font-md"
            >
              Join us
            </a>
          </div>
        </div>
        <div className="right md:w-2/5">
          <img className=" h-full w-full   object-cover" src="img/banner.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPageDashBoard;
