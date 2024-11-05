import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../db/firebase";
import SuccessCard from "./successCard";
import Footer from "../public/components/footer";
import ROUTES from "../public/public.routes";
import AdminNav from "./AdminNav";

const BlogEditor = () => {
  const [value, setValue] = useState("");
  const [showCard, setShowCard] = useState(false);

  
  const BlogPost = async (e: any) => {
    e.preventDefault();

    try {
      if (value.length > 3) {
        const docRef: any = await addDoc(collection(db, "blogpost"), {
          todo: value,
        });
        if (!docRef) {
          alert("Unable to upload blog post");
        }
        setShowCard(true);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: [] }],
      [{ font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { list: "check" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  const handleEditorChange = (value: any) => {
    setValue(value);
    const diff = value.substr(value.length);
  };

  useEffect(() => {
    let token = localStorage.getItem("greentoken");
    if (!token) {
      window.location.replace(ROUTES.ADMIN);
    }
  }, []);

  return (
    <div className="w-full h-auto">
      <AdminNav />
      <div className="w-full h-full mt-28 flex flex-col md:flex-row items-center">
        <div className="mx-1 py-5 md:px-4  mb-16 h-full w-11/12 md:w-2/4 flex flex-col rounded shadow-lg  ">
          <ReactQuill
            value={value}
            onChange={(value: any) => handleEditorChange(value)}
            modules={modules}
            className="w-full h-full my-0"
          />
          {value.length > 30 && (
            <a
              onClick={(e) => {
                BlogPost(e);
              }}
              className=" mx-auto  px-36 my-10 py-2  w-4/5 bg-green-700 text-center   hover:bg-gradient-to-r from-green-500 rounded text-lg text-white cursor-pointer font-md"
            >
              Post
            </a>
          )}
        </div>
        <div className="mx-4 py-5  px-20 my-4 w-11/12 md:w-2/4 h-full  ">
          <div dangerouslySetInnerHTML={{ __html: value }} />
        </div>
      </div>

      <SuccessCard showCard={showCard} setShowCard={setShowCard} />
      <Footer />
    </div>
  );
};

export default BlogEditor;
