import TattooCategory from "./TattooCategory";
const SmallCategory = () => {
  return (
    <>
      <div className="smallcategory-main-div">
        <div className="smallcategory-text-div container">
          <h1 className="smallcategory-heading">
            Small Tattoos, Timeless Meaning
          </h1>
          <p className="smallcategory-text">
            Small tattoos are more than just ink; they are personal statements
            etched in time. Whether it’s a delicate floral design, an inspiring
            word, or a tiny symbol that holds a special place in your heart, our
            expert artists ensure every piece is crafted with precision and
            care.
          </p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#D2AEF4"
          fill-opacity="1"
          d="M0,128L60,154.7C120,181,240,235,360,245.3C480,256,600,224,720,186.7C840,149,960,107,1080,106.7C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <div>
        <h1 className="smallCate-image-heading container">Our Small Tattoos</h1>
        <div className="category-com-div">
          <TattooCategory />
        </div>
      </div>
    </>
  );
};

export default SmallCategory;
