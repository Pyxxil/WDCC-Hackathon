// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import useSWR from "swr";

import { useFetchUser } from "../lib/user";
import Layout from "../components/layout";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import config from "../lib/config";

import { MultiSelect } from "@progress/kendo-react-dropdowns";
import { useEffect } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

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
  const { user, loading } = useFetchUser({ required: true });
  const preferences = useSWR(
    `${config.HOST}/api/preferences${user ? "/" + user.nickname : ""}`,
    fetcher
  );
  const [state, setState] = React.useState({});

  const handleChange = (pref) => {
    return (event) => {
      setState({ ...state, [pref]: event.target.value });
    };
  };

  useEffect(() => {
    if (preferences.data) {
      setState(preferences.data[0]);
    }
  }, [preferences.data]);

  console.log("Preferences", preferences.data);
  console.log("State", state);

  const job_type = ["Casual", "Internship", "Graduate"];

  const industry_type = [
    "Design",
    "Robotics",
    "Photography",
    "Management",
    "Software Developer",
  ];

  const skills_to_learn = [
    "Cloud",
    "JavaScript",
    "Leadership",
    "Photoshop",
    "Python",
    "React",
  ];

  const saveData = () => {
    if (user) {
      fetch("/api/preferences/" + user.nickname, {
        method: "post",
        body: JSON.stringify(state),
      });
    }
  };

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
                value={state.Year || ""}
                onChange={handleChange("Year")}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"0"}>Pre-uni</MenuItem>
                <MenuItem value={"1"}>1st year</MenuItem>
                <MenuItem value={"2"}>2nd year</MenuItem>
                <MenuItem value={"3"}>3rd year</MenuItem>
                <MenuItem value={"4"}>4th year</MenuItem>
                <MenuItem value={"5"}>5th year</MenuItem>
                <MenuItem value={"6"}>Postgrad</MenuItem>
                <MenuItem value={"7"}>Graduate</MenuItem>
              </Select>
            </FormControl>

            <h2>What job type are you interested in?</h2>
            <MultiSelect
              style={{ width: "100%" }}
              label="Job types"
              name="job types"
              data={job_type}
              required={false}
              onChange={handleChange("Job")}
              value={state.Job || []}
            />

            <h2>What job industry do you want to work in?</h2>
            <MultiSelect
              style={{ width: "100%" }}
              label="Industry"
              name="industry"
              data={industry_type}
              required={false}
              onChange={handleChange("Industry")}
              value={state.Industry || []}
            />

            <h2>Which skills would you like to learn?</h2>
            <MultiSelect
              style={{ width: "100%" }}
              label="Skills"
              name="skills"
              data={skills_to_learn}
              required={false}
              onChange={handleChange("Skills")}
              value={state.Skills || []}
            />
            <br />
            <br />

            <Button variant="outlined" color="primary" onClick={saveData}>
              Save
            </Button>
          </div>
        </>
      )}
    </Layout>
  );
}

export default Profile;
