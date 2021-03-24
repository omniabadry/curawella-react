import { CHANGE_LANG } from ".././types";
import "../../i18n/i18n";

export const changeLang = (locale, isRTL) => {
    if (locale === "en") {
        document.getElementById("css-style").setAttribute("href", "/css/En/style.css");
        // document.getElementById("css-bootstrap").setAttribute("href", "/css/En/bootstrap.css");

    } else {
        document.getElementById("css-style").setAttribute("href", "/css/Ar/style.css");
        // document.getElementById("css-bootstrap").setAttribute("href", "/css/Ar/bootstrap.css");
    }

    return {
        type: CHANGE_LANG,
        locale,
        isRTL,
    };
};