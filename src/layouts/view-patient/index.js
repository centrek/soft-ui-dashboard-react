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
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import MiniStatisticsCardIconLeft from "examples/Cards/StatisticsCards/MiniStatisticsCardIconLeft";

import ReportsBarChartDates from "examples/Charts/BarCharts/ReportsBarChartDates";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import PatientDemographics from "layouts/dashboard/components/PatientDemographics";
import LindegaardRatioDefined from "layouts/dashboard/components/LindegaardRatioDefined";

import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "./data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import MiniStatisticsCardNoIcon from "examples/Cards/StatisticsCards/MiniStatisticsCardNoIcon";
    
function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <MiniStatisticsCardIconLeft
                title={{ text: "Patient Name" }}
                count="LASTNAME, FIRSTNAME"
                percentage={{ color: "info", text: "03/05/1945" }}
                icon={{ color: "info", component: "sick" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={2}>
              <MiniStatisticsCardNoIcon
                title={{ text: "Date of SAH" }}
                count="07/26/2023"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={2}>
              <MiniStatisticsCardNoIcon
                title={{ text: "Date of Sx" }}
                count="07/29/2023"
              />
            </Grid>
          
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <PatientDemographics />
            </Grid>
            <Grid item xs={12} lg={4}>
              <LindegaardRatioDefined />
            </Grid>
          </Grid>
        </SoftBox>
      <SoftBox mb={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={5}>
          <ReportsBarChartDates
            title="Vessels Insonated"
                description={
                  <>
                  </>//              (<strong>+23%</strong>) than last week

                }
            chart={chart}
              />
              
        </Grid>
        <Grid item xs={12} lg={7}>
          <GradientLineChart
            title="Sales Overview"
                description={
                  <SoftBox display="flex" alignItems="center">
              <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                <Icon className="font-bold">arrow_upward</Icon>
              </SoftBox>
              <SoftTypography variant="button" color="text" fontWeight="medium">
                4% more{" "}
                <SoftTypography variant="button" color="text" fontWeight="regular">
                  in 2021
                </SoftTypography>
              </SoftTypography>
                  </SoftBox>
                }
            height="20.25rem"
                chart={gradientLineChartData}
              />
        </Grid>
      </Grid>
        </SoftBox>
        <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={8}>
          <Projects />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <OrderOverview />
        </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
