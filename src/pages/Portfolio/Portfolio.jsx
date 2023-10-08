// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Porfolio.css";

const Portfolio = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mt-8">
                <h1 className="text-center font-semibold text-4xl">
                    Captured Moments<span className="text-[#c9184a]"> Our Wedding Portfolio</span>
                </h1>
                <div className="h-[5px] w-60 mt-2 b[#c9184a]] rounded flex justify-center mx-auto"></div>
            </div>
            <div className="my-5">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    slideActiveClass="active-slide"
                >
                    <SwiperSlide>
                        <div>
                            <img
                                src="https://i.ibb.co/3Bcc5SQ/Portfolio-1.jpg"
                                alt="Portfolio Image"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src="https://i.ibb.co/5Y3H9vZ/Portfolio-2.jpg"
                                alt="Portfolio Image"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src="https://i.ibb.co/KwZyGch/Portfolio-3.jpg"
                                alt="Portfolio Image"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src="https://i.ibb.co/d4ySF2b/Portfolio-4.jpg"
                                alt="Portfolio Image"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="https://i.ibb.co/wBM7Pm4/1-min.jpg" alt="Portfolio Image" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src="https://i.ibb.co/Cn9FtRB/Portfolio-6.jpg"
                                alt="Portfolio Image"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div>
                <div className="flex gap-5 justify-center my-4">
                    <div className="bg-[#c9184a] rounded-full ">
                        <button className="p-2 text-white">
                            <FaAngleLeft />
                        </button>
                    </div>
                    <div className="bg-[#c9184a] rounded-full">
                        <button className="p-2 text-white">
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
