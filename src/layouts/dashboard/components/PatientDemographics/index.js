/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/rocket-white.png";
import { useSoftUIController, setDemographics } from "context";

import { useTheme } from "@mui/material/styles"; // Import the useTheme hook


function PatientDemographics({ color, Hospital, Physician, DOB, Race, MRN, FIN, Gender, LRR, LRL }) {
  const theme = useTheme(); // Access the current theme
  const [controller, dispatch] = useSoftUIController();
  const { demographics, transparentSidenav } = controller;
  console.log(theme.palette[color]); // Log the palette color object

  return (
    <Card>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          <Grid item>
              <SoftTypography py={0} my={0} variant="h4" fontWeight="bold" gutterBottom>
                Hospital:  {Hospital}
              </SoftTypography>
          </Grid>
        </Grid>
              
          <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <SoftBox display="flex" flexDirection="column" height="100%">
              <SoftBox pt={0} mb={0.5}>
              </SoftBox>

              <SoftTypography variant="h4" fontWeight="regular" gutterBottom>
                Physician: {Physician}
              </SoftTypography>
              <SoftBox mb={6}>
                <SoftTypography variant="body2" color="text">
                  DOB:  <b>{DOB}</b>
                  <br />
                  Race:  <b>{Race}</b>
                  <br />
                  MRN:  <b>{MRN}</b>
                  <br />
                  FIN:  <b>{FIN}</b>
                  <br />
                  Gender: <b>{Gender}</b>
                  <br />
                </SoftTypography>
              </SoftBox>
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                color="text"
                fontWeight="medium"
                sx={{
                  mt: "auto",
                  mr: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  cursor: "pointer",

                  "& .material-icons-round": {
                    fontSize: "1.125rem",
                    transform: `translate(2px, -0.5px)`,
                    transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
                  },

                  "&:hover .material-icons-round, &:focus  .material-icons-round": {
                    transform: `translate(6px, -0.5px)`,
                  },
                }}
              >
                Edit Patient
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </SoftTypography>
            </SoftBox>
          </Grid>
          <Grid item xs={12} lg={5} sx={{ position: "relative", ml: "auto" }}>
            <SoftBox 
              height="100%"
              display="grid"
              justifyContent="center"
              bgColor={color} // Use the theme color
              borderRadius="lg"
              variant="gradient"
            >
              <SoftBox 
                component="img"
                src={wavesWhite}
                alt="waves"
                position="absolute"
                left={0}
                width="100%"
                height="100%"

              />
            <SoftTypography justifyContent="center" pt={3} variant="h2" color="white" fontWeight="bold">
              Lindegaard Ratio
            </SoftTypography>
              <Grid container justifyContent="center">
                <SoftTypography px={3} variant="h4" color="white" fontWeight="bold">
                 Right
                </SoftTypography>
                <SoftTypography px={3} variant="h4" color="white" fontWeight="bold">
                 Left
                </SoftTypography>
              </Grid>
              <Grid container justifyContent="center">
                <SoftTypography px={3} mb={8} variant="lindegaard" fontSize="60px" color="white" fontWeight="bold">
                 0.7
                </SoftTypography>
                <SoftTypography px={3} mb={8} variant="lindegaard" fontSize="60px" color="white" fontWeight="bold">
                 0.5
                </SoftTypography>
              </Grid>
                
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of Sidenav
PatientDemographics.defaultProps = {
  color: "info",
  brand: "",
  fieldsData: ""
};

// Typechecking props for the Sidenav
PatientDemographics.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark", "female", "male"]),
  brand: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
  Hospital: PropTypes.string,
  Physician: PropTypes.string,
  DOB: PropTypes.string,
  Race: PropTypes.string,
  MRN: PropTypes.number,
  FIN: PropTypes.number,
  Gender: PropTypes.string,
  LRR: PropTypes.string,
  LRL: PropTypes.string,
};
export default PatientDemographics;
