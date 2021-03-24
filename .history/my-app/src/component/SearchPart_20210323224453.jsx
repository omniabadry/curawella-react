import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { axiosInstance } from "../axiosConfig";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: "100%",
    maxWidth: "100%",
    // color: "#00c3ec"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

export const SearchPart = () => {
  const { t } = useTranslation();

  const City = [
    "All",
    "Alexandria",
    "Cairo",
    "Aswan",
    "Asyut",
    "Sohag",
    "Qena",
    "Sinai",
    "kafr Elsheikh",
    "New Villag",
    "Matrouh",
    "Red Sea",
    "Suez",
    "Minya",
    "Faiyoum",
    "Monufia",
    "Qalyobia",
    "Dakahlia",
    "Sharkia",
    "Gharbia",
    "Port Said",
    "Beni Suif",
    "Behira",
    "Luxor",
    "Ismailia",
    "Almansora",
  ];

  const Speciality = [
    "All",
    "Urologist & Nephologist",
    "Texologist",
    "Physiotherapist",
    "Dermatologist",
    "Orthopedist",
    "Oncologist",
    "Cardiologist",
    "Ophthalmologist",
    "Internist & Parasitologist",
    "Nutritionist",
    "Pulmonologist",
    "Intensivist",
    "Psychiatrist",
    "Neurologist",
    "Veterinarine",
    "Gynecologist & Obstetrician",
    "Otolaryngologist",
    "Surgery",
    "Gastroenterologist & Heptalogist",
    "General Doctor ",
    "Dentistry",
    "Radiology",
    "Andrologist",
    "Allergist",
  ];

  const classes = useStyles();
  const [CityName, setCityName] = React.useState([]);
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setCityName(event.target.value);
  };
  const handleChangeSpeciality = (event) => {
    setPersonName(event.target.value);
  };

  const [searchValue, setSearchValue] = useState("");
  const [books, setBooks] = useState();

  const getBooks = () => {
    axiosInstance
      .get("", {
        params: {
          q: searchValue ? searchValue : "keyword",
        },
      })
      .then((res) => {
        setBooks(res.data.items);
      });
  };
  useEffect(() => {
    getBooks();
  }, [searchValue]);

  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };
  const getCards = () => {
    if (books) {
      let cards = [];
      for (let index = 0; index < books.length; index++) {
        cards.push(
          <Card className="col-xl-3 col-m-6  col-12 cardd">
            <CardBody>
              <CardTitle tag="h5">
                {books[index]["volumeInfo"]["title"]}
              </CardTitle>
              <CardSubtitle tag="h6">
                {books[index]["volumeInfo"]["categories"]}
              </CardSubtitle>
              <CardText> {books[index]["volumeInfo"]["authors"]} </CardText>
            </CardBody>
          </Card>
        );
      }
      return cards;
    }
  };

  return (
    <>
      <div className="container-fluid" id="DivSearch">
        <div className="row pr-4">
          <div
            className="col-xl-7 col-lg-12 col-md-12 col-12"
            id="divInputSearch"
          >
            <div className="row">
              <div className="col-10">
                <input
                  value={searchValue}
                  onChange={handleInput}
                  className="form-control"
                  id="myInput"
                  type="text"
                  placeholder={t("Search by doctor name")}
                  name="search"
                  // id="search"
                />
              </div>
              <div className="col-2">
                <i class="fas fa-search" id="IconSearch"></i>
              </div>
            </div>
          </div>

          <div className="col-xl-2 col-md-6 col-12 " style={{ float: "left" }}>
            <FormControl className={classes.formControl} id="form">
              <InputLabel id="demo-mutiple-name-label">
                Select a speciality
              </InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                // multiple
                value={personName}
                onChange={handleChangeSpeciality}
                input={<Input />}
                MenuProps={MenuProps}
                // style={{ borderBottom: "rgb(107, 104, 104) 2px solid" }}
              >
                {Speciality.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    // style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="col-xl-2 col-md-6 col-12 " style={{ float: "left" }}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-name-label">
                Select a city{" "}
              </InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                id="demo-mutiple-name"
                // multiple
                value={CityName}
                onChange={handleChange}
                input={<Input />}
                MenuProps={MenuProps}
              >
                {City.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    // style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="col-1"></div>
        </div>

        <div className="row secondrow">
          <div className="col-3"></div>
          <div className="col-2">
            <input
              className="form-control minInput"
              name="phone"
              type="number"
              placeholder={t("Min LE")}
            />
          </div>

          <div className="col-2">
            <input
              className="form-control minInput"
              name="phone"
              type="number"
              placeholder={t("Max LE")}
            />
          </div>
          <div className="col-3">
            <button id="buttonApplyPrice">{t("Apply price range")}</button>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#f4f4f4",
          textAlign: "center",
          padding: "1rem",
          marginLeft: "33px",
          marginRight: "33px",
        }}
      >
        <div class="scrollmenu">
          {/* className="container-fluid"
            style={{
              paddingLeft: "2.5%",
              paddingRight: "2.5%",
              paddingTop: "1.5%",
              paddingBottom: "1.5%",
            }} */}
          <a
            href="#All"
            style={{
              backgroundColor: "#00c3ec",
              borderRadius: "38% 38%",
              color: "white",
            }}
          >
            {t("All")}
          </a>
          <a href="#General Practitioner">{t("General Practitioner")}</a>
          <a href="#Specialist">{t("Specialist")}</a>
          <a href="#Assistant Lecture">{t("Assistant Lecture")}</a>
          <a href="#Consultant">{t("Consultant")}</a>
          <a href="#Lecturer">{t("Lecturer")}</a>
          <a href="#Assistant professor">{t("Assistant professor")}</a>
          <a href="#Professor">{t("Professor")}</a>
        </div>
      </div>
      <div
        className="card-fluid cards"
        style={{
          textAlign: "center",
          backgroundColor: "#f4f4f4",
        }}
      >
        {/* <div className="card"> */}
        <div className="books"> {getCards()} </div>
        {/* </div> */}
      </div>
    </>
  );
};
