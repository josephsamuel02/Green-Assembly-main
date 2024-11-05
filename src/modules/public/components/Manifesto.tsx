import ROUTES from "../public.routes";

const Manifesto = (param: { setShowForm: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <>
      <div className="mx-auto mt-36 mb-32 pt-22 pb-10 md:pb-28 md:pt-10 w-full h-96 md:h-auto flex flex-row flip-horizontal my-6 px-6 bg-bg1 bg-cover bg-no-repeat items-center ">
        <div className="left w-full md:w-1/2 m-0 md:h-full flex  ">
          <div className="w-full h-auto md:h-11/12 m-auto p-6 rounded-lg  bg-green-800 backdrop-blur-xs bg-opacity-40">
            <p className="text-white text-lg md:text-3xl font-bold leading-tight  ">
              The Green Assembly Initiative empowers
              <span className="text-green-700"> Nigerian</span> youth and organizations to
              advocate for human rights and environmental sustainability. Through its programs,
              it supports social organizations and
              <span className="text-green-700"> education</span> to promoting social harmony
              and a <span className="text-green-700"> greener </span> future in
              <span className="text-green-700"> Nigeria </span>,
            </p>
          </div>
        </div>
        <div className="hidden md:flex right w-0 md:w-1/2 m-auto h-auto item-right "></div>
      </div>
      <a
        href="https://forms.gle/PLYZyHHwBp4M8GGK9"
        // onClick={() => setShowForm(true)}
        className=" mx-6 mt-3 py-4 px-12 bg-green-700  transition-all hover:bg-gradient-to-r from-green-400 rounded-md text-2xl text-white  font-md"
      >
        Register now
      </a>
    </>
  );
};

export default Manifesto;
