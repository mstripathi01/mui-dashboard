import React from "react";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Navbar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { GeoChart } from "../charts/GeoChart";
import { PieChart } from "../charts/PieChart";
import { HbarChart } from "../charts/HBarChart";
import CountUp from "react-countup";

function Analytics() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Stack direction="row" spacing={2}>
                  <Box sx={{ width: "50%" }}>
                    <Card sx={{ height: 19 + "vh" }} className="gradient">
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#fff" }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          sx={{ color: "#ccd1d1" }}
                        >
                          <CountUp start={0.4} end={24000} delay={0.6} />
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          sx={{ color: "#ccd1d1" }}
                        >
                          Since Last Week
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ height: 19 + "vh", marginTop: "16px" }}
                      className="gradient-light"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#fff" }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          sx={{ color: "#ccd1d1" }}
                        >
                          <CountUp start={0.4} end={32000} delay={0.6} />
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          sx={{ color: "#ccd1d1" }}
                        >
                          Since Last Week
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                  <Box sx={{ width: "50%", height: "50%" }}>
                    <Card sx={{ height: 19 + "vh" }} className="gradient">
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#fff" }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          sx={{ color: "#ccd1d1" }}
                        >
                          <CountUp start={0.4} end={39000} delay={0.6} />
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          sx={{ color: "#ccd1d1" }}
                        >
                          Since Last Week
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ height: 19 + "vh", marginTop: "16px" }}
                      className="gradient-light"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: "#fff" }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          sx={{ color: "#ccd1d1" }}
                        >
                          <CountUp start={0.4} end={40000} delay={0.6} />
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          sx={{ color: "#ccd1d1" }}
                        >
                          Since Last Week
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={7}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <HbarChart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Box height={16} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <GeoChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 40 + "vh" }}>
                  <CardContent>
                    <PieChart />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Analytics;
