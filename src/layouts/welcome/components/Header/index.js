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

import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";

// Soft UI Dashboard React examples
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Soft UI Dashboard React icons
import Cube from "examples/Icons/Cube";
import Document from "examples/Icons/Document";
import Settings from "examples/Icons/Settings";

// Soft UI Dashboard React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import curved06 from "assets/images/curved-images/curved-6.jpg";
import TomCDLogo from "assets/images/logos/TomCD_Logo1_Transparent.png";

function Header() {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <SoftBox position="relative">
      <DashboardNavbar absolute light />
      <SoftBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="14.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.0),
              rgba(gradients.info.state, 0.1)
            )}, url(${curved06})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          backdropFilter: `saturate(200%) blur(30px)`,
          backgroundColor: ({ functions: { rgba }, palette: { white } }) => rgba(white.main, 0.8),
          boxShadow: ({ boxShadows: { navbarBoxShadow } }) => navbarBoxShadow,
          position: "relative",
          mx: 4,
          my: -12,
          py: 10,
          px: 4,
        }}
      >
      
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <SoftAvatar
              src={TomCDLogo}
              alt="profile-image"
              variant="rounded"
              size="xl"
              shadow="sm"
            />
          </Grid>

          <Grid item>
            <SoftBox height="100%" mt={0.15} lineHeight={1}>
              <SoftTypography variant="h3" fontWeight="medium">
                Welcome to TomCD
              </SoftTypography>
              <SoftTypography variant="button" color="text" fontWeight="medium">
                The GameChanger
              </SoftTypography>
            </SoftBox>
          </Grid>

          

        </Grid>
        <Grid item>
            <SoftBox height="100%" mt={2} lineHeight={1}>
              
            </SoftBox>
          </Grid>
        <Grid item>
            <SoftBox height="100%" mt={1} lineHeight={1}>
              <SoftTypography variant="h5" fontWeight="medium">
              In order to get started, please use the navigation on the left
              <br />
              <br />
              </SoftTypography>
              <SoftTypography variant="button" color="text" fontWeight="medium">
              To view a patient, click on the <u>View Patient button</u> and then drop your patient data file on the window.
              <br />
              </SoftTypography>
              <SoftTypography variant="button" color="text" fontWeight="medium">
              To create a new patient, click on the <u>Create Patient button</u> on the left and begin charting.
              <br /></SoftTypography>
            </SoftBox>
          </Grid>
      </Card>

      
    </SoftBox>
  );
}

export default Header;
