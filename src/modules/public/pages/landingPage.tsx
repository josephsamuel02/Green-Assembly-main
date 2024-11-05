import LandingPageDashBoard from "../components/landing.page.dashBoard";
import Features from "../components/features";
import Stack from "../components/stack";
import Footer from "../components/footer";
import About from "../components/about";
import { SiWhatsapp } from "react-icons/si";
import URLS from "../../../url.links/urls";
import Manifesto from "../components/Manifesto";
import { useState } from "react";
import ApplicationForm from "../components/applicationForm";
const LandingPage = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <>
      {!showForm && (
        <>
          <LandingPageDashBoard setShowForm={setShowForm} />
          <Manifesto setShowForm={setShowForm} />
          <Features />
          <About setShowForm={setShowForm} />

          <Footer />
        </>
      )}
      {showForm && <ApplicationForm setShowForm={setShowForm} />}

      <a
        href={URLS.WHATSAPP}
        target="_blank"
        className="mx-auto px-0  fixed right-6 bottom-6 md:bottom-12 items-center animate-pulse cursor-pointer rounded-full bg-green-500 hover:bg-green-400 "
      >
        {!showForm && (
          <span className=" m-auto animate-bounce">
            <SiWhatsapp size={65} color="white" />
          </span>
        )}
      </a>
    </>
  );
};

export default LandingPage;
