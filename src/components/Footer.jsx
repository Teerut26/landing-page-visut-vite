import { useState } from "react";
// import GitInfo from "./Footer/GitInfo";

const IconSocialMedia = ({ icon, href }) => {
  return (
    <a href={href}>
      <div className="text-3xl hover:scale-[110%] duration-150">
        <i class={icon}></i>
      </div>
    </a>
  );
};

export default function Footer() {
  const [ShowGitInfo, setShowGitInfo] = useState(false);
  return (
    <>
      <div className="w-full bg-primary1 text-white py-3 bg-gradient-to-r from-primary1 to-primary2">
        <div className="max-w-4xl lg:max-w-7xl mx-auto px-5 md:px-10 flex flex-col md:flex-row justify-center sm2:justify-between h-full items-start sm2:items-center gap-4 duration-500">
          <div className="flex flex-col gap-2">
            <div
              onDoubleClick={() => setShowGitInfo(!ShowGitInfo)}
              className="flex items-center gap-2"
            >
              <img
                className="w-[40px] md:w-[50px] duration-500"
                src="/icon.svg"
                alt="visut logo"
              />
              <div>
                <div>โรงเรียนวิสุทธรังษี จังหวัดกาญจนบุรี</div>
                <div>Visuttharangsi Kanchanaburi School</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3">
              <IconSocialMedia
                icon="bi bi-facebook"
                href="https://www.facebook.com/visuttharangsi.kanchanaburi/"
              />
              <IconSocialMedia
                icon="bi bi-envelope-fill"
                href="mailto: visut_info@visut.ac.th"
              />
              <IconSocialMedia
                icon="bi bi-telephone-fill"
                href="tel:0-3451-1773"
              />
              <IconSocialMedia
                icon="bi bi-geo-alt-fill"
                href="https://goo.gl/maps/W4S2WNEBA3nh8FD76"
              />
            </div>
          </div>
        </div>
      </div>
      {/* {ShowGitInfo ? <GitInfo /> : ""} */}
    </>
  );
}
