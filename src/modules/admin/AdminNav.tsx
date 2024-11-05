import { useState } from "react";
import ROUTES from "../public/public.routes";

const AdminNav = () => {
  const navigation = [
    { name: "Blog post", href: ROUTES.EDITOR },
    { name: "Upload", href: ROUTES.UPLOADIMAGE },
  ];
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <section className="w-full mx-0 ">
      <nav className="w-full mx-0 z-10 py-0 fixed top-0   flex flex-row items-center bg-white shadow-md">
        <a href={ROUTES.HOME} className="mx-2 md:mx-6 my-0  items-center">
          <img alt=" Company Logo" className="h-20 w-auto " src="/img/logo2.jpg" />
        </a>

        <ul className="mx-8 ml-20 py-3 hidden md:flex flex-row absolute right-0">
          {navigation.map((item, i) => (
            <a
              className="mx-1 px-4 tex-center text-green-700 hover:text-black text-lg font-bold"
              href={`${item.href}`}
              key={i}
            >
              {item.name}
            </a>
          ))}
        </ul>
        <h1
          className="absolute top-7 right-5 cursor-pointer md:hidden transition-all"
          onClick={() => setShowNav(!showNav)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </h1>

        {showNav && (
          <ul className="mx-auto py-3  backdrop-blur-lg  absolute top-20 right-0 left-0 flex flex-row bg-white rounded shadow-md">
            {navigation.map((item, i) => (
              <a
                className="mx-auto px-2 py-2 tex-center text-green-700 hover:text-black text-md font-roboto rounded hover:bg-gradient-to-t from-green-200 transition-all "
                href={`${item.href}`}
                key={i}
                onClick={() => setShowNav(false)}
              >
                {item.name}
              </a>
            ))}
          </ul>
        )}
      </nav>
    </section>
  );
};

export default AdminNav;
