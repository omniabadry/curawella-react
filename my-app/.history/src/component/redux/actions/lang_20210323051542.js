import { CHANGE_LANG } from ".././types";
import "../../i18n/i18n";

export const changeLang = (locale, isRTL) => {
    if (locale === "en") {
        document.getElementById("css-style").setAttribute("href", "/css/style.css");

    } else {
        document.getElementById("css-style").setAttribute("href", "/css/style.css");
    }

    return {
        type: CHANGE_LANG,
        locale,
        isRTL,
    };
};