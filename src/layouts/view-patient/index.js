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
import React, { useState } from "react";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import PageLayout from "examples/LayoutContainers/PageLayout";

import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import MiniStatisticsCardIconLeft from "examples/Cards/StatisticsCards/MiniStatisticsCardIconLeft";

import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsBarChartDates from "examples/Charts/BarCharts/ReportsBarChartDates";
import GradientLineChartPatient from "examples/Charts/LineCharts/GradientLineChartPatient";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";


// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import PatientDemographics from "layouts/dashboard/components/PatientDemographics";
import LindegaardRatioDefined from "layouts/dashboard/components/LindegaardRatioDefined";

import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Tests from "layouts/dashboard/components/Tests";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import PatientChartTimeline from "layouts/dashboard/components/PatientChartTimeline";


// Data
import reportsBarChartData from "./data/reportsBarChartData";
import gradientLineChartData from "./data/gradientLineChartData";
import MiniStatisticsCardNoIcon from "examples/Cards/StatisticsCards/MiniStatisticsCardNoIcon";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import HorizontalBarChart from "examples/Charts/BarCharts/HorizontalBarChart";
import SuiDropzone from "components/SoftDropzone";
import DataUploadModal from "layouts/dashboard/components/ViewDropzone"; // Import the component


    
function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const [modalOpen, setModalOpen] = useState(true);
  const [patientFile, setPatientFile] = useState(null);

  const handleFileUpload = (file) => {
    // Process the uploaded file here
    setPatientFile(file);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <DataUploadModal open={modalOpen} onClose={() => setModalOpen(false)} onFileUpload={handleFileUpload} />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <MiniStatisticsCardIconLeft
                title={{ text: "Patient Name" }}
                count="Phillipson, Suzanne"
                percentage={{ color: "female", text: "03/05/1945" }}
                icon={{ color: "female", component: "sick" }}
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
                title={{ text: "Date of Surgery" }}
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
              <SoftBox display="flex" alignItems="center">
          <SoftBox fontSize={size.lg} color="error" mb={0.3} mr={0.5} lineHeight={0}>
            <Icon className="font-bold">arrow_downward</Icon>
          </SoftBox>
          <SoftTypography variant="button" color="text" fontWeight="bold">
            On latest Test - 1 less{" "}
            <SoftTypography variant="button" color="text" fontWeight="regular">
              than max (14 insonated on 08/01)
            </SoftTypography>
          </SoftTypography>
              </SoftBox>
            }
            chart={chart}
            color={"secondary"}
              />
        </Grid>
        <Grid item xs={12} lg={7}>
          <GradientLineChartPatient
            title="Vessel Velocities"
                description={
                  <SoftBox display="flex" alignItems="center">
              <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                <Icon className="font-bold">arrow_upward</Icon>
              </SoftBox>
              <SoftTypography variant="button" color="text" fontWeight="medium">
                32% increase{" "}
                <SoftTypography variant="button" color="text" fontWeight="regular">
                  since Day 1 on M1
                </SoftTypography>
              </SoftTypography>
                  </SoftBox>
                }
            height="100%"
                chart={gradientLineChartData}
              />
        </Grid>
      </Grid>
        </SoftBox>
        <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={8}>
          <Tests />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <PatientChartTimeline />
        </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
