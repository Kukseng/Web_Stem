import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import bannerImage1 from "../../assets/banner.png";
import bannerImage2 from "../../assets/banner3.png";
import bannerImage3 from "../../assets/banner4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  const images = [bannerImage1, bannerImage2, bannerImage3];
  const [currentImage, setCurrentImage] = useState(0);

  // Initialize AOS with better configuration
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Changed to false to allow animations to repeat
      offset: 50, // Offset (in px) from the original trigger point
      delay: 0, // Values from 0 to 3000, with step 50ms
      easing: "ease-in-out",
    });
  }, []);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className=" h-[630px] md:h-[500px] lg:h-[680px] bg-wh relative text-center mt-3">
      <div className="absolute inset-0" />

      <div className="max-w-7xl mx-auto  px-2 py-4 relative mt-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 overflow-hidden">
          <span
            className="text-[#FF7426] mr-[20px] inline-block "
            data-aos="fade-right"
            data-aos-delay="100"
          >
            សូមស្វាគមន៍
          </span>
          <span
            className="inline-block mb-2"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            មកកាន់គេហទំព័ររបស់ពួកយើង
          </span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left r */}
          <div
            className="w-full md:w-1/2"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="relative w-full h-60 md:h-80 bg-white rounded-lg overflow-hidden">
              <div className="absolute top-4 left-4 z-10">
                <div className="w-10 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">LIVE</span>
                </div>
              </div>

              <div className="relative w-full h-full">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${
                      currentImage === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right = */}
          <div
            className="w-full md:w-1/2 space-y-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              <span className="text-black">ការ</span>
              <span className="text-[#FF4500]">អប់រំ</span>
              <span className="text-black">សម្រាប់់គ្រប់គ្នា</span>
            </h2>

            <h3 className="text-lg md:text-xl lg:text-2xl font-medium">
              សិក្សាដោយសេរី ពេលណាក៏បាន ទីណាក៏បាន
            </h3>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              ពង្រឹងសក្តានុពលរបស់អ្នក
              ជាមួយការសិក្សាតាមអ៊ិនធឺណិតស្វែងយល់អំពីចំណេះដឹង និងឱកាសថ្មីៗ
              ដោយចាប់ផ្តើមការសិក្សាជាមួយយើង
            </p>

            <div className="flex items-center w-full mb-[20px] lg:mt-15 lg:mb-0 ">
              <div className="relative flex-1 ">
                <input
                  type="text"
                  placeholder="ស្វែងរកមុខវិជ្ជា"
                  className="w-full px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button className="bg-[#2B3990]  text-white px-4 md:px-8 py-3 rounded-r-lg hover:bg-blue-800 transition-colors">
                ស្វែងរក
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
