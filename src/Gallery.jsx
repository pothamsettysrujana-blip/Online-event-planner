import Navbar from "./Navbar";
function Gallery() {

  const images = [
    "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "https://images.unsplash.com/photo-1511578314322-379afb476865",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce"
  ];

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Gallery
      </h2>

      <div className="row">

        {images.map((img,index)=>(
          <div className="col-md-4 mb-3" key={index}>

            <img
              src={img}
              className="gallery-img"
            />

          </div>
        ))}

      </div>
    </div>
  );
}

export default Gallery;