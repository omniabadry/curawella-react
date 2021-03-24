import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SearchPage } from "./component/searchPage";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function App() {
    const { i18n } = useTranslation();

    const lang = useSelector((state) => state.langState.locale);

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [i18n, lang]);
    return ( <
        >
        <
        Router >
        <
        Switch >
        <
        Route path = "/"
        exact component = { SearchPage }
        /> <
        /Switch> <
        /Router> <
        />
    );
}

export default App;