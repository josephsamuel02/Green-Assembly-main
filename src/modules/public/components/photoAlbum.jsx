import PhotoAlbum from "react-photo-album";

 const PhotoAlbum = ()=> {
    const photos = [
        { src: "/images/1.jpg", width: 800, height: 600 },
        { src: "/images/2.jpg", width: 1600, height: 900 },
      ];
      return <PhotoAlbum layout="rows" photos={photos} />;
}

export default PhotoAlbum;





 