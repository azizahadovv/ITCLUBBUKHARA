import React from "react";
import { LOGO } from "../imgs/expimg";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaUser,
  FaYoutube,
} from "react-icons/fa";

import "../../language/i18next";
import { useTranslation } from "react-i18next";

function Footer({ Toaster1 }) {
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-[200px]  flex items-center justify-center bg-[rgba(0,0,0,.4)] text-white flex-wrap">
      <footer className="tablet:max-w-[950px] minMobil:w-full p-4 h-full  flex tablet:flex-row minMobil:flex-col gap-4 items-center justify-between">
        <div className="flex minMobil:flex-row  items-end tablet:justify-start minMobil:justify-center gap-3 tablet:w-[40%] minMobil:w-full">
          <div className="flex flex-col items-center justify-center ">
            <img
              className="tablet:w-[130px] minMobil:w-[130px] "
              src={LOGO}
              alt="Logo"
            />
            <p className="leading-1 minMobil:text-base tablet:text-xl tablet:hidden">IT.CLUB BUKHARA</p>
          </div>

          <div className="flex flex-col items-start justify-center leading-3 minMobil:hidden tablet:block">
            <p className="cursor-pointer" onClick={() => Toaster1(1)}>
              {t("Footer-courses")}
            </p>
            <p className="text-[12px] font-mono minMobil:hidden tablet:block">
              © “IT CLUB BUKHARA”, 2023 - {t("Footer-safe-history")}
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-start justify-center gap-3">
          <div className="flex items-center justify-center gap-3">
            <Link to={"https://www.facebook.com/azizahadovv/"}>
              <FaFacebook className="hover:text-[blue] transitionHover text-gray-200 text-[22px]" />
            </Link>
            <Link to={"https://www.instagram.com/itclubbukhara/"}>
              <FaInstagram className="hover:text-[red] transitionHover text-gray-200 text-[22px]" />
            </Link>
            <Link to={"https://www.linkedin.com/in/азиз-ахадов-5b2591263/"}>
              <FaLinkedin className="hover:text-[blue] text-gray-200 transitionHover text-[22px]" />
            </Link>
            <Link to={"https://t.me/IT_CLUB_BUKHARA"}>
              <FaTelegram className="hover:text-[blue] text-gray-200  text-[22px] transitionHover" />
            </Link>
            <Link to={"https://youtube.com/@azizahadov?si=RRj36rm4RYdnbP7b"}>
              <FaYoutube className="hover:text-[red] text-gray-200  text-[22px] transitionHover" />
            </Link>
            <Link to={"/developerPanel"} title="Admin Panel">
              <FaUser className="hover:text-[orange] text-gray-200  text-[20px] transitionHover" />
            </Link>
          </div>
          <p className="text-white tablet:text-[25px] minMobil:text-[22px] leading-4 flex items-center justify-center align-text-bottom gap-2 font-mono">
            <span className="text-gray-400 tablet:text-[20px] minMobil:text-[18px]">
              {t("Footer-call-center")}:
            </span>
            <a href="tel:+998935445658" className="text-white no-underline">93-544-56-58</a>
          </p>
          <p className="text-[12px] leading-2 font-mono minMobil:block tablet:hidden">
            © “IT CLUB BUKHARA”, 2023 - Barcha huquqlar himoyalangan.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
