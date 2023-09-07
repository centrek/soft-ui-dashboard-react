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
import React, { useState, useCallback } from "react"; // Import useCallback

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftDatePicker from "components/SoftDatePicker";
import SoftSelect from "components/SoftSelect";

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
import PatientDemographics from "layouts/dashboard/components/AddPatientDemographics";
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
import SoftDropzoneViewPatient from "components/SoftDropzoneViewPatient";
import DataUploadModal from "layouts/dashboard/components/ViewDropzone"; // Import the component
import Dropzone from "dropzone";
import { initialPatientState } from 'components/Variables';
import { AssignmentSharp } from "@mui/icons-material";
import { assignPatientVariables } from "components/Variables";
import { Button, TextField, FormGroup } from "@mui/material"; // Using MUI for form elements
import SoftInput from "components/SoftInput";


    
function CreatePatient() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const [modalOpen, setModalOpen] = useState(true);
  const [patientFile, setPatientFile] = useState(null);
  const [handleFileUpload, setFileUpload] = useState(null);
  const [fieldsData, setFieldsData] = useState(null);
  const [initialFieldsData, setInitialFieldsData] = useState(null);
  const [patientDetails, setPatientDetails] = useState({});
  const [testData, setTestData] = useState([]);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [patientData, setPatientData] = useState({});
  

  const handleChange = (path, value) => {
    // Logic to set deeply nested state
    let data = { ...patientData };
    let p = path.pop();
    path.reduce((xs, x) => (xs && xs[x]) ? xs[x] : xs, data)[p] = value;
    setPatientData(data);
};
const handleSubmit = (e) => {
  e.preventDefault();
  // Logic to save the data as .tommy file
  const blob = new Blob([JSON.stringify(patientData)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'patient_data.tommy';
  link.click();
};

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {fieldsData && fieldsData.patient.Name ? (
      <Grid item xs={12} lg={8}>
      <MiniStatisticsCardIconLeft
        title={{ text: "WARNING:  PATIENT DATA LOADED" }}
        count={"WARNING:  PATIENT DATA LOADED"}
        percentage={{ color: (fieldsData?.patient?.Gender.toLowerCase() === 'male' ? 'male' : fieldsData?.patient?.Gender.toLowerCase() === 'female' ? 'female' : 'secondary'), text: fieldsData?.patient?.DOB }}
        icon={{ color: (fieldsData?.patient?.Gender.toLowerCase() === 'male' ? 'male' : fieldsData?.patient?.Gender.toLowerCase() === 'female' ? 'female' : 'secondary'), component: "sick" }}
      />
    </Grid>
      
      ):(
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={8}>
              <PatientDemographics  
                title={{ text: "Enter Patient Name" }}
                count={<SoftInput></SoftInput>}
                percentage={{ color: (fieldsData?.patient?.Gender.toLowerCase() === 'male' ? 'male' : fieldsData?.patient?.Gender.toLowerCase() === 'female' ? 'female' : 'secondary'), text: fieldsData?.patient?.DOB }}
                icon={{ color: (fieldsData?.patient?.Gender.toLowerCase() === 'male' ? 'male' : fieldsData?.patient?.Gender.toLowerCase() === 'female' ? 'female' : 'secondary'), component: "sick" }}
              />
            </Grid>
          </Grid>
        </SoftBox>
  
        
      </SoftBox>
      )}
      <Footer />
    </DashboardLayout>
  );
}

export default CreatePatient;
