import React from 'react';
import "../../language/i18next"
import { useTranslation } from "react-i18next";

function Introduction(props) {
    const { t } = useTranslation();
    return (
        <div className='w-full min-h-[340px] bg-[rgba(0,0,0,.4)] brightness-95 flex items-center justify-center border-t border-b border-[rgba(156,152,152,.7)] text-white'>
            <div className='text-center minMobil:py-4 minMobil:px-2 tablet:px-0'>
                <span className='text-white minMobil:text-3xl tablet:text-4xl'>{t("Introduction-title")}</span>
                <p className='text-white minMobil:text-base tablet:text-xl mt-7'>{t("Introduction-text")}</p>
            </div>
        </div>
    );
}

export default Introduction;