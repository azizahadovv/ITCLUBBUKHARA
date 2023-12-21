import React from 'react'
import "./style.css"
import "../../language/i18next"
import { useTranslation } from "react-i18next";

function Hero({ setModalVisible, modalVisible }) {
  const { t } = useTranslation();
  return (
    <div className='flex flex-col items-center justify-center w-full p-4 text-white banner_wrappwer_img'>
      <div className='tablet:max-w-[900px] minMobil:w-full min-h-[400px] flex tablet:items-start minMobil:items-center justify-center flex-col gap-3'>
        <h1 className='tablet:text-5xl minMobil:text-4xl minMobil:text-center tablet:text-left'>{t("Hero-title")}</h1>
        <p className='minMobil:text-center tablet:text-left tablet:text-[16px] minMobil:text-[14px]'>{t("Hero-text")}</p>
        <button onClick={() => (setModalVisible(true))} className='bg-purple-500 rounded minMobil:p-2 tablet:p-3'>{t("Hero-button")}</button>
      </div>
    </div>
  )
}
export default Hero
