const Features = () => {
  return (
    <div className=" max-w-full mt-32 ">
      <h1 className="mx-auto px-10   text-5xl font-bold text-green-700">Our Values</h1>

      <div id="features" className=" max-w-full    flex flex-row flex-wrap items-center">
        <div className=" mx-auto my-6 md:my-10 p-1 py-12 w-3/5  md:w-1/5 flex flex-col bg-green-100 rounded-md shadow hover:shadow-lg">
          <img
            src="img/undraw_undraw_undraw_undraw_team_effort_yj7m_ej3u_wvay_y0es.svg"
            alt="vite"
            className="m-auto p-4 w-40 h-40"
          />
          <p className="mx-auto px-10 md:px-1 lg:px-10 text-md text-center text-black">
            Compassion: We approach our work with empathy and understanding towards those in
            need.
          </p>
        </div>
        <div className=" mx-auto my-6 md:my-10 p-1 py-12 w-3/5  md:w-1/5 flex flex-col bg-green-200 rounded-md shadow hover:shadow-lg">
          <img src="img/shared_goals.svg" alt="vite" className="m-auto p-4 w-40 h-40" />
          <p className="mx-auto px-10 md:px-1 lg:px-10 text-md text-center text-black">
            Integrity: We uphold the highest ethical standards in all our actions and
            decisions.
          </p>
        </div>

        <div className=" mx-auto my-6 md:my-10 p-1 py-12 w-3/5  md:w-1/5 flex flex-col bg-green-100 rounded-md shadow hover:shadow-lg">
          <img
            src="img/undraw_engineering_team_a7n2.svg"
            alt="vite"
            className="m-auto p-4 w-40 h-40"
          />
          <p className="mx-auto px-10 md:px-1 lg:px-10 text-md text-center text-black">
            Collaboration: We believe in the power of working together to achieve our goals.
          </p>
        </div>

        <div className=" mx-auto my-6 md:my-10 p-1 py-12 w-3/5  md:w-1/5 flex flex-col bg-green-200 rounded-md shadow hover:shadow-lg">
          <img
            src="img/undraw_audio_conversation_re_3t38.svg"
            alt="vite"
            className="m-auto p-4 w-40 h-40"
          />
          <p className="mx-auto px-10 md:px-1 lg:px-10 text-md text-center text-black">
            Sustainability: We are committed to creating long-lasting positive impacts on
            society and the environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
