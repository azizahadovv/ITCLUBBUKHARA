import React from "react";
import "../../language/i18next";
import { useTranslation } from "react-i18next";
import { ALCHEMIST } from "../imgs/expimg";


function Location(props) {
  const { t } = useTranslation();
  return (
    <div className="w-full min-h-[500px]  flex items-center justify-center my-6 text-white">
      <div className="flex tablet:items-start  minMobil:items-center flex-wrap tabletIst:justify-center minMobil:justify-center tablet:px-7 minMobil:px-3 py-10 bg-[rgba(0,0,0,.4)] brightness-95  w-3xl min-h-max rounded-xl gap-10">
        <iframe
          className="rounded"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.2411973032495!2d64.41978637584381!3d39.756692671553274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5007ff1094dc23%3A0x21341b812cff65c0!2sIT%20CLUB%20BUKHARA%20learning%20center!5e0!3m2!1suz!2s!4v1702811756413!5m2!1suz!2s"
          width="450"
          height="600"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade" // <-- to'g'ri yozilgan qismi
        ></iframe>
        <div className="w-[400px] py-2 px-4 flex flex-col gap-3">
          <h1 className="text-3xl">{t("Location-city-name")}</h1>
          <div className="w-full h-40">
            <img className="w-full h-full bg-center" src={ALCHEMIST} alt="" />
          </div>

          <h3 className="text-white border-b border-[#797777]">
            {t("Location-adress-name")}
          </h3>

          <div className="border-b border-[#797777]">
            <span className="text-[17px]   text-[#bfc2ca]">{t("Location-loc")}</span>
            <h3 className="text-2xl text-white">
              {t("Location-local-name")}
            </h3>
          </div>
          <div className="border-b border-[#797777]">
            <span className="text-[17px]   text-[#bfc2ca]">{t("Location-work-time")}</span>
            <h3 className="text-2xl text-white">09:00 - 18:00</h3>
          </div>
          <div className="border-b border-[#797777]">
            <span className="text-[17px]   text-[#bfc2ca]">{t("Location-phone-number")}</span>
            <h3 className="text-2xl text-white">+998 97 861 11 99</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
