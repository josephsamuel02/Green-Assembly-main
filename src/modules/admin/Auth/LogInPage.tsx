import { useState } from "react";
import { db } from "../../db/firebase";
import Footer from "../../public/components/footer";
import ROUTES from "../../public/public.routes";
import { collection, getDocs } from "firebase/firestore";

const Login = () => {
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");

  const getData = async (e: any) => {
    e.preventDefault();

    await getDocs(collection(db, "Auth"))
      .then((querySnapshot: any) => {
        querySnapshot.forEach((doc: { id: any; data: () => any }) => {
          if (doc.data().password == pass) {
            localStorage.setItem("greentoken", pass);
            window.location.replace(ROUTES.EDITOR);
          } else {
            alert("INVALID CREDENTIALS");
          }
        });
      })
      .catch((error: any) => {
        console.log("Error getting documents: ", error);
      });
  };

  return (
    <div className="w-full h-auto mt-24   ">
      <div className="w-full h-auto mt-16 pb-20 flex flex-col md:flex-row items-center  ">
        <div className=" mx-auto py-10 h-auto w-auto md:w-1/2">
          <form className="mx-auto p-10 md:w-96 flex flex-col bg-white rounded-md shadow-xl ">
            <h2 className="mx-1 mb-10 text-2xl font-bold text-slate-600">Admin Login</h2>

            <input
              type="email"
              required
              placeholder="email"
              onChange={(e) => setUser(e.target.value)}
              className=" w-full my-3  h-auto py-2 px-4 text-lg  text-slate-800 rounded-md outline-none border-2 border-green-500 focus:border-lime-400"
            />

            <input
              type="password"
              placeholder="password"
              required
              onChange={(e) => setPass(e.target.value)}
              className=" w-full my-3  h-auto py-2 px-4 text-lg  text-slate-800 rounded-md outline-none border-2 border-green-500 focus:border-lime-400"
            />

            <button
              onClick={(e) => getData(e)}
              className="w-full mx-auto px-6 py-2 my-4 text-center text-white  text-xl font-nunito  rounded bg-green-400 hover:bg-green-600 bg-gradient-to-r from-green-600 hover:from-green-400 transition-colors shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
        {/* <div className=" m-auto pb-10 mx-auto h-auto w-1/2 items-center ">
          <img src="img/undraw_blogging_re_kl0d.svg" alt="" className=" m-auto " />
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
