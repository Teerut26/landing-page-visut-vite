import { useEffect, useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Footer from "./components/Footer";
import NET from "vanta/dist/vanta.net.min.js";

function App() {
  const [LogooadSuccess, setLogoloadSuccess] = useState(false);

  const vantaRef = useRef(null);

  useEffect(() => {
    NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      spacing: 20.0,
      color: 0xffe005,
      backgroundColor: 0x141400,
      showDots: false,
    });
    return () => {
      vantaRef.current = null;
    };
  }, []);

  return (
    <>
      <div ref={vantaRef} className=" bg-black h-screen">
        <div className="h-full relative">
          <div className="flex flex-col bg-title select-none h-full items-center justify-center duration-500 gap-3 md:gap-4 lg:gap-6 animate__animated animate__fadeIn ">
            <div
              className={`duration-150 w-[8rem] md:w-[9rem] lg:w-[10rem] h-[10rem] md:h-[11rem] lg:h-[12rem] ${
                LogooadSuccess ? "" : "blur-lg bg-yellow-200/30 rounded-full"
              }`}
            >
              <img
                className="w-full"
                onLoad={() => setLogoloadSuccess(true)}
                src="/icon.svg"
                alt="visut logo"
              />
            </div>
            <div className="flex flex-col text-center ">
              <div className="font-bold duration-500 text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent text-white ">
                โรงเรียนวิสุทธรังษี
              </div>
              <div className="text-2xl md:text-3xl duration-500 lg:text-4xl bg-clip-text text-transparent text-white">
                Visuttharangsi School
              </div>
            </div>
            <a
              href="http://www.visut.ac.th/vs/"
              className="hover:scale-[105%] text-md sm:text-xl md:text-2xl max-w-[15rem] md:max-w-[18rem] lg:max-w-[22rem] w-full shadow-md ease-in-out duration-150 no-underline bg-gradient-to-r from-primary1 to-primary2 hover:to-primary1 cursor-pointer font-bold flex justify-center text-white px-3 md:px-[3rem] py-3 md:py-3 lg:py-4 rounded-3xl"
            >
              เข้าสู่เว็บไซต์
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
