import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [LogooadSuccess, setLogoloadSuccess] = useState(false)
  return (
    <>
      <div className="bg-gradient-to-b from-secondary1/30 to-secondary1/5 h-screen">
        <div className="h-full relative">
          <div className="flex flex-col select-none h-full items-center justify-center duration-500 gap-3 md:gap-4 lg:gap-6 animate__animated animate__fadeIn ">
            <div
              className={`duration-150 w-[8rem] md:w-[9rem] lg:w-[10rem] h-[10rem] md:h-[11rem] lg:h-[12rem] ${
                LogooadSuccess ? "" : "blur-lg bg-yellow-200 rounded-full"
              }`}
            >
              <img
                className="w-full"
                onLoad={() => setLogoloadSuccess(true)}
                src="/icon.svg"
                alt="visut logo"
              />
            </div>
            <div className="flex flex-col text-center">
              <div className="font-bold duration-500 text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary1 to-primary2">
                โรงเรียนวิสุทธรังษี
              </div>
              <div className="text-2xl md:text-3xl duration-500 lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary1 to-primary2">
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
