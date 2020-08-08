// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import { useFetchUser } from "../lib/user";
import Layout from "../components/layout";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

// import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

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

  const job_type = ["Casual", "Internship", "Graduate"];

  const industry_type = [
    "Accounting",
    "Backend Developer",
    "Civil Engineer",
    "Data Analyst",
    "Frontend Developer",
    "Mechatronics Engineer",
    "Sales and Marketing",
    "Software Developer",
    "UX/UI Designer",
  ];

  const skills_to_learn = [
    "C",
    "C#",
    "C++",
    "Java",
    "HTML/CSS",
    "Matlab",
    "Python",
    "React",
  ];

  return (
    <Layout user={user} loading={loading}>
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <div className="profile-content">
            <h1>Profile Page</h1>
            <ProfileCard user={user} />
            <br />
            <Button variant="outlined" color="secondary" href="/api/logout">
              Logout
            </Button>
            <h1>Goals</h1>
            <h2>What stage of University are you at?</h2>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Year</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={0}>Pre-uni</MenuItem>
                <MenuItem value={1}>1st year</MenuItem>
                <MenuItem value={2}>2nd year</MenuItem>
                <MenuItem value={3}>3rd year</MenuItem>
                <MenuItem value={4}>4th year</MenuItem>
                <MenuItem value={5}>5th year</MenuItem>
                <MenuItem value={6}>Postgrad</MenuItem>
                <MenuItem value={7}>Graduate</MenuItem>
              </Select>
            </FormControl>

            <h2>What job type are you interested in?</h2>
            <MultiSelect
              style={{ width: "100%" }}
              label="Job types"
              name="job types"
              data={job_type}
              required={false}
            />

            <h2>What job industry do you want to work in?</h2>
            <MultiSelect
              style={{ width: "100%" }}
              label="Industry"
              name="industry"
              data={industry_type}
              required={false}
            />

            <h2>Which skills would you like to learn?</h2>
            <MultiSelect
              style={{ width: "100%" }}
              label="Skills"
              name="skills"
              data={skills_to_learn}
              required={false}
            />
            <br />
            <br />

            <Button variant="outlined" color="primary">
              Save
            </Button>
          </div>
        </>
      )}
    </Layout>
  );
}

export default Profile;
