import { MdCopyright } from "react-icons/md";
import ROUTES from "../public.routes";
import Stack from "./stack";
const Footer = () => {
  return (
    <div
      id="footer"
      className="mx-0 w-full px-2  md:px-5  mt-16 py-3 flex flex-col md:flex-row bg-green-800 "
    >
      <Stack />
      <ul className=" w-full  md:w-2/6 mx-4 text-xl text-green-100 md:mx-auto flex flex-col px-4">
        <h3 className="text-lg font-bold py-3 text-white">Links</h3>
        <a className="py-1 font-thin " href={"/"}>
          Home
        </a>
        <a className="py-1 font-thin " href={ROUTES.ABOUT}>
          About
        </a>
        <a className="py-1 font-thin " href={ROUTES.GALLERY}>
          Gallery
        </a>
        <a className="py-1 font-thin " href={ROUTES.BLOG}>
          Blog
        </a>
        <a className="py-1 font-thin " href={ROUTES.ADMIN}>
          Admin
        </a>

        <br />
      </ul>

      <ul className="mx-auto w-full  text-xl md:w-2/6 flex flex-col px-4 text-green-100 ">
        <h3 className=" text-lg font-bold py-3 text-white">Contacts</h3>
        <span className="py-1 font-thin "> Email:Info@greenassemblyinitiate.com.ng </span>
        <span className="py-1 font-thin "> Phone: +2347064391614</span>
        <span className="py-1 font-thin ">
          Office Address: Suit CB11, Apo shopping plaza, near living faith
          church, Durumi, Abuja
        </span>
        <br /> <br /> <br />
        <div className="w-full text-base flex flex-col ">
          <span className=" flex flex-row ">
            <MdCopyright size={22} />
            2024 Green Assembly
          </span>
          <span className="py-1 font-thin color-white text-sm">
            Powered by Bright-Star Golden Empire
          </span>
        </div>
      </ul>
    </div>
  );
};

export default Footer;
