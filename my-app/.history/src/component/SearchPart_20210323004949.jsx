import React from 'react'
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
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
      width: 250,
    },
  },
};

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



export const SearchPart = () => {

  const classes = useStyles();
  const theme = useTheme();
  const [CityName, setCityName] = React.useState([]);
    const [personName, setPersonName] = React.useState([]);


  const handleChange = (event) => {
    setCityName(event.target.value);
  };
   const handleChangeSpeciality = (event) => {
     setPersonName(event.target.value);
   };

  
  return (
    <div>
      <FormControl className={classes.formControl}>
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

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Select a city </InputLabel>
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
  );
};
