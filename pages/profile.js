// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from "../lib/user";
import Layout from "../components/layout";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

import { MultiSelect } from "@progress/kendo-react-dropdowns";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ProfileCard = ({ user }) => {
  return (
    <div class="max-w-sm flex  bg-white rounded-lg shadow-xl">
      <div class="flex-shrink-0">
        <img
          class="h-32 w-32 rounded-l-lg"
          src={user.picture}
          alt="user picture"
        />
      </div>
      <div class="ml-6 pt-1">
        <h4 class="text-xl text-gray-900 leading-tight">{user.name} </h4>
        <p class="text-base text-gray-600 leading-normal">{user.nickname}</p>
      </div>
    </div>
  );
};

function Profile() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { user, loading } = useFetchUser({ required: true });

  const job_type = [
    { label: "Casual", value: 1 },
    { label: "Internship", value: 2 },
    { label: "Graduate", value: 3 },
  ];

  const industry_type = [
    { label: "Accounting", value: 1 },
    { label: "Backend Developer", value: 2 },
    { label: "Civil Engineer", value: 3 },
    { label: "Data Analyst", value: 4 },
    { label: "Frontend Developer", value: 5 },
    { label: "Mechatronics Engineer", value: 6 },
    { label: "Sales and Marketing", value: 7 },
    { label: "Software Developer", value: 8 },
    { label: "UX/UI Designer", value: 9 },
  ];

  const skills_to_learn = [
    { label: "C", value: 1 },
    { label: "C#", value: 2 },
    { label: "C++", value: 3 },
    { label: "Java", value: 4 },
    { label: "HTML/CSS", value: 5 },
    { label: "Matlab", value: 6 },
    { label: "Python", value: 7 },
    { label: "React", value: 8 },
  ];

  const foods = [
    "Garlic bread",
    "Chicken nuggets",
    "Potatoes",
    "Rice",
    "Tomato sauce",
    "Broccoli",
    "Cheddar",
    "Cereal",
    "Beef",
    "Lobster",
    "Salmon",
    "Mushrooms",
    "Onions",
    "Apples",
    "Oranges",
    "Burritos",
  ];

  const drinks = [
    "Milk",
    "Water",
    "Apple juice",
    "Orange juice",
    "Beer",
    "Soda",
    "Champagne",
    "Red wine",
    "Rum",
    "Sake",
  ];

  return (
    <Layout user={user} loading={loading}>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <h1>Profile Page</h1>
          <ProfileCard user={user} />
          <button href="/api/logout">Logout</button>
          <h1>Goals</h1>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value={0}>
                <em>Pre-uni</em>
              </MenuItem>
              <MenuItem value={1}>1st year</MenuItem>
              <MenuItem value={2}>2nd year</MenuItem>
              <MenuItem value={3}>3rd year</MenuItem>
              <MenuItem value={4}>4th year</MenuItem>
              <MenuItem value={5}>5th year</MenuItem>
              <MenuItem value={6}>Postgrad</MenuItem>
              <MenuItem value={7}>Graduate</MenuItem>
            </Select>
            <FormHelperText>What stage of uni are you at?</FormHelperText>
          </FormControl>

          <h2>What job type are you interested in?</h2>
          <ReactMultiSelectCheckboxes options={job_type} />

          <h2>What job industry do you want to work in?</h2>
          <ReactMultiSelectCheckboxes options={industry_type} />

          <h2>Which skills would you like to learn?</h2>
          <ReactMultiSelectCheckboxes options={skills_to_learn} />

          <MultiSelect
            style={{ width: "100%" }}
            label="Foods"
            name="foods"
            data={foods}
            required={true}
          />
        </>
      )}
    </Layout>
  );
}

export default Profile;
