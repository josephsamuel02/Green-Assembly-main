import Footer from "../components/footer";
import Nav from "../components/nav";

const AboutUs = () => {
  return (
    <section>
      <Nav />

      <div className="w-full h-auto flex flex-col md:flex-row items-center">
        <div className="mx-4 py-5 px-5  md:px-20 my-20 w-11/12 md:w-3/5 rounded shadow-lg  ">
          <h1 className="text-4xl mx-5 md:mx-auto text-green-600 py-5 font-bold text-left">
            About Us
          </h1>
          <h1 className="text-xl mx-5 md:mx-auto text-green-600 py-5 font-bold text-left">
            Green Assembly Initiative for Peace and Harmony
          </h1>
          <p className="z-10 mb-3 mx-auto  text-lg">
            The Green Assembly Initiative for Peace and Harmony is dedicated to reaching out
            and supporting the vulnerable groups in society. We advocate for human rights,
            address rural and environmental challenges, and encourage Nigerians to embrace the
            culture of volunteerism.
          </p>
          <h1 className="text-xl mx-5 md:mx-auto text-green-600 py-5 font-bold text-left">
            Mission
          </h1>
          <p className="z-10 mb-3 mx-auto  text-lg">
            Our mission is to empower and uplift marginalized communities, promote peace and
            harmony, and create a sustainable environment for future generations.
          </p>
          <h1 className="text-xl mx-5 md:mx-auto text-green-600 py-5 font-bold text-left">
            Vision
          </h1>
          <p className="z-10 mb-3 mx-auto  text-lg">
            Our vision is a society where every individual has equal opportunities, where human
            rights are respected, and where the environment is protected for the well-being of
            all.
          </p>

          <h1 className="text-xl mx-5 md:mx-auto text-green-600 py-5 font-bold text-left">
            Team
          </h1>
          <p className="z-10 mb-3 mx-auto  text-lg">
            Our team is composed of dedicated individuals with diverse backgrounds and
            expertise, united by a shared passion for social justice and environmental
            sustainability. Together, we work tirelessly to make a difference in the lives of
            others and create a better world for all.
          </p>
        </div>

        <img
          src=" img/undraw_pitching_re_fpgk.svg"
          alt=""
          className="hidden md:flex w-2/5 h-auto   "
        />
      </div>

      <Footer />
    </section>
  );
};

export default AboutUs;
