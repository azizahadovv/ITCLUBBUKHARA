import React from "react";
import { BESIC, MOBILE, WEB } from "../imgs/expimg";
import "../../language/i18next";
import { useTranslation } from "react-i18next";

function Courses(props) {
  const { t } = useTranslation();
  return (
    <div className="min-h-[605px] flex flex-col gap-3 minMobil:py-9 items-center justify-around bg-[rgba(0,0,0,.4)] brightness-95 border-t border-b border-[rgba(156,152,152,.7)] text-white">
      <h2 className="mb-[10px]">{t("Courses-Offered-title")}</h2>
      <div className="flex flex-wrap justify-around gap-5">
        <div className="w-[290px] h-[350px] flex flex-col rounded items-center justify-between transitionHover hover:bg-[rgba(0,0,0,.3)]">
          <img className="w-full h-[170px] rounded-lg" src={BESIC} alt="" />
          <div className="min-h-[45%] w-full px-2 flex flex-col items-start justify-evenly align-baseline">
            <span className="text-2xl minMobil:text-lg">
              {t("Courses-card-one-title")}
            </span>
            <p className=" minMobil:text-s">
              {t("Courses-card-one-text")}
            </p>
          </div>
        </div>
        <div className="w-[290px] h-[350px] flex flex-col rounded items-center justify-between transitionHover hover:bg-[rgba(0,0,0,.3)]">
          <img className="w-full h-[170px] rounded-lg" src={WEB} alt="" />
          <div className="min-h-[45%] w-full px-2 flex flex-col items-start justify-evenly align-baseline">
              
            <span className="text-2xl minMobil:text-lg">{t("Courses-card-two-title")}</span>
            <p className="minMobil:text-sm">
            {t("Courses-card-two-text")}
            </p>
          </div>
        </div>
        <div className="w-[290px] h-[350px] flex flex-col rounded items-center justify-between transitionHover hover:bg-[rgba(0,0,0,.3)]">
          <img className="w-full h-[170px] rounded-lg" src={MOBILE} alt="" />
          <div className="min-h-[45%] w-full px-2 flex flex-col items-start justify-evenly align-baseline">
            <span className="text-2xl minMobil:text-lg">
            {t("Courses-card-three-title")}
            </span>
            <p className=" minMobil:text-sm">
            {t("Courses-card-three-text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
