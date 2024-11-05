import { MdArrowBack, MdKeyboardBackspace } from "react-icons/md";

const ApplicationForm = (param: {
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setShowForm } = param;
  return (
    <>
      <div className=" p-1 pt-32 bg-white bg-opacity-25 backdrop-blur-md scrollbar-hide rounded-lg border border-gray-200  overflow-y-scroll  scrollbar-hide">
        <div
          className="py-6 absolute top-16  left-6 md:left-72 flex flx-row cursor-pointer"
          onClick={() => setShowForm(false)}
          id="form"
        >
          <MdKeyboardBackspace size={30} color="black" />
          <h2 className=" mx-auto px-3 text-lg font-bold">Back</h2>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScf29eWs_4-Vaj27QCVwlpEG6MbV8hhi5x1J7K_UNNgvIkpLg/viewform?embedded=true"
          width="640"
          height="2113"
          // frameborder="0"
          // marginheight="0"
          // marginwidth="0"
          className=" mx-auto p-1    bg-transparent   rounded-lg border border-gray-200    scrollbar-hide"
        >
          Loading…
        </iframe>
      </div>
      <div
        className="py-3 ml-6 md:ml-20   flex flx-row cursor-pointer"
        onClick={() => setShowForm(false)}
      >
        <MdKeyboardBackspace size={30} color="black" />
        <h2 className=" mx-1 px-3 text-lg font-bold">Back</h2>
      </div>
    </>
  );
};

export default ApplicationForm;
