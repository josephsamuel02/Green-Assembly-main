import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import AdminNav from "./AdminNav";
import PhotoAlbum from "react-photo-album";
import { db, storage } from "../db/firebase";
import { uploadBytes, ref } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuid } from "uuid";
const UploadImage = () => {
  const [selectedImages, setSelectedImages] = useState<any>([]);
  const [Images, setImages] = useState<any>([]);

  const handleImageChange = (e: any) => {
    const files = e.target.files;
    setImages(files);
    if (files.length > 0) {
      const imageUrls: any = [];
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = () => {
          imageUrls.push({ src: `${reader.result}`, width: 950, height: 900 });

          if (imageUrls.length === files.length) {
            setSelectedImages(imageUrls);
          }
        };
        reader.readAsDataURL(files[i]);
      }
    }
  };

  const handleFileChange = async () => {
    for (let i = 0; i < Images.length; i++) {
      const file = Images[i];

      const imageRef = ref(storage, `/gallery/${file.name + uuid()} `);

      const result = await uploadBytes(imageRef, Images[i])
        .then((snapshot) => {
          toast.success("Photos uploaded Successfully");
          setSelectedImages([]);
        })
        .catch((error) => {
          toast.success("unable to upload images");
          console.log(error);
        });
    }
  };

  return (
    <div className="w-full h-auto bg-white">
      <AdminNav />
      <div className="w-full h-full mt-28 flex flex-col md:flex-row  ">
        <div className="mx-1 my-3  md:mt-20 py-5 md:px-4 mb-16 h-full w-11/12 md:w-2/6  flex flex-col rounded shadow-lg">
          <input
            type="file"
            name=""
            id=""
            multiple={true}
            accept="image/*"
            className="bg-white m-4 p-3 border border-green-600 rounded-md"
            onChange={(e: any) => handleImageChange(e)}
          />
          <ToastContainer />
          <button
            className=" mx-3 md:mx-4 mt-16 py-4 px-16 bg-green-700 transition-all hover:bg-gradient-to-r from-green-500 rounded-md text-2xl text-white  font-md"
            onClick={handleFileChange}
          >
            Upload
          </button>
        </div>

        <div className="mx-2 py-5  px-4 my-4 w-11/12 md:w-4/6 h-full ">
          <PhotoAlbum layout="rows" photos={selectedImages} />
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
