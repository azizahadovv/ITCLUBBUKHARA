import React from 'react';
import "../../language/i18next"
import { useTranslation } from "react-i18next";

function Introduction(props) {
    const { t } = useTranslation();
    return (
        <div className='w-full h-[340px] bg-[rgba(0,0,0,.4)] brightness-95 flex items-center justify-center border-t border-b border-[rgba(156,152,152,.7)] text-white'>
            <div className='text-center'>
                <span className='text-4xl text-white'>{t("Introduction-title")}</span>
                <p className='text-xl text-white mt-7'>{t("Introduction-text")}</p>
            </div>

        </div>
    );
}

export default Introduction;