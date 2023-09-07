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
import { useSoftUIController, setDemographics } from "context";
import SoftInput from "components/SoftInput";


import { useTheme } from "@mui/material/styles"; // Import the useTheme hook
import SoftDatePicker from "components/SoftDatePicker";
import SoftSelect from "components/SoftSelect";


function PatientDemographics({ bgColor, count, title, icon, color, Hospital, Physician, DOB, Race, MRN, FIN, Gender, LRR, LRL }) {
  const theme = useTheme(); // Access the current theme
  const [controller, dispatch] = useSoftUIController();
  const { demographics, transparentSidenav } = controller;
  console.log(theme.palette[color]); // Log the palette color object

  return (
    <Card>

<SoftBox bgColor={bgColor} variant="gradient">
        <SoftBox p={2}>
          <Grid container alignItems="center">
              
            <Grid item xs={5}>
              <SoftBox ml={2} lineHeight={1} mt={2}>
                <SoftTypography
                  variant="button"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                {"Patient's Last Name"}
                </SoftTypography>
                <SoftTypography
                  variant="h4"
                  fontWeight="bold"
                  color={bgColor === "white" ? "dark" : "white"}
                  textTransform="uppercase"
                >
                  {<SoftInput></SoftInput>}
                </SoftTypography>
              </SoftBox>
            </Grid>

            <Grid item xs={5}>
              <SoftBox ml={2} lineHeight={1} mt={2}>
                <SoftTypography
                  variant="button"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                {"First Name"}
                </SoftTypography>
                <SoftTypography
                  variant="h4"
                  fontWeight="bold"
                  color={bgColor === "white" ? "dark" : "white"}
                  textTransform="uppercase"
                >
                  {<SoftInput></SoftInput>}
                </SoftTypography>
              </SoftBox>
            </Grid>

            <Grid item xs={2}>
              <SoftBox ml={2} lineHeight={1} mt={2}>
                <SoftTypography
                  variant="button"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                {"Middle Initial"}
                </SoftTypography>
                <SoftTypography
                  variant="h4"
                  fontWeight="bold"
                  color={bgColor === "white" ? "dark" : "white"}
                  textTransform="uppercase"
                >
                  {<SoftInput></SoftInput>}
                </SoftTypography>
              </SoftBox>
            </Grid>

      
            <Grid item xs={12}>
              <SoftBox ml={2} lineHeight={1} mt={2}>
                <SoftTypography
                  variant="button"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                {"Select Hospital"}
                </SoftTypography>
                <SoftTypography
                  variant="h4"
                  fontWeight="bold"
                  color={bgColor === "white" ? "dark" : "white"}
                  textTransform="uppercase"
                >
                  {<SoftSelect></SoftSelect>}
                </SoftTypography>
              </SoftBox>
            </Grid>
              

            <Grid item xs={12}>
              <SoftBox ml={2} lineHeight={1} mt={2}>
                <SoftTypography
                  variant="button"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                {"Attending Physician"}
                </SoftTypography>
                <SoftTypography
                  variant="h4"
                  fontWeight="bold"
                  color={bgColor === "white" ? "dark" : "white"}
                  textTransform="uppercase"
                >
                  {<SoftInput></SoftInput>}
                </SoftTypography>
              </SoftBox>
            </Grid>



            <Grid item xs={3}>
              <SoftBox ml={2} lineHeight={1} mt={2}>
                <SoftTypography
                  variant="button"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                {"Date of Birth"}
                </SoftTypography>
                <SoftTypography
                  variant="h4"
                  fontWeight="bold"
                  color={bgColor === "white" ? "dark" : "white"}
                  textTransform="uppercase"
                >
                  {<SoftDatePicker></SoftDatePicker>}
                </SoftTypography>
              </SoftBox>
            </Grid>



            <Grid item xs={4}>
              <SoftBox ml={2} lineHeight={1} mt={2}>
                <SoftTypography
                  variant="button"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                {"Race"}
                </SoftTypography>
                <SoftTypography
                  variant="h4"
                  fontWeight="bold"
                  color={bgColor === "white" ? "dark" : "white"}
                  textTransform="uppercase"
                >
                  {<SoftInput></SoftInput>}
                </SoftTypography>
              </SoftBox>
            </Grid>





            <Grid item xs={2}>
              <SoftBox ml={2} lineHeight={1} mt={2}>
                <SoftTypography
                  variant="button"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                {"Gender"}
                </SoftTypography>
                <SoftTypography
                  variant="h4"
                  fontWeight="bold"
                  color={bgColor === "white" ? "dark" : "white"}
                  textTransform="uppercase"
                >
                  {<SoftInput></SoftInput>}
                </SoftTypography>
              </SoftBox>
            </Grid>

            <Grid item mx={2}>
                <SoftBox mt={4}
                  variant="gradient"
                  bgColor={bgColor === "white" ? icon.color : "white"}
                  color={bgColor === "white" ? "white" : "dark"}
                  width="3rem"
                  height="3rem"
                  borderRadius="md"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  shadow="md"
                >
                  <Icon fontSize="large" color="inherit">
                    {icon.component}
                  </Icon>
                </SoftBox>
              </Grid>


              <Grid item xs={2}>
              <SoftBox ml={2} lineHeight={1} mt={2}>
                <SoftTypography
                  variant="button"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                {"MRN"}
                </SoftTypography>
                <SoftTypography
                  variant="h4"
                  fontWeight="bold"
                  color={bgColor === "white" ? "dark" : "white"}
                  textTransform="uppercase"
                >
                  {<SoftInput></SoftInput>}
                </SoftTypography>
              </SoftBox>
            </Grid>

            <Grid item xs={2}>
              <SoftBox ml={2} lineHeight={1} mt={2}>
                <SoftTypography
                  variant="button"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                {"FIN"}
                </SoftTypography>
                <SoftTypography
                  variant="h4"
                  fontWeight="bold"
                  color={bgColor === "white" ? "dark" : "white"}
                  textTransform="uppercase"
                >
                  {<SoftInput></SoftInput>}
                </SoftTypography>
              </SoftBox>
            </Grid>
            
            <Grid item xs={2}>
              <SoftBox ml={2} lineHeight={1} mt={2}>
                <SoftTypography
                  variant="button"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                {"Date of SAH"}
                </SoftTypography>
                <SoftTypography
                  variant="h4"
                  fontWeight="bold"
                  color={bgColor === "white" ? "dark" : "white"}
                  textTransform="uppercase"
                >
                  {<SoftDatePicker></SoftDatePicker>}
                </SoftTypography>
              </SoftBox>
            </Grid>



            <Grid item xs={2}>
              <SoftBox ml={2} lineHeight={1} mt={2}>
                <SoftTypography
                  variant="button"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                {"Date of Surgery"}
                </SoftTypography>
                <SoftTypography
                  variant="h4"
                  fontWeight="bold"
                  color={bgColor === "white" ? "dark" : "white"}
                  textTransform="uppercase"
                >
                  {<SoftDatePicker></SoftDatePicker>}
                </SoftTypography>
              </SoftBox>
            </Grid>

          </Grid>
        </SoftBox>
      </SoftBox>
      <SoftBox p={2}>
        

        
              
          <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <SoftBox display="inline" flexDirection="row" height="100%">
             
              <SoftTypography
                component="a"
                href="#"
                variant="button"
                color="text"
                fontWeight="medium"
                fontSize="1.125rem"
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
                Save Patient
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </SoftTypography>
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
  fieldsData: "",
  bgColor: "white"
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
  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "info2", "success", "warning", "error", "dark", "female", "male"]),
    component: PropTypes.node.isRequired,
  }).isRequired,
  title: PropTypes.PropTypes.shape({
    fontWeight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
    text: PropTypes.string,
  }),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  bgColor: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark", "female", "male"]),
};
export default PatientDemographics;
