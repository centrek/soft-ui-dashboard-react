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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";


function MiniStatisticsCardIconLeft({ bgColor, title, count, percentage, icon, direction, fieldsData}) {
  console.log("Icon Color:", icon.color); // Check if "patientFemale" is being printed

  return (
    <Card>
      <SoftBox bgColor={bgColor} variant="gradient">
        <SoftBox p={2}>
          <Grid container alignItems="center">
              <Grid item mx={2}>
                <SoftBox
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
            <Grid item xs={8}>
              <SoftBox ml={direction === "left" ? 2 : 0} lineHeight={1}>
                <SoftTypography
                  variant="button"
                  color={bgColor === "white" ? "text" : "white"}
                  opacity={bgColor === "white" ? 1 : 0.7}
                  textTransform="capitalize"
                  fontWeight={title.fontWeight}
                >
                {title.text}
                    <SoftTypography variant="button" color={percentage.color} fontWeight="bold" ml={8}>
                      DOB: {percentage.text}
                    </SoftTypography>
                </SoftTypography>
                <SoftTypography
                  variant="h3"
                  fontWeight="bold"
                  color={bgColor === "white" ? "dark" : "white"}
                  textTransform="uppercase"
                >
                  {count}{" "}

                </SoftTypography>
              </SoftBox>
            </Grid>
              
          </Grid>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

// Setting default values for the props of MiniStatisticsCard
MiniStatisticsCardIconLeft.defaultProps = {
  bgColor: "white",
  title: {
    fontWeight: "medium",
    text: "",
  },
  percentage: {
    color: "success",
    text: "",
  },
  direction: "right",
};

// Typechecking props for the MiniStatisticsCard
MiniStatisticsCardIconLeft.propTypes = {
  bgColor: PropTypes.oneOf([
    "white",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "female",
    "male",
  ]),
  title: PropTypes.PropTypes.shape({
    fontWeight: PropTypes.oneOf(["light", "regular", "medium", "bold"]),
    text: PropTypes.string,
  }),
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
      "female",
      "male",
    ]),
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),

  icon: PropTypes.shape({
    color: PropTypes.oneOf(["primary", "secondary", "info", "info2", "success", "warning", "error", "dark", "female", "male"]),
    component: PropTypes.node.isRequired,
  }).isRequired,
  direction: PropTypes.oneOf(["right", "left"]),
  fieldsData: PropTypes.string
};

export default MiniStatisticsCardIconLeft;
