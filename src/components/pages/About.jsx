import React from 'react';
import "../../language/i18next"
import { useTranslation } from "react-i18next";

function About(props) {
    const { t } = useTranslation();
    return (
        <div className='w-full min-h-max bg-[rgba(0,0,0,.4)] brightness-95   border-t border-b border-[rgba(156,152,152,.7)] text-white'>
            <div className='max-w-5xl min-h-[500px]  m-auto px-4 minMobil:py-7 flex items-start justify-center flex-col gap-5'>
                <div className='w-full px-4 h-max'>
                    <h2 className='text-[45px] minMobil:text-center tablet:text-left'>{t("About-title")}</h2>
                </div>
                <div className='flex flex-wrap items-start justify-center w-full gap-3 align-baseline'>
                    <div className='flex flex-col max-w-[300px] gap-2'>
                        <h2 className='text-2xl '>{t("About-card-title")}</h2>
                        <p className='text-[16px] font-normal'>{t("About-card-text")}</p>
                    </div>
                    <div className='flex flex-col max-w-[300px] gap-2 align-baseline'>
                        <h2 className='text-2xl '>{t("About-card-two-title")}</h2>
                        <p className='text-[16px] font-normal'>{t("About-card-two-text")}</p>
                    </div>
                    <div className='flex flex-col max-w-[300px] gap-2 align-baseline'>
                        <h2 className='text-2xl '>{t("About-card-three-title")}</h2>
                        <p className='text-[16px] font-normal'>{t("About-card-three-text")}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default About;