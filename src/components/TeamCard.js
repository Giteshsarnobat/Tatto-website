import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TeamCard = () => {
  return (
    <>
      <div className="teamcard-div container">
        <p className="teamcard-para">our team</p>
        <h1 className="teamcard-header">MEET OUR AWESOME TEAM</h1>
        <div className="swiper-div">
          <Swiper
            navigation={true}
            spaceBetween={20} // Increase spacing between slides
            slidesPerView={1} // Default for mobile
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
              1024: { slidesPerView: 3, spaceBetween: 30 }, // Laptops
              1280: { slidesPerView: 3, spaceBetween: 10 }, // Desktops
            }}
            pagination={{ clickable: true }}
            loop
            autoplay={{ delay: 3000 }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            <SwiperSlide className="swiper">
              <img
                className="teamcard-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTq21oYdZ9A3iMHv2-aFbdoh9actGTfaLxEDanzljUHMYxEI33tKTpCqTt5eZxgY_zWo&usqp=CAU"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="teamcard-img"
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWxzfGVufDB8fDB8fHww"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="teamcard-img"
                src="https://img.freepik.com/premium-photo/attractive-woman-beige-coat-touches-face-with-hand-hairstyle-makeup-high-quality-photo_163305-253443.jpg?ga=GA1.1.252293861.1685383122&semt=ais_hybrid"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="teamcard-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTq21oYdZ9A3iMHv2-aFbdoh9actGTfaLxEDanzljUHMYxEI33tKTpCqTt5eZxgY_zWo&usqp=CAU"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="teamcard-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTq21oYdZ9A3iMHv2-aFbdoh9actGTfaLxEDanzljUHMYxEI33tKTpCqTt5eZxgY_zWo&usqp=CAU"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="teamcard-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTq21oYdZ9A3iMHv2-aFbdoh9actGTfaLxEDanzljUHMYxEI33tKTpCqTt5eZxgY_zWo&usqp=CAU"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TeamCard;

const data = [
  {
    id: 1,
    name: "Jhon",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTq21oYdZ9A3iMHv2-aFbdoh9actGTfaLxEDanzljUHMYxEI33tKTpCqTt5eZxgY_zWo&usqp=CAU",
  },
  {
    id: 2,
    name: "Jhon",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWxzfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Jhon",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRYXnbgm4TG7le_cHw2JQSb9FiwQhkfnVmkzaHc9-bXol3VLqFjAhGjT307s5HEKHHp8&usqp=CAU",
  },
  {
    id: 4,
    name: "Jhon",
    img: "https://img.freepik.com/premium-photo/attractive-woman-beige-coat-touches-face-with-hand-hairstyle-makeup-high-quality-photo_163305-253443.jpg?ga=GA1.1.252293861.1685383122&semt=ais_hybrid",
  },
  {
    id: 5,
    name: "Jhon",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnTq21oYdZ9A3iMHv2-aFbdoh9actGTfaLxEDanzljUHMYxEI33tKTpCqTt5eZxgY_zWo&usqp=CAU",
  },
  {
    id: 6,
    name: "Jhon",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwbW9kZWxzfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    name: "Jhon",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRYXnbgm4TG7le_cHw2JQSb9FiwQhkfnVmkzaHc9-bXol3VLqFjAhGjT307s5HEKHHp8&usqp=CAU",
  },
  {
    id: 8,
    name: "Jhon",
    img: "https://img.freepik.com/premium-photo/attractive-woman-beige-coat-touches-face-with-hand-hairstyle-makeup-high-quality-photo_163305-253443.jpg?ga=GA1.1.252293861.1685383122&semt=ais_hybrid",
  },
];
