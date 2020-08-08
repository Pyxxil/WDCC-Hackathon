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
    { label: "Junior Graduate", value: 3 },
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
              <MenuItem value={5}>Postgrad</MenuItem>
              <MenuItem value={6}>Graduated</MenuItem>
            </Select>
            <FormHelperText>What stage of uni are you at?</FormHelperText>
          </FormControl>

          <ReactMultiSelectCheckboxes options={job_type} />
        </>
      )}
    </Layout>
  );
}

export default Profile;
