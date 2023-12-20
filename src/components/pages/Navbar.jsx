import React, { useState } from "react";
import { LOGO } from "../imgs/expimg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../language/i18next";

function Navbar({ setModalVisible, modalVisible }) {
  const { t } = useTranslation();
  // console.log(activeLanguage);

  return (
    <div className="w-full min-h-[70px] bg-[rgba(0,0,0,.8)] fixed z-50 px-5">
      <nav className="flex items-center justify-between minMobil:w-full tablet:max-w-[900px] m-auto  h-[70px]">
        <Link
          to={"/"}
          className="flex items-center justify-center h-full overflow-hidden no-underline align-baseline"
        >
          <img
            className="w-20 h-full -rotate-[5deg] flex  items-center justify-center"
            src={LOGO}
            alt="#"
          />
          <span className="flex items-center justify-center text-xl text-white">
            IT.CLUB BUKHARA
          </span>
        </Link>
        <div className="flex items-center justify-center gap-5">
          <select
            className="border py-[10px] px-3 rounded bg-transparent text-white"
            aria-label="Default select example"
            value={localStorage.getItem("lang")} // activeLanguage o'rniga localStorage dan olingan tilni ishlatamiz
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option className="bg-white text-black" value="uz">
              uz
            </option>
            <option className="bg-white text-black" value="ru">
              ru
            </option>
            <option className="bg-white text-black" value="eng">
              eng
            </option>
          </select>

          <button
            onClick={() => setModalVisible(true)}
            className="tablet:px-5 tablet:py-2 minMobil:px-3 minMobil:py-2  tablet:text-white minMobil:text-white bg-[rgba(0,0,0,.5)] border  hover:bg-[rgba(255,255,255)] hover:text-black rounded-lg teblet:text-xl minMobil:text-base"
          >
            {t("Navbar_button")}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
