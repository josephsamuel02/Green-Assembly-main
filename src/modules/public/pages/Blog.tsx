import { db } from "../../db/firebase";
import Footer from "../components/footer";
import ROUTES from "../public.routes";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
const Blog = () => {
  const [blogPost, setBlogPost] = useState<any>([]);
  const [page, setPage] = useState<any>(1);

  const fetchPost = async () => {
    await getDocs(collection(db, "blogpost")).then((querySnapshot) => {
      const newData: any = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setBlogPost(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="w-full h-auto pt-28   flex flex-col bg-green-50">
      <div className=" mx-auto p-10 w-4/5 md:w-3/6  rounded-md flex flex-col bg-white">
        {blogPost[page] && <div dangerouslySetInnerHTML={{ __html: blogPost[page].todo }} />}
      </div>

      <div className=" mx-auto   h-auto mt-10 py-1 px-6 w-4/5 md:w-3/6 flex flex-row bg-white rounded">
        <li
          className="mx-auto tex-base px-3 py-1 text-slate-700 border-2 rounded-sm border-slate-300 list-none cursor-pointer"
          onClick={() => {
            page > 0 ? setPage(page - 1) : setPage(0);
          }}
        >
          prev
        </li>
        {blogPost[0] &&
          blogPost.map((i: any, n: any) => (
            <li
              className="mx-auto tex-base px-0 py-1 text-slate-700 border-2 rounded-sm border-slate-300 list-none cursor-pointer"
              onClick={() => setPage(n)}
            >
              {n}
            </li>
          ))}
        <li
          className="mx-auto tex-base px-3 py-1 text-slate-700 border-2 rounded-sm border-slate-300 list-none cursor-pointer"
          onClick={() => {
            page < blogPost.length - 1 ? setPage(page + 1) : setPage(blogPost.length - 1);
          }}
        >
          prev
        </li>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
