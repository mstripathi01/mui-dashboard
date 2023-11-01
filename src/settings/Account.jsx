import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Switch from "@mui/material/Switch";

export default function Account() {
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  const locations = [
    {
      value: "United State",
      label: "United State",
    },
    {
      value: "India",
      label: "India",
    },
    {
      value: "Germany",
      label: "Germant",
    },
  ];

  const utypes = [
    {
      value: "Super Admin",
      label: "Super Admin",
    },
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
    {
      value: "User",
      label: "User",
    },
  ];

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <>
      <Grid container spacing={2} sx={{ mt: "20" }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" align="left">
                General Setting
              </Typography>
              <Divider sx={{ mt: 2 }} />
              <Grid container spacing={2} sx={{ mt: "20" }}>
                <Grid item xs={6}>
                  <TextField
                    label="Username"
                    value="Mayank"
                    name="username"
                    sx={{ marginTop: "30px", minWidth: "100%" }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Account Email"
                    value="mayanktripathi@gmail.com"
                    type="email"
                    name="email"
                    sx={{ marginTop: "30px", minWidth: "100%" }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: "20" }}>
                <Grid item xs={6}>
                  <TextField
                    label="User Type"
                    name="type"
                    value="Super Admin"
                    select
                    sx={{ marginTop: "30px", minWidth: "100%" }}
                    variant="outlined"
                  >
                    {utypes.map((option) => (
                      <option key={option.value} value={option.value}>
                        &nbsp;&nbsp;{option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Location"
                    name="location"
                    value="India"
                    select
                    sx={{ marginTop: "30px", minWidth: "100%" }}
                    variant="outlined"
                  >
                    {locations.map((option) => (
                      <option key={option.value} value={option.value}>
                        &nbsp;&nbsp; {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box height={20} />
      <Grid container spacing={2} sx={{ mt: "200" }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" align="left">
                Advance Setting
              </Typography>
              <Divider sx={{ mt: 2 }} />
              <Grid container spacing={2} sx={{ mt: "20" }}>
                <Grid item xs={6}>
                  <FormControl component="fieldset" variant="standard">
                    <FormLabel component="legend">
                      Assign responsibility
                    </FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={state.gilad}
                            onChange={handleChange}
                            name="gilad"
                          />
                        }
                        label="Gilad Gray"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={state.jason}
                            onChange={handleChange}
                            name="jason"
                          />
                        }
                        label="Jason Killian"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={state.antoine}
                            onChange={handleChange}
                            name="antoine"
                          />
                        }
                        label="Antoine Llorca"
                      />
                    </FormGroup>
                    <FormHelperText>Be careful</FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
