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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "examples/Cards/PlaceholderCard";

// Overview page components
import Header from "layouts/welcome/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Overview() {
  return (
    <DashboardLayout>
      <Header />
      <SoftBox mt={10} mb={3}>
        <Grid container spacing={3}>
          <Grid item xs={9} md={6} xl={3}>
          
          </Grid> 
        </Grid>
      </SoftBox>

      <SoftBox mb={3} px={4}>
        <Card>
          
          <SoftBox pt={2} px={4}>
          
            <SoftBox mb={0.5}>
              <SoftTypography variant="h6" fontWeight="medium">
                Upcoming Features
              </SoftTypography>
            </SoftBox>

          <Grid container spacing={5}>
            
            <Grid item xs>
            <SoftBox mb={3}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
                <u>Week 1 - Began 7/28/2023</u>
                <li><s>Create Welcome Page</s></li>
                <li><s>Change the footer</s></li>
                <li><s>Fix Logo on SideNav</s></li>
                <li><s>Style Sign-In Page</s></li>
                <li><s>Design Sign-in/up Pages</s></li>
                <li><s>Adjust Navigation to include Welcome, View, Create, Quality</s></li>
                <li><s>Build Structure for displaying patient info</s></li>
                <li><s>Add in dropping of .tommy</s></li>
                <li><s>After Drop, Add filename to dashboardnav and a clear jsonData button</s></li>
                <li>Populate all fields on drop .tommy</li>
                <li>Other stuff here...</li>
              </SoftTypography>
            </SoftBox>
            </Grid>

            <Grid item xs>
            <SoftBox mb={1}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
              <u>Week 2</u>
                <li>Populate charts on drop .tommy</li>
                <li>Add pagination of test on ViewPatient</li>
                <li>Populate Create Patient Page</li>
                <li>Basic style to get started</li>
                <li>Add Edit Patient Info button with lockdown</li>
                <li>Add download patient button</li>
                <li>Add a New Test button</li>
                <li>Format JSON to accept multiple tests</li>
                <li>Other stuff here...</li>
              </SoftTypography>
            </SoftBox>
            </Grid>


            <Grid item xs>
            <SoftBox mb={1}>
              <SoftTypography variant="button" fontWeight="regular" color="text">
              <u>Week 3, infinity and beyond</u>
                <li>For Billing, Generate unique serial# per patient</li>
                <li>Ensure serial# is marked paid before saving patient</li>
                <li>Ensure serial# is marked paid before viewing patient</li>
                <li>If serial# is not paid, do not allow view patient</li>
                <li>Other stuff here...</li>
              </SoftTypography>
            </SoftBox>
            </Grid>

          </Grid>
          </SoftBox>
          
          <SoftBox p={2}>
          <Grid container spacing={3}>
     
          </Grid>
          </SoftBox>

        </Card>
      </SoftBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
