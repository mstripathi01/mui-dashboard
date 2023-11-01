import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";

export default function Password() {
  return (
    <>
      <Grid container spacing={2} sx={{ mt: "20" }}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" align="left">
                Change Password
              </Typography>
              <Divider sx={{mt: 2}} />
              <Grid container spacing={2} sx={{ mt: "20" }}>
                <Grid item xs={6}>
                  <TextField
                    id="current-password"
                    type="password"
                    label="Current Password"
                    name="current-password"
                    sx={{ marginTop: "30px", minWidth: "100%" }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: "20" }}>
                <Grid item xs={6}>
                  <TextField
                    id="new-password"
                    type="password"
                    label="New Password"
                    name="new-password"
                    sx={{ marginTop: "30px", minWidth: "100%" }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="password"
                    id="confirm-password"
                    label="Confirm Password"
                    name="confirm-password"
                    sx={{ marginTop: "30px", minWidth: "100%" }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
